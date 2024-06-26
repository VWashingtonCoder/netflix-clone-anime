import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET() {
    await serverAuth();

    try {    
        const movies = await prismadb.movie.findMany();
        return Response.json(movies)
    } catch (err) {
        return Response.json({ err })
    }
}