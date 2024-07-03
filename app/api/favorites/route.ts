import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
import serverAuth from "@/lib/serverAuth";

export async function GET() {
  const { currentUser } = await serverAuth();
  if (!currentUser) redirect("/auth");

  try {
    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser.favoriteIds,
        },
      },
    });

    return Response.json(favoriteMovies);
  } catch (err) {
    return Response.json({ err });
  }
}
