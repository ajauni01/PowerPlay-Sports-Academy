import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProvider';

const useAdmin = () => {
  const { user } = useContext(AuthContext)

  const { isLoading: isAdminLoading, data: isAdmin } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const token = localStorage.getItem('access-token'); // Retrieve the token from local storage
      const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      const data = await response.json();
      console.log('admin data from the backend', data);
      return data.admin; // Assuming the server response has the 'role' field indicating if the user is an admin or not
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;


