import { Link, useNavigate } from "react-router-dom";
import 'animate.css';
import { Fade } from "react-awesome-reveal";
import logo from '../../../public/icon.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Logout Successful',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // navigate the user to the home page after a successful logout
        navigate('/')
      })


      .catch(error => console.error(error.message))
    // navigate the user to the login page upon a successful registration
  }

  const navOptions = < >

    <li><Link className="text-lg" to="/">Home</Link></li>
    <li><Link className="text-lg" to="/instructors">Instructors</Link></li>
    <li><Link className="text-lg" to="/classes">Classes</Link></li>
    {user?.displayName && <li><Link className="text-lg" to="/dashboard">Dashboard</Link></li>}
  </>

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-10 bg-slate-400 bg-opacity-20 animate__animated animate__fadeInLeft w-[80%] mx-auto font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <Link to="/">
          <div className="w-1/4 animate__animated animate__bounce flex">
            <img className="max-w-full md:w-[100px] me-2 rounded-full" src={logo} />
            <Fade cascade><a className="text-xl">PowerPlay Sports Academy</a></Fade>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>

      {
        user?.displayName ? (
          <>
            <div className="navbar-end -me-96">
              <img className="rounded-full w-[80px] h-[80px]" src={user.photoURL} />
            </div>

            <div className="navbar-end">
              <Link onClick={handleLogout}><a className="btn">Logout</a></Link>
            </div>
          </>
        ) : (
          <div className="navbar-end">
            <Link to="/login"><a className="btn">Login</a></Link>
          </div>
        )
      }


    </div>
  );
};

export default NavBar;