// import { NextRequest } from "next/server";

// import NextAuth  from "next-auth";
// import authConfig from "@/auth.config";

// const {auth} = NextAuth(authConfig)


// export default auth((req)=>{
//     const isLoggedIn = !!req.auth;
//     console.log("ROUTE: ",req.nextUrl.pathname)
//     console.log("IS LOGGED IN: ",isLoggedIn)

// })

// // export default function middleware(req:NextRequest){

// // }


// export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// }


// // model Post{
// //     id Int @id @default(autoincrement())
// //     title String
// //     body String
// //     published Boolean @default(false)
// //     createdAt DateTime @default(now())
// //     updatedAt DateTime @updatedAt
// //   }
  
  









// import authConfig from "@/auth.config";
// import NextAuth from "next-auth";

// const { auth } = NextAuth(authConfig);

// const authRoutes = ["auth/login", "auth/register"];

// export default auth((req)=>{
//     const isLoggedIn = !!req.auth;
//     const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);
//     const isApiAuthRouter= req.nextUrl.pathname.startsWith("/api/auth");

//     if(isApiAuthRouter){
//         return;
//     }

//     if(isAuthRoute){
//         if(isLoggedIn){
//             return Response.redirect(new URL("/",req.nextUrl))
//         }
//         return ;
//     }


//     if(!isLoggedIn && !isAuthRoute)
//     {
//         return Response.redirect(new URL("/auth/login",req.nextUrl))
//     }

//     return ;

// })



// export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
//   };



// export { auth as middleware } from "@/auth"



// export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };