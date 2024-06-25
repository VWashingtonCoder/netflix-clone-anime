import { getSession } from "next-auth/react";

const serverAuth = async () => {
  const session = await getSession();

  if (!session || !session?.user) {
    return new Response(null, { status: 401 });
  }

  return {};
  // if (!session?.user?.email) throw new Error("Not signed in");

  // const currentUser = await prismadb.user.findUnique({
  //   where: {
  //     email: session.user.email,
  //   },
  // });

  // if (!currentUser) throw new Error("Not signed in");

  // return { currentUser };
};

export default serverAuth;