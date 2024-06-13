"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

export default function Home() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const router = useRouter();

  const logout = async () => {
    const { url } = await signOut({ redirect: false, callbackUrl: "/auth" })
    if (url) router.push(url)
    else console.log("Couldn't sign out")
  }

  return (
    <>
      {/* {status === "authenticated" && (
        <p className="text-white">Logged in as {user?.name}</p>
      )}

      <button className="h-10 w-full bg-white" onClick={logout}>
        Logout
      </button> */}

      <Navbar />
    </>
  );
}
