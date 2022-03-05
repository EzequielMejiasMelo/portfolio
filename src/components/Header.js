import React from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
            <nav className="container-fluid ms-4">
                <a className="navbar-brand text-white" href="/">Ezequiel Mejias</a>
                <button className="navbar-toggler justify-content-end me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarItems">
                    <ul className="navbar-nav ms-auto me-4" id="nav-list">
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/about-me">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/work">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/contact-me">Contact Me</Link>
                        </li>
                        <li className="nav-item">
                            {/* Change this route later */}
                            <Link className="nav-link text-white" href="/" target="_blank">Resume</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;