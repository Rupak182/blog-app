
import Image from "next/image"
import Link from "next/link"
import LoginButtons from "./login-buttons"
import Links from "./Links";
import Logo from "./Logo";
import LinkContainer from "./LinkContainer";
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
        <header className="flex justify-between items-center  py-4 px-7 border-b sticky top-0 z-50  bg-white">

            <Link href="/">
                <span className="text-lg  italic p-4 px-3 rounded-md font-extrabold">BLOGGY</span>
            </Link>
            <LinkContainer>
                <LoginButtons />
            </LinkContainer>
        </header>
    )
}
