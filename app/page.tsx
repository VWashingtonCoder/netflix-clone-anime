"use client"
import { useSession, signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

 console.log(`status: ${status}`)
 console.log(session);
  
 const logout = () => {
    signOut();
    router.push("/auth");
 }
  

  return (
    <>
      <h1 className="text-2xl text-green-500">NekoFlix</h1>
      
      {status === "authenticated" && (
        <p className="text-2xl text-green-500">Welcome {session?.user?.name}</p>
      )}
      
      <button 
        className="h-10 w-full bg-white"
        onClick={() => logout()}
      >
        Logout
      </button>
    </>
  );
}
