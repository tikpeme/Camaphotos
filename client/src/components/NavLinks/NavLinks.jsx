import React from "react";

import "../Navbar/Navbar.scss";

function NavLinks() {
  return (
    <nav className="desktop-header-nav-links">
      <a href="/" className="desktop-header-nav-item">
        Home
      </a>
      <a href="/Portfolio" className="desktop-header-nav-item">
        Portfolio
      </a>

      <a href="#contact-me" className="desktop-header-nav-item">
        ContactMe
      </a>
    </nav>
  );
}

export default NavLinks;
