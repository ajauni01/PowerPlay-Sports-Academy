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
import ManageAllClasses from "../Pages/Dashboard/ManageAllClasses/ManageAllClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/Dashboard/PaymentHistory/PaymentHistory";
import DashBoardHolder from "../Pages/Dashboard/DashBoardHolder/DashBoardHolder";


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
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      }
    ],
  },

  // dashboard for admin, instructors, & students
  {
    path: "/dashboard",
    element: <DashBoardHolder></DashBoardHolder>,
    errorElement: <ErrorPage />,
    children: [

      // admin dashboard
      {
        path: "manageClasses",
        element: <ManageAllClasses></ManageAllClasses>
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>
      },

      // instructor dashboard
      {
        path: "addClass",
        element: <AddClass></AddClass>
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>
      },

      // student dashboard
      {
        path: "selectedClasses",
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },

    ],
  }

]);