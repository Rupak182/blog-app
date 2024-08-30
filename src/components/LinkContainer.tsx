'use client'
import React, { useState } from 'react'
import Links from './Links'
import LoginButtons from './login-buttons'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import clsx from 'clsx'
import Logo from './Logo'
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


export default function LinkContainer({ children }: { children: React.ReactNode }) {
    const [isOpen, setisOpen] = useState(false);

    const pathname = usePathname();


    return (<>
        <nav className="">
            <ul className=" gap-x-5 text-[14px] items-center justify-center hidden lg:flex">
                <Links />
                {children}
            </ul>
        </nav>
        <section className='flex items-center gap-4'>
            <button className='lg:hidden' onClick={() => setisOpen(true)}><Logo/></button>

            <nav className={clsx('fixed h-full w-full lg:hidden bg-black/50 backdrop:blur-sm top-0 right-0 -translate-x-full transition-all', isOpen && "translate-x-0")}>

                <section className='bg-white h-screen p-8   absolute left-0 top-0 flex flex-col gap-8 z-50 w-80'>

                    <button onClick={() => setisOpen(false)} className='cursor-pointer '><img src="close.png" className='w-7 h-7 ' /></button>

                    {navLinks.map((link) => {
                        return <div key={link.href} >
                            <Link className={` ${pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                                } `} href={link.href}>{link.label}</Link>
                        </div>


                    })
                    }
                                            {children}

                </section>

            </nav>
        </section>

    </>
    )
}
