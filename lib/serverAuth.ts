import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";

const serverAuth = async (req: Request) => {
  const session = await getSession();

  if (!session?.user?.email) throw new Error("Not signed in");

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) throw new Error("Not signed in");

  return { currentUser };
};

export default serverAuth;
