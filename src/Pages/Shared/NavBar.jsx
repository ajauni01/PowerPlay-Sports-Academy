import { Link } from "react-router-dom";
import 'animate.css';
import { Fade } from "react-awesome-reveal";
import logo from '../../../public/icon.png'
import Banner from "../Home/Banner/Banner";


const NavBar = () => {

  const navOptions = < >

    <li><Link className="text-lg" to="/">Home</Link></li>
    <li><Link className="text-lg" to="/training">Instructors</Link></li>
    <li><Link className="text-lg" to="/academy">Classes</Link></li>
    <li><Link className="text-lg" to="/contact">Dashboard</Link></li>
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
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>

    </div>
  );
};

export default NavBar;