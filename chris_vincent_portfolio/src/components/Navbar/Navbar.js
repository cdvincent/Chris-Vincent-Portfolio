import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar () {
    return (
        <div className="wrapper">
            <nav className="navigation">
                <header>
                    My Portfolio
                </header>
                <div className="links">
                    <ul className="list-unstyled components">
                        <li className="active">
                            <Link to="/about">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="projects">
                                My Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;