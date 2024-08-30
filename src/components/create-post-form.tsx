import { createPost } from "@/actions/action"

export default function CreatePostForm({authorId}:{authorId:string|undefined}) {
  return (
    <form action={createPost} className="flex flex-col w-10/12 mx-auto  space-x-2 mt-10 gap-2 ">
    <input className="border rounded  px-3  h-10 " type="text" name="title" placeholder="Title for new post" required />
    <textarea name="body" placeholder="Body content for new post" rows={10} className="border rounded px-3 required py-2" />
    <input type="hidden" value={authorId} name="authorId" />

    <button className="h-10 bg-blue-500 px-5 rounded text-white">Submit</button>
  </form>
  )
}
