import React from "react";

import "../Navbar/Navbar.scss";

function NavLinks() {
  return (
    <nav className="desktop-header-nav-links">
      <a href="/" className="desktop-header-nav-item">
        Home
      </a>
      <a href="#" className="desktop-header-nav-item">
        Portfolio
      </a>
      <a href="/AboutMe" className="desktop-header-nav-item">
        AboutMe
      </a>
      <a href="#" className="desktop-header-nav-item">
        ContactMe
      </a>
    </nav>
  );
}

export default NavLinks;
