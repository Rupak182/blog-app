
import Post from "@/components/post"
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import { Suspense } from "react"
interface paramsType {
    params:{
        slug:string
    }

}

export default async function page({params}:paramsType) {
  const session = await getSession();

  const user = session?.user
  if(!user)
    redirect("/")
  
  return (
    <main className="px-7 pt-16 ">
        <Suspense fallback="loading..">
        <Post slug={params.slug} userId={user.id} />
        </Suspense>
    </main>
  )
}
