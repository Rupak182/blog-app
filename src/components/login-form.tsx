'use client'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { login } from '@/actions/login';
import {useFormState} from 'react-dom'
import { startTransition, useState } from 'react';

export default function LoginForm() {

    const [success,setSuccess] = useState<string | undefined>("")
    const [err,setErr] = useState<string | undefined>("")

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues
    } = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema)
    });

    const onSubmit = async(values:z.infer<typeof LoginSchema>) => {
        setErr("");
        setSuccess("");
        // startTransition(()=>{
        //    login(values).then((data)=>{
        //         setErr(data.error)
        //         setSuccess(data.success);
        //         console.log(data.success)
        //     });
    

        // })

        

        let data =await login(values)
            if (data && data.error) setErr(data.error)
            // if (data && data.success)setSuccess(data.success);
        reset();
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full ">
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
            {<button disabled={isSubmitting}  className={`${isSubmitting?"bg-zinc-500" :"bg-blue-500"} text-white my-4 text-lg font-semibold py-3 rounded-md`} >Login</button>}
            
            {err?(<p className='text-red-500 text-center w-full'>{err}</p>):""}

            {success?(<p className='text-blue-500 text-center w-full'>Successful</p>):""}
        </form>

    )
}
