'use server'
import { signOut } from "@/auth"
import prisma from "@/lib/db"
import { getSession } from "@/lib/getSession"
import { revalidatePath } from "next/cache"
import { redirect} from "next/navigation"


  /// not to create  a server component but to create server action which is just a javascript function that runs on server side and has special features
// default already server component 
//server action like post api endpoint on server

// get data using server component and mutating data using server action


export async function createPost(formData:FormData) {

    try {
        const title =formData.get("title") as string
        const body =formData.get("body") as string
        const slug =(formData.get("title") as string).replace(/\s+/g,"_").toLowerCase();
    
        await prisma.post.create({
            data:{
                title,
                body,
                slug
            }
        })
    
        revalidatePath("/posts")
    } catch (error) {
        console.log(error)
    }


}


export async function editPost(formData:FormData)
{

    try {
        const title =formData.get("title") as string
        const body =formData.get("body") as string
        const slug =(formData.get("title") as string).replace(/\s+/g,"_").toLowerCase();
    
    
        await prisma.post.update({
            where: {slug},
            data:{
                title,
                body,
                slug
            }
        })
    
    
        revalidatePath("/posts/")
        redirect("/posts/")  
    } catch (error) {
        console.log(error)
    }
   

}


export async function deletePost(slug:string){
    try {
        await prisma.post.delete({where:{
            slug
        }})
    
        revalidatePath("/posts")
        redirect("/posts")
    
    } catch (error) {
        console.log(error)
    }
    

}

export async function logout() {
    await signOut();
}