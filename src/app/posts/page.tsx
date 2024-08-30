import React, { Suspense } from 'react'
import Link from 'next/link';
import PostList from '@/components/post-lists';
import Form from '@/components/create-post-form';
import { getSession } from '@/lib/getSession';
import { redirect } from 'next/navigation';
import prisma from '@/lib/db';
import Search from '@/components/Search';



export default async function Page({searchParams}:   // searchParams is used to get the parameters updated by search
  {
    searchParams?:{
      query?:string,
      page?:string,
      author?:string
    }
  }

) {

// suspense need to wrap the actual data fetch

//result is fetched and cached for some time -> no fetch call everytime 

//static rendering -> html during build (when request come html is already built )
// dynamic rendering => html need to computed for every new request

const session = await getSession();

const user = session?.user
if(!user)
  redirect("/")

console.log(user)


// console.log('blogs',searchParams)
  const query= searchParams?.query
  const authorName= searchParams?.author

  // const blogs =await prisma.post.findMany({
  //     where:{
  //       title:{
  //         contains:query
  //       }
  //     }
  // })






  
  const blogs=await prisma.post.findMany({
    where:query?{
      OR:[
        {title:{contains :query}},
        {body:{contains :query}}
      ],



    }:{},

    include:{
      author:true
    }


    // include:author?{
    //   author:{
    //     select:{
    //         name: true
    //     },
    // },
    // }:{},
})


  // const authorData = await prisma.user.findMany({
  //       where:author?{
  //           name:author,
  //       }:{},
  //   })


  
      
    





  return (
    <main className="  pt-16 px-5">
      <h1 className="text-4xl font-bold mb-10 md:text-5xl text-center">All posts</h1>
      
      <Suspense fallback="Loading...">
        <PostList  posts={blogs} authorName={authorName} />
      </Suspense>
      {/* <Form/> */}


    </main>
  )
}