import { NavLink, Outlet } from "react-router-dom";
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
          {/* admin dashboard */}
          {data?.role === 'admin' && <>
            <p className="text-2xl font-bold mt-28">Admin Dashboard</p>
            <NavLink to="/dashboard/manageClasses">
              <li><a>Manage Classes</a></li>
            </NavLink>
            <NavLink to="/dashboard/manageUsers">
              <li><a>Manage Users</a></li>
            </NavLink>
          </>}

          {/* instructor dashboard */}
          {data?.role === 'instructor' &&
            <>
              <p className="text-2xl font-bold mt-28">Instructor Dashboard</p>
              <NavLink to="/dashboard/addClass">
                <li><a>Add Class</a></li>
              </NavLink>
              <NavLink to="/dashboard/myClasses">
                <li><a>My Classes</a></li>
              </NavLink>
            </>
          }

          {/* student dashboard */}
          {data?.role === 'student' &&
            <>
              <p className="text-2xl font-bold mt-28">Student Dashboard</p>
              <NavLink to="/dashboard/selectedClasses">
                <li><a>Selected Classes</a></li>
              </NavLink>
              <NavLink to="/dashboard/enrolledClasses">
                <li><a>Enrolled Classes</a></li>
              </NavLink>
              <NavLink to="/dashboard/paymentHistory">
                <li><a>Payment History</a></li>
              </NavLink>
            </>
          }

        </ul>
      </div>
    </div>

  );
};


export default Dashboard;