"use client"



import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { log } from "console"

const navLinks = [
    {
        href: "/",
        label: "Home"
    },

    {
        href: "/posts",
        label: "Posts"
    },

    {
        href: "/create-post",
        label: "Create Post"
    },

]

export default function Links() {
    const pathname = usePathname();
    const {data :session}= useSession();
    console.log(session);
    

  return (
    <>
                          {  navLinks.map((link)=>{
                            return <li key={link.href}>
                                <Link className={` ${
                                    pathname=== link.href? "text-zinc-900":"text-zinc-400"
                                }` }  href={link.href}>{link.label}</Link>
                            </li>
                        })
                    }
    </>
  )
}
