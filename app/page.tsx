"use client";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "./components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />

      {status === "unauthenticated" && (
        <div className="w-full text-center py-4">
          <Link
            className="
            text-2xl 
            text-white 
            cursor-pointer 
            hover:text-gray-300 
            transition
          "
            href="/auth"
          >
            You Must Create An Account or Sign In To Watch Content
          </Link>
        </div>
      )}

      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
