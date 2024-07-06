import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
    try {
        await serverAuth();

        const url = req.url;
        const movieId = url?.slice(33);

        if (typeof movieId !== "string" || !movieId) 
            Response.json({ error: "Invalid Id" })
        
        const movie = await prismadb.movie.findUnique({
            where: {
                id: Number(movieId)
            }
        });

        if (!movie) 
            Response.json({ error: "Movie does not exist at id" });

        return Response.json(movie);
    } catch (err) {
        console.log(err)
        return Response.json({ error: err });
    }
}