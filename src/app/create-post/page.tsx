import { auth } from "@/auth";
import CreatePostForm from "@/components/create-post-form"
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
export default async function Page() {

  const session = await getSession();

  const user = session?.user

if(!user)
  redirect("/")

  return (
    <main className="text-center pt-16 ">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">Create Post</h1>
      <CreatePostForm authorId={user.id}/>
    </main>
  )
}
