import React from "react";
import "./style.css";

function Jumbotron () {
    return (
        <div className="jumbotron">
            <div className="header">
                <h3 className="display-4">Chris Vincent</h3>
                <div className="hr"></div>
                <p className="lead">Full-Stack Web Developer</p>
            </div>
            <a className="link" href="/projects">- click to view my projects -</a>
        </div>
    )
}

export default Jumbotron;