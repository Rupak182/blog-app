'use client'

import { deletePost,editPost } from "@/actions/action";
import { useRouter } from "next/navigation";

export default function PostButtons({slug}:{slug:string}) {



  const router = useRouter();
  return (

    <div className="modify flex justify-between px-5 mb-10 mt-10">
        <button onClick={()=>router.push(`/update-post/${slug}`)} className="bg-blue-500 text-white p-2 rounded-full px-7 mt-4 ">Edit</button>
        <button onClick={()=>deletePost(slug)}  className="bg-red-500 text-white p-2 rounded-full px-4 mt-4 font-semibold">Delete</button>
    </div>

  )
}
