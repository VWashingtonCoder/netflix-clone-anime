import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
    const session = await getSession();

    if (!session) return Response.json({error: "Session not found."})
    
    try {

    } catch {
        console.log()
    }
    

}