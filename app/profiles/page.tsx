"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";

const Profiles = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user

  console.log(status)
  if (status === "unauthenticated") redirect("/auth");

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => {router.push("/")}}>
            
            <div className="group flex-row w-44 mx-auto">
              <div
                className="
                  w-44
                  h-44
                  rounded-md
                  flex
                  items-center
                  justify-center
                  border-2
                  border-transparent
                  group-hover:cursor-pointer
                  group-hover:border-white
                  overflow-hidden
                "
              >
                <Image src="/images/default-blue.png" alt="Profile" width={300} height={300} />
              </div>

              <div
                className="
                  mt-4
                  text-gray-400
                  text-2xl
                  text-center
                  group-hover: text-white
                "
              >
                {user?.name}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
