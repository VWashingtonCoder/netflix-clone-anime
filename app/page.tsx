"use client";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import useMovieList from "@/hooks/useMovieList";

export default function Home() {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />

      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  );
}
