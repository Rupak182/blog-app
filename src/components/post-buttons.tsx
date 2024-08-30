'use client'

import { deletePost,editPost } from "@/actions/action";
import { useRouter } from "next/navigation";
import { useFormStatus,useFormState } from "react-dom";


const DeleteBtn =()=>{
  const {pending} = useFormStatus();
  return(
    <button disabled={pending} type="submit" className={`${pending?"bg-zinc-500" :"bg-red-500"} text-white p-2 rounded-full px-7 mt-4 `}>{!pending?"Delete":"Deleting..."}</button>
  )
}

const initialState = {
  error:"",
}





export default function PostButtons({slug}:{slug:string}) {


  const [state,formAction]= useFormState(deletePost,initialState)

  const router = useRouter();
  return (
<>
    <div className="modify flex justify-between px-5 mb-10 mt-10">
        <button onClick={()=>router.push(`/update-post/${slug}`)} className="bg-blue-500 text-white p-2 rounded-full px-7 mt-4 ">Edit</button>
        {/* <button onClick={()=>deletePost(slug)}  className="bg-red-500 text-white p-2 rounded-full px-4 mt-4 font-semibold">Delete</button> */}
        
        <form action={formAction}>
          <input type="hidden" value={slug} name="slug" />
          <DeleteBtn  />
        </form>
    </div>

    {state.error ?<p className="text-red-500 w-full text-center">{state.error}</p>:null}

    </>

  )
}
