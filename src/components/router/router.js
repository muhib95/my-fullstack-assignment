import { createBrowserRouter } from "react-router-dom";
import Faq from "../Pages/Faq/Faq";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
