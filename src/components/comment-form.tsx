'use client'

import { useFormStatus } from 'react-dom'

import { createComment } from '@/actions/action'
import React from 'react'



export default function CommentForm({slug,userId,postId}:{slug:string|undefined, userId:string|undefined, postId:string|undefined}) {
  
  const {pending} = useFormStatus();
  return (
    <form action={createComment}>
    <input type="hidden" value={slug} name="slug" />
        <input type="hidden" value={userId} name="userId" />
        <input type="hidden" value={postId} name="postId" />

        <textarea rows={4} className="border w-full  px-5 py-3  rounded-xl" name="commentBody" placeholder="Add your comment..." required />
        <div className="w-full flex items-center justify-end">
            <button disabled={pending} type="submit" className={`${pending?"bg-zinc-500" :"bg-blue-500"} text-white p-2 rounded-md px-7 mt-4 `}>Add Comment</button>
        </div>

    </form>
  )
}
