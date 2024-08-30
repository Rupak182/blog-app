
import LoginForm from "@/components/login-form"
import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";
import Link from "next/link";

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
        <div className="form-wrapper lg:w-1/2 w-3/4  p-4 m-auto">
        <LoginForm/>
        <span className="flex gap-2 mt-2 items-center justify-center"><span>{"Don't have an account?"} </span><Link className="underline" href="/auth/register">Register</Link></span>
        </div>
    </main>
  )
}
