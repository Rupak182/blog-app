'use client'
import { useForm } from 'react-hook-form'
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import { startTransition, useState } from 'react';
import { Register } from '@/actions/register';

export default function RegisterForm() {
    const [success,setSuccess] = useState<string | undefined>("")
    const [err,setErr] = useState<string | undefined>("")

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<z.infer<typeof RegisterSchema >>({
        resolver:zodResolver(RegisterSchema)

    });



    const onSubmit = async(values:z.infer<typeof RegisterSchema>) => {
        setErr("");
        setSuccess("");
        let data =await Register(values)
        if (data && data.error) setErr(data.error)
        if (data && data.success)setSuccess(data.success);
        
        reset();
        reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
            <label htmlFor="name">Name</label>
            <input {...register('name')} className="py-3 px-4  rounded-md" name="name"placeholder="John Doe" />
            {errors.name && (
                <p className='text-red-500'>{`${errors.name.message}`}</p>
            )}


            <label htmlFor="email">Email</label>
            <input {...register('email')} className="py-3 px-4  rounded-md" type="email" name="email" placeholder="john.doe@example.com" />
            {errors.email && (
                <p className='text-red-500'>{`${errors.email.message}`}</p>
            )}

            <label htmlFor="password">Password</label>
      
            <input {...register('password')} className="py-3 px-4  rounded-md" type="password" name="password" placeholder="******" />
            {errors.password && (
                <p className='text-red-500'>{`${errors.password.message}`}</p>
            )}


            <button disabled={isSubmitting}className={`${isSubmitting?"bg-zinc-500" :"bg-blue-500"} text-white my-4 text-lg font-semibold py-3 rounded-md`}>Register</button>
            
            {err?(<p className='text-red-500 text-center w-full'>{err}</p>):""}

            {success?(<p className='text-blue-500 text-center w-full'>Successful</p>):""}
        
        </form>
    )
}
