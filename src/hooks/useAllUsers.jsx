import { useQuery } from "@tanstack/react-query";


const useAllUsers = () => {

  const { isLoading, data, error, refetch } = useQuery(['allUsers'], {
    queryFn: async () => {
      // fetch all the registered users
      const response = await fetch('http://localhost:5000/allUsers');
      return response.json();
    },
  });

  return [isLoading, data, error, refetch];
};

export default useAllUsers;