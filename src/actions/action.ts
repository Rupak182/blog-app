'use server'
import { signOut } from "@/auth"
import prisma from "@/lib/db"
import { getSession } from "@/lib/getSession"
import { error } from "console"
import { revalidatePath } from "next/cache"
import { redirect} from "next/navigation"


  /// not to create  a server component but to create server action which is just a javascript function that runs on server side and has special features
// default already server component 
//server action like post api endpoint on server

// get data using server component and mutating data using server action

type stateType ={
    error:string 
}


export async function createPost(previousState:stateType,formData:FormData) {

    try {
        const title =formData.get("title") as string
        const body =formData.get("body") as string
        const slug =(formData.get("title") as string).replace(/\s+/g,"_").toLowerCase();
        const authorId =formData.get("authorId") as string
        await prisma.post.create({
            data:{
                title,
                body,
                slug,
                authorId
            }
        })
    
        revalidatePath("/posts")
        // return {error:""};

    } catch (error) {
        return {error:"Error in creating your post"}
    }

    redirect("/posts")  

}


export async function editPost(previousState:stateType,formData:FormData)
{

    try {
        const title =formData.get("title") as string
        const body =formData.get("body") as string
        const slug =(formData.get("title") as string).replace(/\s+/g,"_").toLowerCase();
        const previousSlug = formData.get("slug") as string
    
        await prisma.post.update({
            where: {slug:previousSlug},
            data:{
                title,
                body,
                slug
            }
        })
    
        revalidatePath(`/post`)  // update cache


    } catch (error) {
        return {error:"Error in updating yor post"}
        
    }
    redirect("/posts")  


}


export async function deletePost(slug:string){
    try {



        
        await prisma.post.delete({where:{
            slug
        }})
    
        revalidatePath("/posts")
    
    } catch (error) {
        return {error:"Error in updating yor post"}
    }


    redirect("/posts")


}

export async function logout() {
    await signOut();
}


export async function createComment(formData:FormData) {

    try {
        const commentBody =formData.get("commentBody") as string
        const userId =formData.get("userId") as string
        const slug =formData.get("slug") as string
        const postId =formData.get("postId") as string

        await prisma.comment.create({
            data:{
               userId,
               commentBody,
               postId
            }
        })
    
        revalidatePath(`/posts/${slug}`)
    } catch (error) {
        console.log(error)
    }

    // redirect("/posts")  

}
