
import Image from "next/image"
import Link from "next/link"
import LoginButtons from "./login-buttons"

import Links from "./Links";
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

//css loaded after html
export default function Header() {

    // console.log(pathname)

    

    return (
        <header className="flex justify-between items-center  py-4 px-7 border-b">
            <Link href="/">
            {/* <Image
                src="https://bytegrad.com/course-assets/youtube/example-logo.png"
                alt="Logo"
                className="w-[35px] h-[35px] "
                width="35"
                height="35"
                /> */}

                <span className="text-lg  italic p-4 px-3 rounded-md font-extrabold">BLOGGY</span>
                </Link>

            <nav>
                <ul className="flex gap-x-5 text-[14px] items-center justify-center">
                        <Links />
                    <LoginButtons/>

                </ul>

                

            </nav>
        </header>
    )
}
