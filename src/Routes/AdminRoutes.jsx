import { Children, useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoutes = () => {
  const { user, loading } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation()

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>
  }
  if (user && isAdmin) {
    return Children
  }

  return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>


};

export default AdminRoutes;