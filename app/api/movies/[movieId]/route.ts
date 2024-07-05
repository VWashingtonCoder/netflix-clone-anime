import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
    try {
        await serverAuth();

        const { movieId } = req.query;

        if (typeof movieId !== "string" || !movieId) 
            throw new Error("Invalid ID")
        
        const movie = await prismadb.movie.findUnique({
            where: {
                id: Number(movieId)
            }
        });

        if (!movie) throw new Error("Movie does not exist at id");

        return Response.json(movie);
    } catch (err) {
        console.log(err)
        return Response.json({ error: err });
    }
}