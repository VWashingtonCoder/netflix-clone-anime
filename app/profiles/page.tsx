"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Profiles = () => {
  const { status } = useSession();
  if (status === "unauthenticated") redirect("/auth");

  return (
    <div>
      <p className="text-white text-4xl">Profiles</p>
    </div>
  );
};

export default Profiles;
