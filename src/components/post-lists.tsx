'use client'


import Link from "next/link"
import prisma from "@/lib/db";
import { DateTime } from "next-auth/providers/kakao";
import Search from "./Search";
import { useState } from "react";



type post = {
        author: {
            name: string;
        };
        id: string;
        title: string;
        slug: string;
        body: string;
        published: boolean;
        updatedAt: Date;
        createdAt: Date;
        authorId: string;
}

type author= {
    id: string;
    name: string;
    email: string;
    password: string;
}


interface postsType {
    posts:post[],
    authorName:string | undefined
    // authors:author[]
}


export default  function PostList({posts,authorName}:postsType) {
    // await new Promise((resolve)=>setTimeout(resolve,1000))
    // const posts = await prisma.post.findMany({
    //     orderBy:{
    //         createdAt:"desc"
    //     }
    // });

    // console.log("p:", posts)


    const authors = posts.map(post=>post.author.name)
    const uniqueAuthors =authors.filter((author,index)=>authors.indexOf(author)===index);
    
    const data ="Creating a comfortable and efficient home office environment can significantly boost productivity and reduce strain. In this guide, we’ll explore essential tips for setting up an ergonomic workspace that supports your well-being."

    const filteredPosts = authorName && authorName!='*'?posts.filter(post=>post.author.name === authorName):posts
    return (
        <>
        <Search authors={uniqueAuthors}/>
        <ul>
            {
                filteredPosts.map((post) => (
                        <li key={post.id} className="bg-zinc-100 w-10/12 m-auto mb-3  px-3 py-4 rounded-xl ">
                            
                        <Link href={`/posts/${post.slug}` } >
                           <div className="bg-white py-4 px-3 space-y-3">
                           <h2 className="text-3xl font-bold ">{post.title}</h2>  
                           <p className="text-sm text-zinc-500">{post.body.slice(0,200)}{post.body.length>200 && "..."}</p>
                           </div>
                        </Link>
                        </li>

                ))
            }
    </ul>
    </>
    )
}
