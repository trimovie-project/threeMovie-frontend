import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

import Register from "../pages/auth/Register";
import Trending from "../pages/Trending";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/trending",
      element: <Trending />,
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
