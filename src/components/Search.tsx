
"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useRef } from "react";
type authorsType= {
  authors:{
      id: string;
      name: string;
      email: string;
      password: string;
    }[]
  
}


export default function Search({authors}:{authors:string[]}) {

    const searchParams = useSearchParams();
    const pathName= usePathname();
    const router = useRouter();

    const inputRef = useRef<HTMLInputElement | null>(null);
    
    
    const params = new URLSearchParams() 

    const handleChange = useDebouncedCallback((query:string)=>{
           // helper class with utility function for manipulating searchparams of url
        if(query)
            params.append("query",query);
        else
            params.delete("query")
          
        router.replace(`${pathName}?${params.toString()}`)
 
        
    },300);

    const handleOption = (option:string)=>{
          // helper class with utility function for manipulating searchparams of url
                 if(inputRef.current)
          inputRef.current.value=""
      if(option)
          params.append("author",option);
      else
          params.delete("author")
      
      router.replace(`${pathName}?${params.toString()}`)
  }




  return (
    <div className="flex mb-4 w-10/12 m-auto flex-col">
        <select className="border-2 rounded-md  py-3 px-2 mb-4" onChange={(e)=>handleOption(e.target.value)}>
        <option value="*">All</option>
        {
            authors.map(author=>(
              <option key={author} value={author}>{author}</option>
            ))
        }

      </select>
      <input ref={inputRef} placeholder="Search" defaultValue={searchParams.get('query')?.toString()} onChange={(e)=>handleChange(e.target.value)} type="text" className="border rounded-full w-full py-3 px-5  bg-zinc-100 outline-none"/>

      {/* <button className="bg-blue-500 text-white text-sm  font-semibold py-1 px-2 rounded-md rounded-l-none" >Search</button> */}

    </div>
  )
}
