import React from "react";

function ProjectImg (props) {
    return (
        <div className="imageContainer">
            <img className="projectImg" src={props.src} alt={props.alt}/>
            <div className="overlay">
                <div className="text">{props.text}</div>
                <a className="btn btn-secondary learnMore" href={props.url} rel="noopener noreferrer" target="_blank">View Project</a>
            </div>
        </div>
    )
};

export default ProjectImg;