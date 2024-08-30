// import NextAuth, { CredentialsSignin } from "next-auth"
// import GoogleProvider from 'next-auth/providers/google'
// import CredentialProvider from 'next-auth/providers/credentials'
// import prisma from "./lib/db"
// import bcrypt from 'bcrypt'
// import authConfig from "./auth.config"
// import { PrismaAdapter } from "@auth/prisma-adapter"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//     adapter:PrismaAdapter(prisma),
//     session:{strategy:"jwt"},
//     ...authConfig,

//   providers: [
//     GoogleProvider({
//         clientId:process.env.GOOGLE_CLIENT_ID,
//         clientSecret:process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialProvider({
//         name:"Credentials",
//         credentials:{
//             email:{
//                 label:"Email",
//                 type:"email"
//             },
//             password:{
//                 label:"Password",
//                 type:"password"
//             }
//         },
//         // authorize: async ({email,password})=>{
//         //     console.log(email,password)

//         //     const user = {email:"sssd",id:"dfd"}

//         //     if(typeof email !=="string")
//         //         throw new CredentialsSignin({cause:"Email Invalid"});

//         //     if(password !== "passCode")
//         //         throw new CredentialsSignin({cause:"Password does not match"});
//         //     else
//         //         return user;
//         // }

//         authorize: async (credentials)=>{

//             const email = credentials.email as string | undefined
//             const password = credentials.password as string | undefined

//             if(!email || !password)
//                 throw new CredentialsSignin("Please provide both email and password");


//             const user = await prisma.user.findUnique({
//                 where:{
//                     email
//                 }
//             })

//             if(!user)
//                 throw new CredentialsSignin("Invalid email or password");

//             const validPassword = await bcrypt.compare(password,user.password) 

//             if(!validPassword)
//                 throw new CredentialsSignin("Invalid email or password");
            
//             return {name:user.name, email:user.password};  //security purpose
//         }
  
//     })   // authorize callback

//   ],
// })






// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "./lib/db";
// import authConfig from "./auth.config";

// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
//   } = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     session: { strategy: "jwt" },
//     ...authConfig,
//   });




import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/db";
import bcrypt from 'bcrypt'


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.

        credentials:{
          email:{label:"Email", type:"email"},
          password:{label:"Password", type:"password"}
        },

        authorize: async (credentials)=>{

            const email = credentials.email as string | undefined
            const password = credentials.password as string | undefined
            if(!email || !password)
              throw new CredentialsSignin("Please provide both email and password");
            
            
            const user = await prisma.user.findUnique({
                where:{
                    email
                }
            })

            if(!user)
                throw new CredentialsSignin("Invalid email or password");


            const validPassword = await bcrypt.compare(password,user.password) 

            if(!validPassword)
                throw new CredentialsSignin("Invalid email or password");
            
            return user

        }
      
    }),

  ],

  pages: {
    signIn: 'auth/login',
  },

  callbacks:{
    jwt({token,user}){
      if(user){
        token.name = user.name as string
        token.id = user.id as string

      }
      return token
    },


    session ({session,token}){
      session.user.name = token.name
      session.user.id = token.id

      return session
    }
  }



  
  
})