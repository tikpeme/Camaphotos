import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import CamaModels from "./components/CamaModels/CamaModels";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  // Create a browser router
  //console.log("Routes created");

  // Create routes using the Route component
  const routes = createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/Portfolio" element={<Portfolio />} />,
    <Route path="/Aboutme" element={<AboutMe />} />,
    <Route path="/CamaModels" element={<CamaModels />} />,
  ]);

  //console.log("Routes created");
  const BrowserRouterInstance = createBrowserRouter(routes);

  return <RouterProvider router={BrowserRouterInstance}></RouterProvider>;
}

export default App;
