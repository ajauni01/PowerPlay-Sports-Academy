import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProvider';

const useUserAuthorization = () => {
  // get the currently logged in user from the AuthContext
  const { user } = useContext(AuthContext);

  const { isLoading, isError, data, error, refetch } = useQuery(['userAuthorization', user?.email], {
    queryFn: async () => {
      // send query parameter to the backend
      const response = await fetch(`http://localhost:5000/userAuthorization?email=${user.email}`);
      return response.json();
    },
  });

  return { isLoading, isError, data, error, refetch };
};

export default useUserAuthorization;
