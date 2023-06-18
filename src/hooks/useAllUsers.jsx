import { useQuery } from "@tanstack/react-query";


const useAllUsers = () => {

  const { isLoading, data, error, refetch } = useQuery(['allUsers'], {
    queryFn: async () => {
      // fetch all the registered users
      const response = await fetch('https://sports2-orcin.vercel.app/allUsers');
      return response.json();
    },
  });

  return [isLoading, data, error, refetch];
};

export default useAllUsers;