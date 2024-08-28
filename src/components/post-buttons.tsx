'use client'

import { deletePost,editPost } from "@/actions/action";


export default function PostButtons({slug}:{slug:string}) {
  return (

    <div className="modify text-center mb-10">
        {/* <button onClick={()=>editPost} className="bg-blue-500 text-white p-2 rounded-full px-7 mt-4 ">Edit</button> */}
        <button onClick={()=>deletePost(slug)}  className="bg-red-500 text-white p-2 rounded-full px-4 mt-4 font-semibold">Delete</button>
    </div>

  )
}
