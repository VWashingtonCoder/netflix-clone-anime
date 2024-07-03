import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { NextApiRequest } from "next";
import { without } from "lodash";
import serverAuth from "@/lib/serverAuth";

export async function POST(req: Request) {
  const { currentUser } = await serverAuth();
  if (!currentUser) redirect("/auth");

  try {
    const {
      data: { movieId },
    } = await req.json();

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

export async function DELETE(req: Request) {
  const { currentUser } = await serverAuth();
  if (!currentUser) redirect("/auth");

  

  try {
    const data = await req.json();
    const { movieId } = data;

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
