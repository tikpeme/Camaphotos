import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import CamaModels from "./components/CamaModels/CamaModels";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/ContactMe" element={<ContactMe></ContactMe>}></Route>
        <Route path="/CamaModels" element={<CamaModels></CamaModels>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
