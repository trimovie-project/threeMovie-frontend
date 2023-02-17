import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
