import React from "react";
import "./style.css";

function Navbar () {
    return (
        <div className="wrapper">
            <nav className="navbar-expand-sm flex-md-row navbar-dark bg-dark nav">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link home" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item about">
                    <a className="nav-link" href="About">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item projects">
                    <a className="nav-link" href="Projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link contact" href="Contact">Contact</a>
                </li>
                </ul>
            </div>
            </nav>
            <div className="HLine"></div>
        </div>
    )
}

export default Navbar;