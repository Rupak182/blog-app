'use client'

import { useFormStatus,useFormState } from 'react-dom'

import { createComment,createPost } from '@/actions/action'
import React from 'react'


const SubmitBtn =()=>{
  const {pending} = useFormStatus();
  return(
    <button disabled={pending} type="submit" className={`${pending?"bg-zinc-500" :"bg-blue-500"} text-white p-2 rounded px-7 mt-4 `}>{!pending?"Add your comment":"Adding..."}</button>
  )
}


const initialState = {
  error:"",
}

export default function CommentForm({slug,userId,postId}:{slug:string|undefined, userId:string|undefined, postId:string|undefined}) {
  
  const [state,formAction] = useFormState(createComment,initialState)
  return (
    <form action={formAction}>
    <input type="hidden" value={slug} name="slug" />
        <input type="hidden" value={userId} name="userId" />
        <input type="hidden" value={postId} name="postId" />

        <textarea rows={4} className="border w-full  px-5 py-3  rounded-xl" name="commentBody" placeholder="Add your comment..." required />
        <div className="w-full flex items-center justify-end">
           <SubmitBtn/>
           {state.error ?<p className="text-red-500">{state.error}</p>:null}
        </div>

    </form>
  )
}
