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
const SubmitBtn =()=>{
  const {pending} = useFormStatus();
  return(
    <button disabled={pending} type="submit" className={`${pending?"bg-zinc-500" :"bg-blue-500"} text-white p-2 rounded px-7 mt-4 `}>{!pending?"Submit":"Submitting..."}</button>
  )
}


const initialState ={
  error:""
}
export default function UpdatePostForm({post}:postType) {

  const [state,formAction] = useFormState(editPost,initialState)
  const {title , slug ,body} = post
  return (
    <>    <form action={formAction} className="flex flex-col w-10/12  mx-auto  space-x-2 mt-10 gap-2 ">
    <input defaultValue={title} className="border rounded  px-3  h-10 " type="text" name="title" placeholder="Title for new post" required />
    <textarea defaultValue={body} name="body" placeholder="Body content for new post" rows={6} className="border rounded px-3 required py-2" />
    <input type='hidden' name='slug' value={slug}/>
    <SubmitBtn/>
    {state.error  ?<p className='text-red-500'>{state.error}</p>:null}
  </form>
  </>
  )
}
