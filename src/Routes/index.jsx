import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../Pages";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <HomeLayout />,
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
      },
    ],
  },

  // {
  //   path: "/connections",
  //   element: <ConnectionLayout />,
  // },
]);
