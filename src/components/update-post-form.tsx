'use client'

import { createPost, editPost } from '@/actions/action'
import React from 'react'
import { useFormState,useFormStatus } from 'react-dom'

interface postType{
    post: {
    id: string;
    title: string;
    slug: string;
    body: string;
    published: boolean;
    updatedAt: Date;
    createdAt: Date;
  } 
}


const initialState ={
  error:""
}
export default function UpdatePostForm({post}:postType) {

  const {pending}= useFormStatus();
  const [state,formAction] = useFormState(editPost,initialState)
  const {title , slug ,body} = post
  return (
    <>    <form action={formAction} className="flex flex-col max-w-[400px] mx-auto  space-x-2 mt-10 gap-2 ">
    <input defaultValue={title} className="border rounded  px-3  h-10 " type="text" name="title" placeholder="Title for new post" required />
    <textarea defaultValue={body} name="body" placeholder="Body content for new post" rows={6} className="border rounded px-3 required py-2" />
    <input type='hidden' name='slug' value={slug}/>

    <button disabled={pending} className={`h-10 ${pending?'bg-zinc-500':"bg-blue-500"} px-5 rounded text-white`}>Submit</button>
    {state.error  ?<p className='text-red-500'>{state.error}</p>:null}
  </form>
  </>
  )
}
