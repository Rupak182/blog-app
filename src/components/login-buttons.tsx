

import { logout } from "@/actions/action";
import { getSession } from "@/lib/getSession";
import { signOut } from "next-auth/react"
import Link from "next/link"

export default async function LoginButtons() {

    const session = await getSession();

    const user = session?.user


  return (
    <div className="flex flex-col lg:flex-row w-fit gap-4">
{

    user ?
<form action={logout}>
<button  className="bg-blue-500 text-white  text-sm font-semibold py-1 px-2 rounded-md" >Sign out</button>
</form>
    :
    <Link href="/auth/login" className="bg-blue-500 text-white text-sm font-semibold py-1 px-2 rounded-md ">Login</Link>
}
<Link href="/auth/register"  className="bg-blue-500 text-white  text-sm font-semibold py-1 px-2 rounded-md ">Register</Link>
    </div>
  )
}
