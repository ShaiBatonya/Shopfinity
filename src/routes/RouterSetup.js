// src/routes/RouterSetup.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes";

const RouterSetup = () => {
  const router = createBrowserRouter(Routes());
  return <RouterProvider router={router} />;
};

export default RouterSetup;
