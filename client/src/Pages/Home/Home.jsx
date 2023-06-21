import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Introduction from "../../components/Introduction/Introduction";
import Gallery from "../../components/Gallery/Gallery";

import ContactMe from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Introduction></Introduction>
      <Gallery></Gallery>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default Home;
