'use client'

import { createPost } from "@/actions/action"

import { useFormStatus ,useFormState} from "react-dom"



const SubmitBtn =()=>{
  const {pending} = useFormStatus();
  return(
    <button disabled={pending} type="submit" className={`${pending?"bg-zinc-500" :"bg-blue-500"} text-white p-2 rounded px-7 mt-4 `}>{!pending?"Submit":"Submitting..."}</button>
  )
}

const initialState = {
  error:"",
}




export default function CreatePostForm({authorId}:{authorId:string|undefined}) {

  const [state,formAction]= useFormState(createPost,initialState)
  return (
    <form action={formAction} className="flex flex-col w-10/12 mx-auto  space-x-2 mt-10 gap-2 ">
    <input  className="border rounded  px-3  h-10 " type="text" name="title" placeholder="Title for new post" required />
    <textarea name="body" placeholder="Body content for new post" rows={10} className="border rounded px-3 required py-2" />
    <input type="hidden" value={authorId} name="authorId" />
    <SubmitBtn/>
    {state.error ?<p className="text-red-500">{state.error}</p>:null}
    </form>
  )
}
