import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const path = window.location.pathname;

  return (
    <header>
      <nav className="container-fluid ms-4 fixed-top">
        <ul className="nav mb-0 top-nav" id="nav-list">
          <li className="nav-brand">
            <Link
              className={path === "/" ? "nav-link text-white" : "nav-link dark"}
              to="/"
            >
              Ezequiel Mejias
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={path === "/" ? "nav-link text-white" : "nav-link dark"}
              to="/software"
            >
              Software
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={path === "/" ? "nav-link text-white" : "nav-link dark"}
              to="/resume"
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={path === "/" ? "nav-link text-white" : "nav-link dark"}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
