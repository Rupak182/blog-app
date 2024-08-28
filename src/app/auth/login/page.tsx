
import LoginForm from "@/components/login-form"
import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";

export default async function Page() {
  // const session = await auth();

  // const user = session?.user
  // if(user)
  //   redirect("/")

  const session = await getSession();

  const user = session?.user
  if(user)
    redirect("/")


  return (


    <main className="bg-zinc-100 w-10/12 m-auto mb-3  px-3 py-3 rounded-xl leading-6  ">
        <h1 className="text-center text-3xl font-bold mb-5 mt-3">LOGIN</h1>
        <div className="form-wrapper w-1/2 p-4 m-auto">
        <LoginForm/>
        </div>
    </main>
  )
}
