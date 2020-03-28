import React from "react";

function ProjectImg (props) {
    return (
        <div className="imageContainer">
            <img className="projectImg" src={props.src} alt={props.alt}/>
            <div className="overlay">
                <div className="text">{props.text}</div>
                <button className="btn btn-secondary learnMore">View Project</button>
            </div>
        </div>
    )
};

export default ProjectImg;