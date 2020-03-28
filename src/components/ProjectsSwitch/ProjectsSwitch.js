import React from "react";
import "./style.css";

function ProjectsSwitch (props) {
    return (
        <div className="projectsSwitch">
            <button onClick={props.showAll} className="btn btn-secondary projectBtn">All</button>
            <button onClick={props.showFrontEnd} className="btn btn-secondary projectBtn">Front-End</button>
            <button onClick={props.showBackEnd} className="btn btn-secondary projectBtn">Back-End</button>
            <button onClick={props.showReact} className="btn btn-secondary projectBtn">React</button>
        </div>
    );
}

export default ProjectsSwitch;