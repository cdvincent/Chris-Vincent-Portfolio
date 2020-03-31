import React from "react";
import ProjectImg from "../ProjectImg/ProjectImg"

function ReactProjects () {
    return (
        <div className="images">
            <ProjectImg src={require("./logo.jpg")} alt="Destination:Budget" text="Destination:Budget" />
            <ProjectImg src={require("./ow.jpg")} alt="Memory Game" text="Overwatch Assemble!" />
        </div>
    );
}

export default ReactProjects;