import { NextApiRequest } from "next";
import prismadb from "@/lib/prismadb";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export async function GET() {
  const session = await getSession();
  if (!session || !session?.user) redirect("/auth");

  try {
    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email || ""
        }
    });

    if (!currentUser) return Response.json({ error: "Invalid user" });

    const favoriteMovies = await prismadb.movie.findMany({
        where: {
            id: {
                in: currentUser.favoriteIds,
            }
        }
    });

    return Response.json(favoriteMovies);
  } catch (err) {
    console.log(err);
    return Response.json({ err });
  }
}
