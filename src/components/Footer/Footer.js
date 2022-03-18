import React from "react";
import { Link } from "react-router-dom";
import LinkBar from "../LinkBar.js/LinkBar";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="connect">
        <h3 className="text-white pb-4">Stay Connected</h3>
        <LinkBar orientation="horizontal" />
      </div>
      <div className="end-nav">
        <nav className="container-fluid ms-4">
          <ul className="nav text-white" id="end-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/portfolio">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/software">
                Software
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
