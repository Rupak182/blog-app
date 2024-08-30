'use server'

import { RegisterSchema } from '@/schemas';
import z from 'zod'
import bcrypt from 'bcrypt'
import prisma from '@/lib/db';


export async function Register(values:z.infer<typeof RegisterSchema>) {
    await new Promise((resolve)=>setTimeout(resolve,1000))

    console.log(values);


    const validateFields = RegisterSchema.safeParse(values);


    if(!validateFields.success)
        return {error:"Invalid fields"}


    const {email,name,password} = validateFields.data

    const hashPassword = await bcrypt.hash(password,11);

    const exisingMail =await prisma.user.findUnique({
        where:{
            email
        }
    })

    const exisingUser =await prisma.user.findUnique({
        where:{
            name
        }
    })

    if(exisingMail){
        return {error:"Email already in use"}
    }

    if(exisingUser){
        return {error:"Username taken"}
    }
    
    await prisma.user.create({
        data:{
            name,
            email,
            password:hashPassword
        }
    })

    
    return {success:"Registration successful"}
}   
