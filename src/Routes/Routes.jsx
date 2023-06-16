import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Pages/Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "classes",
        element: <Classes></Classes>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      }
    ],
  },

]);