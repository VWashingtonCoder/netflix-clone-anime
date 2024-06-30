import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { NextApiRequest } from "next";
import { without } from "lodash";
import serverAuth from "@/lib/serverAuth";

export async function POST(req: NextApiRequest) {
  const session = await getSession();
  if(!session || !session?.user) redirect("/auth");
  
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = req.body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) return Response.json({ error: "Invalid id" });

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return Response.json(updatedUser);
  } catch (err) {
    return Response.json({ err });
  }
}

export async function DELETE(req: NextApiRequest) {
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = req.body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) return Response.json({ error: "Invalid id" });

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return Response.json(updatedUser);
  } catch (err) {
    return Response.json({ err });
  }
}
