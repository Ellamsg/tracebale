import { useState } from "react";
import React from "react";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from "./RootLayouts/RootLayouts";
import Home from "./pages/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
