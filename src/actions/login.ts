// 'use server'

// import {z} from 'zod'
// import { LoginSchema } from '@/schemas'
// import prisma from '@/lib/db'
// import bcrypt from 'bcrypt'
// import { redirect } from 'next/navigation'

// export async function login(values:z.infer<typeof LoginSchema>) {
//     await new Promise((resolve)=>setTimeout(resolve,1000))
//     console.log(values)

//     const validatedFields = LoginSchema.safeParse(values);

//     if(!validatedFields.success)
//         return {error:"Invalid fields"}

//     const {email ,password}=validatedFields.data;

//     const user= await prisma.user.findUnique({
//         where:{
//             email
//         }
//     })

//     if(!user)
//         return {error:"Incorrect email or password"}
    
//     const validPassword = await bcrypt.compare(password,user.password) 

//     if(!validPassword)
//         return {error:"Incorrect email or password"}

//     redirect("/posts")
    
//     return {success:"Login successful"}

// }   





'use server'


import { signIn } from '@/auth'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { redirect } from 'next/navigation';

export async function login(values:z.infer<typeof LoginSchema>) {

  try {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success)
            return {error:"Invalid fields"}
        
    const {email ,password}=validatedFields.data;

    try {
        const res = await signIn('credentials',{
            redirect:false,
            callbackUrl:'/',
            email,
            password
        })
    
    } catch (error) {
        return {error:"Invalid username or password"}

    }

    
  } catch (error) {

    return {error:"Something went wrong"}
  }
    redirect('/')
}   