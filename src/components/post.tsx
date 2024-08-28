


import prisma from "@/lib/db";
import Link from "next/link"

import UpvoteBtn from "./upvote-btn";
import { notFound } from "next/navigation";

import PostButtons from "./post-buttons";



export default async function Post({ slug }: { slug: string }) {
    // await new Promise((resolve)=>setTimeout(resolve,1000))

    // const response = await fetch(`https://dummyjson.com/posts/${id}`);
    // const post =await response.json();

    const post = await prisma.post.findUnique({
        where: {
            slug: slug

        }
    })

    if (!post) {
        notFound();
    }

    return (
        <>
            <main className="bg-zinc-100 w-10/12 m-auto mb-3  px-3 py-3 rounded-xl leading-6 min-h-[40vh]">
 
                <div className="bg-white py-4 px-3 space-y-3 rounded-xl">
                    <h2 className="text-3xl font-bold ">{post.title}</h2>
                    <p className=" text-zinc-500">Creating a comfortable and efficient home office environment can significantly boost productivity and reduce strain. In this guide, we’ll explore essential tips for setting up an ergonomic workspace that supports your well-being. We’ll cover the best chair heights, desk setups, and monitor placements, as well as stretching exercises to keep you limber. Whether you’re working from home full-time or just need a better setup for occasional remote work, these strategies will help you create a space that fosters both comfort and efficiency.
                    </p>

                    <PostButtons slug={slug}/>

                </div>
                {/* <h1 className="text-5xl font-semibold mb-7 ">{post.title}</h1>
                <p className="max-w-[700px] mx-auto">{post.body}</p> */}
                {/* <UpvoteBtn /> */}
                
            </main>

        </>

    )
}
