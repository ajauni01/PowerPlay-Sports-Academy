import { Outlet } from "react-router-dom";
import useUserAuthorization from "../../../hooks/userAuthorization";


const Dashboard = () => {
  // show the relevant dashboard based on the user's authorization
  const { data } = useUserAuthorization()
  console.log('user role from the backend', data)

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

          {/* put conditions here depending on the nature of user */}
          {data?.role === 'admin' && <p>Admin Dashboard</p>}
          {data?.role === 'instructor' && <p>Instructor Dashboard</p>}
          {data?.role === 'student' && <p>Student Dashboard</p>}

        </ul>
      </div>

    </div>
  );
};

export default Dashboard;