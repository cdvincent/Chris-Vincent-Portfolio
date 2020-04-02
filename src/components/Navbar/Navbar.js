import React from "react";
import "./style.css";

function Navbar (props) {
    return (
        <div className="wrapper">
            <nav className="navbar-expand-sm flex-md-row navbar-dark bg-dark nav">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className={props.homeClass}  href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className={props.aboutClass}  href="About">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className={props.projectsClass} href="Projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className={props.contactClass} href="Contact">Contact</a>
                </li>
                </ul>
            </div>
            </nav>
            <div className="HLine"></div>
        </div>
    )
}

export default Navbar;