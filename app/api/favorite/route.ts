import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    const session = await getSession();
    if (!session || !session?.user) redirect("/auth");

    try {
        
    } catch (err) {
        return Response.json({ err });
    }
}