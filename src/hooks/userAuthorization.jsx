import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProvider';

const useUserAuthorization = () => {
  // get the currently logged in user from the AuthContext
  const { user } = useContext(AuthContext);

  const { isLoading, data, error, refetch } = useQuery(['userAuthorization', user?.email], {
    queryFn: async () => {
      // send query parameter to the backend
      const response = await fetch(`https://power-play-sports-server-side.vercel.app/userAuthorization?email=${user.email}`);
      return response.json();
    },
  });

  return { isLoading, data, error, refetch };
};

export default useUserAuthorization;
