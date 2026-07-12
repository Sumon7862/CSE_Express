import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { RouterProvider } from "react-router-dom";

import router from "./routes/Router";

import "./index.css";

import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <AuthProvider>

      <Toaster
        position="top-right"
      />

      <RouterProvider
        router={router}
      />

    </AuthProvider>

  </React.StrictMode>

);