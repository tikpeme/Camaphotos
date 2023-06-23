import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../images/logo-black.JPG";
import NavLinks from "../NavLinks/NavLinks";

import {
  toggleMenu,
  resizeHandler,
  calculateValues,
} from "./fullscreenToggle.js";

import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  //States////////////////////////////////
  const [fullScreenMenu, setFullScreenMenu] = useState(false); //state for fullscreen menu

  //const [desktopScrolled, setDesktopScrolled] = useState(false); //state for scrolling to modify desktop navbar opacity

  //Function to toggle fullscreen overlay in mobile view
  const toggleCalculateValues = () => {
    calculateValues();
    toggleMenu();
    setFullScreenMenu(!fullScreenMenu);
    document.querySelector(".header-display-desktop").style.opacity = "1";
  };
  //listeners for resize animation
  window.addEventListener("resize", resizeHandler, false);

  //Array for mobile screen animations
  const mobileNavlinks = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Portfolio", href: "/Portfolio" },
    { id: 3, label: "ContactMe", href: "#contact-me" },
  ];

  const handleNavlinkClick = () => {
    document
      .querySelector('a[href="#contact-me"]')
      .addEventListener("click", (event) => {
        event.preventDefault();

        const contactSection = document.querySelector("#contact-me");
        contactSection.scrollIntoView({ behavior: "smooth" });
      });

    toggleCalculateValues();
  };
  window.addEventListener("scroll", function () {
    let desktopNavbar = document.querySelector(".header-display-desktop");
    if (window.pageYOffset > 600 && !fullScreenMenu) {
      ////scroll distance to engage background
      console.log(window.pageYOffset);
      //console.log(desktopNavbar.style.opacity);
      desktopNavbar.style.backgroundColor = "black";
      desktopNavbar.style.opacity = "1";
    } else if (window.pageYOffset > 250) {
      if (fullScreenMenu) {
        desktopNavbar.style.opacity = "1";
      } else {
        //desktopNavbar.style.backgroundColor = "transparent";
        //desktopNavbar.style.opacity = "0.7";
      }
    } else if (!fullScreenMenu) {
      desktopNavbar.style.backgroundColor = "transparent";
      desktopNavbar.style.opacity = "1";
    }
  });

  return (
    <div className="header-display-desktop">
      <div className="header-title-nav-wrapper">
        <div className="header-logo">
          {" "}
          <a className="navbar-brand" href="/">
            <img className="img-fluid" src={logo} alt="logo" />
          </a>{" "}
        </div>
        <div className="header-nav">
          <div className="header-nav-wrapper">
            <NavLinks></NavLinks>
            <div id="nav-bg" className="btn"></div>
            <div
              id="toggle-btn"
              className="btn"
              onClick={toggleCalculateValues}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <AnimatePresence>
              {fullScreenMenu && (
                <div className="MobileFullScreenMenu">
                  {" "}
                  {mobileNavlinks.map((link) => (
                    <motion.div
                      className="Mobile-header-nav-links"
                      key={link.id}
                      initial={{ opacity: 0, y: 500 }}
                      animate={{ opacity: 1, y: 0 }}
                      //exit={{ opacity: 0, duration: 3 }}
                      layout
                      transition={{
                        delay: link.id * 0.2, // add delay based on item id
                        ease: "easeOut",
                        duration: 0.6,
                      }}
                    >
                      <a
                        href={link.href}
                        className="MobileFullScreen-header-nav-item"
                        onClick={handleNavlinkClick}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="header-icons-wrapper">
        <div className="header-icons">
          <a
            href="https://www.instagram.com/camaphotos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
              style={{ color: "white" }}
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>{" "}
        </div>
        <div className="header-icons">
          <a
            href="https://twitter.com/camaphotos?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
