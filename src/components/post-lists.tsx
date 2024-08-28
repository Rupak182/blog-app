import Link from "next/link"
import prisma from "@/lib/db";

export default async function PostList() {
    // await new Promise((resolve)=>setTimeout(resolve,1000))
    const posts = await prisma.post.findMany({
        orderBy:{
            createdAt:"desc"
        }
    });

    return (
        <ul>
            {
                posts.map((post) => (
                        <li key={post.id} className="bg-zinc-100 w-10/12 m-auto mb-3  px-3 py-4 rounded-xl ">
                            
                        <Link href={`/posts/${post.slug}` } >
                           <div className="bg-white py-4 px-3 space-y-3">
                           <h2 className="text-3xl font-bold ">{post.title}</h2>  
                           <p className="text-sm text-zinc-500">Creating a comfortable and efficient home office environment can significantly boost productivity and reduce strain. In this guide, we’ll explore essential tips for setting up an ergonomic workspace that supports your well-being.</p>
                           </div>
                        </Link>


                        </li>

                ))
            }
    </ul>
    )
}
