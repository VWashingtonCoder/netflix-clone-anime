import prismadb from "@/lib/prismadb";

export async function GET() {
  try {
    const movies = await prismadb.movie.findMany();
    return Response.json(movies);
  } catch (err) {
    return Response.json({ err });
  }
}
