import { auth } from "@/auth";
import { cache } from "react";

export const getSession = cache(async()=>{
    const session = auth();
    return session;
})