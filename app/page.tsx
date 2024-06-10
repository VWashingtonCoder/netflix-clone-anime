"use client"
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <h1 className="text-2xl text-green-500">NekoFlix</h1>
      
      {session && (
        <p className="text-2xl text-green-500">Welcome {session?.user?.name}</p>
      )}
      
      <button 
        className="h-10 w-full bg-white"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </>
  );
}
