import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return typeof data === "string" 
    ? { data: [], error, isLoading, mutate }
    : { data, error, isLoading, mutate }
};

export default useFavorites;
