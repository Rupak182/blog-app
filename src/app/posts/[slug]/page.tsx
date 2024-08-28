
import Post from "@/components/post"
import { Suspense } from "react"
interface paramsType {
    params:{
        slug:string
    }

}

export default async function page({params}:paramsType) {
    
  
  return (
    <main className="px-7 pt-16 ">
        <Suspense fallback="loading..">
        <Post slug={params.slug} />
        </Suspense>
    </main>
  )
}
