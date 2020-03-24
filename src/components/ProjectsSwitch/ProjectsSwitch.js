import React from "react";
import "./style.css";

function ProjectsSwitch () {
    return (
        <div className="projectsSwitch">
            <button className="btn btn-secondary projectBtn">All</button>
            <button className="btn btn-secondary projectBtn">Front-End</button>
            <button className="btn btn-secondary projectBtn">Back-End</button>
            <button className="btn btn-secondary projectBtn">Full-Stack</button>
        </div>
    );
}

export default ProjectsSwitch;