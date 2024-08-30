import { getSession } from "@/lib/getSession";
import { notFound, redirect } from "next/navigation";
import UpdatePostForm from '@/components/update-post-form'
import prisma from "@/lib/db";


interface paramsType {
    params:{
        slug:string
    }

}


export default async function Page({params}:paramsType) {

  const session = await getSession();

const user = session?.user
if(!user)
  redirect("/")
    
const slug = params?.slug

    const post = await prisma.post.findUnique({
        where:{
            slug,
        }
    })




    if (!post) {
        notFound();
    }

    const author = await prisma.user.findUnique({
      where: {
          id: post.authorId
      }
  })

  if(!author)
    redirect("/")


  // console.log(author?.id);
  // console.log(user.id)

  // console.log("Hi")


  
  if(user.id !== author.id)
    {
      // console.log("hello")
      redirect("/posts")
    }
  return (
    <main className="text-center pt-16 ">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">Update Post</h1>
      <UpdatePostForm post={post}/>
    </main>
  )
}
