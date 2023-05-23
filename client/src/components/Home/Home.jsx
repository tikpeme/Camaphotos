import React from "react";

import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Introduction from "../Introduction/Introduction";
import Gallery from "../Gallery/Gallery";

import ContactMe from "../ContactMe/ContactMe";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Introduction></Introduction>
      <Gallery></Gallery>
      <ContactMe></ContactMe>
    </>
  );
}

export default Home;
