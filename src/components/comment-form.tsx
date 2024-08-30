import { createComment } from "@/actions/action"
import prisma from "@/lib/db"
import Link from "next/link"
import { comment } from "postcss";




export default async function CommentForm({ userId,slug ,postId}: { userId: string | undefined ,slug:string | undefined, postId:string}) {

    const comments = await prisma.comment.findMany({
        where:{
            postId
        },

        include:{
            commentUser:{
                select:{
                    name: true
                },
            },
        },
    });


        
    const posts = [{
        id: 1,
        slug: "ok",
    }]

    const data = "sdrgsegtshghse"
    return (
        <div className="mt-6">
            <form action={createComment}>
            <input type="hidden" value={slug} name="slug" />
                <input type="hidden" value={userId} name="userId" />
                <input type="hidden" value={postId} name="postId" />

                <textarea rows={4} className="border w-full  px-5 py-3  rounded-xl" name="commentBody" placeholder="Add your comment..." required />
                <div className="w-full flex items-center justify-end">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-full px-7 mt-4 ali">Submit</button>
                </div>

            </form>

            <h3 className="font-semibold text-xl">Comments</h3>
            {comments.length>0 ?comments.map((comment) => (
                <li key={comment.id} className="bg-zinc-100 w-full m-auto  ml-3 px-3 py-1 rounded-full list-none ">

                    <span  >
                        <div className="bg-white py-4 px-3 space-y-1 rounded-lg">
                            <div className="info flex items-center justify-between">
                                <span className="bg-blue-500 text-white  font-semibold rounded-full px-2 py-1 ">{comment.commentUser.name} </span>
                                <span className="text-sm">{comment.createdAt.toString()}</span>

                            </div>
                            <p className=" text-zinc-500 ml-6">{comment.commentBody}</p>
                        </div>
                    </span>


                </li>
            ))
            :<div className="my-3">No comments to show</div>}
        </div>
    )
}
