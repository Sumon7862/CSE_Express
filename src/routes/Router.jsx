import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

import Semesters from "../pages/Semesters/Semesters";
import Subjects from "../pages/Subjects/Subjects";
import Pricing from "../pages/Pricing/Pricing";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "semesters",
        element: <Semesters />,
      },
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;