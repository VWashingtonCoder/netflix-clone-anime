import prismadb from "@/lib/prismadb";

export async function GET() {
    try {
        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);
        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        })

        return Response.json(randomMovies[0]);
    } catch(err) {
        return Response.json({ err }); 
    }
}