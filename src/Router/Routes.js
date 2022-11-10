import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Blogs from "../pages/Blogs/Blogs";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";
import Reviews from "../pages/Review/Reviews";
import CreateService from "../pages/Service/CreateService";
import ServiceDetails from "../pages/Service/ServiceDetails";
import Services from "../pages/Service/Services";
import PrivateRoute from "./PrivateRoute";

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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <CreateService></CreateService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://foodota-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
]);
