import type { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas";
import prisma from "./lib/db";
import bcrypt from 'bcrypt'

export default {
    pages: {
        signIn: 'auth/login',
      },
    providers:[
        credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (!validatedFields.success)
                    return null;

                const { email, password } = validatedFields.data;

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                if (!user || !password)
                    return null

                const validPassword = await bcrypt.compare(password, user.password)

                if (!validPassword)
                    return null;
                
                return user;
            }
        })
    ],
} satisfies NextAuthConfig