import { useSession } from "next-auth/react";

const useCurrentUser = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === "authenticated") return user;
  
  return null;
};


export default useCurrentUser;