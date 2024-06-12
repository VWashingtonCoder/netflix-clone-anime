"use client";
import { useSession, signOut } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <>
      <h1 className="text-2xl text-green-500">NekoFlix</h1>

      {status === "authenticated" && (
        <p className="text-white">Logged in as {user?.name}</p>
      )}

      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
}
