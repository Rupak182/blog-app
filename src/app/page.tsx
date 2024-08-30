import Image from "next/image";
import Link from "next/link";
import Logout from "@/components/signout";
export default function Home() {
  return (
   <main className=" text-center pt-32 px-5 ">
  <h1 className="text-4xl font-bold mb-5 md:text-5xl">Welcome to my blog</h1>
  <p className="max-w-[750px] mx-auto leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam et a accusantium officia labore velit excepturi quo dolorum consectetur facilis quam, itaque ut totam provident, obcaecati facere quae necessitatibus.</p>
   
   <Link className="mt-14 underline text-zinc-400" href='/posts'>View Posts</Link>
   {/* <h2 className="text-3xl font-semibold my-4 w-10/12 m-auto text-left ">Latest Posts</h2> */}

   </main>


  );
}
