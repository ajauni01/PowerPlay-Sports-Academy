import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Pages/Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Training from "../Pages/Training/Training";
import Academy from "../Pages/Academy/Academy";
import Contact from "../Pages/Contact/Contact";

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
        path: "training",
        element: <Training></Training>
      },
      {
        path: "academy",
        element: <Academy></Academy>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ],
  },

]);