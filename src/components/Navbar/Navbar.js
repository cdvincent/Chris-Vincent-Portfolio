import React from "react";
import "./style.css";

function Navbar () {
    return (
        <div className="wrapper">
            <nav className="navbar-expand-lg flex-md-row navbar-dark bg-dark nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="About">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Contact">Contact</a>
                </li>
                </ul>
            </div>
            </nav>
            <div className="HLine"></div>
        </div>
    )
}

export default Navbar;