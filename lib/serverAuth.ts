import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";

const serverAuth = async () => {
  const session = await getServerSession();

  if (!session?.user?.email) {
    throw new Error ("Not signed in")
  }
      
  const currentUser = await prismadb.user.findUnique({
    where: {
        email: session.user.email
    }
  })

  if (!currentUser)
    throw new Error("Invalid user");
  
  return { currentUser };
};

export default serverAuth;