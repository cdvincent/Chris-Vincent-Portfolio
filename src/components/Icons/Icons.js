import React from "react";
import "./style.css"

function Icons () {

    return (
        <div>
        <div className="socialLinks">
            <a href="mailto:cdvincent89@gmail.com" rel="noopener noreferrer" target="_blank"><img className="socials" src={require("./email.png")} alt="Email" /> </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-vincent-a7b594105"><img className="socials" src={require("./LinkedIn.png")} alt="Linked In" /> </a>

            <a href="https://www.github.com/cdvincent" rel="noopener noreferrer" target="_blank"><img className="socials" src={require("./github.png")} alt="Github" /> </a>
        </div>

        </ div>
        
    )
}

export default Icons;