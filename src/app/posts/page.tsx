import React, { Suspense } from 'react'
import Link from 'next/link';
import PostList from '@/components/post-lists';
import Form from '@/components/Form';
import { getSession } from '@/lib/getSession';
import { redirect } from 'next/navigation';
export default async function Page() {

// suspense need to wrap the actual data fetch

//result is fetched and cached for some time -> no fetch call everytime 

//static rendering -> html during build (when request come html is already built )
// dynamic rendering => html need to computed for every new request

const session = await getSession();

const user = session?.user
if(!user)
  redirect("/")

  return (
    <main className="  pt-16 px-5">
      <h1 className="text-4xl font-bold mb-10 md:text-5xl text-center">All posts</h1>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
      {/* <Form/> */}
    </main>
  )
}