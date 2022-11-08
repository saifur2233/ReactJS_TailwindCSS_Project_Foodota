import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
]);
