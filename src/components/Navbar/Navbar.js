import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar () {
    return (
        <div className="wrapper">
            <nav className="navigation sticky">
                <h4>Chris Vincent</h4>
                    <ul className="links list-unstyled components">
                        <li className="active">
                            <Link className="link" to="/about">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/projects">
                                My Projects
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    <div className="HLine"> </div>
            </nav>
        </div>
    )
}

export default Navbar;