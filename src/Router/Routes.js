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
        element: <CreateService></CreateService>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
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
