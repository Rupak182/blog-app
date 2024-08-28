import z from 'zod'


export const LoginSchema =z.object({
    email: z.string().email(),
    password: z.string()
})



export const RegisterSchema =z.object({
    email: z.string().email(),
    password: z.string().min(5 ,"Password must be atleast 5 characters long"),
    name:z.string().min(1,"Name must be atleast 1 characters long")
})


