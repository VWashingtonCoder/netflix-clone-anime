"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const user = session?.user;

  const logout = async () => {
    const { url } = await signOut({ redirect: false, callbackUrl: "/auth" })
    if (url) router.push(url)
    else console.log("Couldn't sign out")
  }

  return (
    <>
      <h1 className="text-2xl text-green-500">NekoFlix</h1>

      {status === "authenticated" && (
        <p className="text-white">Logged in as {user?.name}</p>
      )}

      <button className="h-10 w-full bg-white" onClick={logout}>
        Logout
      </button>
    </>
  );
}
