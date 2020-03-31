import React from "react";
import "./style.css"

function Icons () {
    return (
        <div className="socialLinks">
            <a href="mailto:cdvincent89@gmail.com" rel="noopener" target="_blank"><img className="socials" src={require("./email.png")} alt="Email" /> </a>
            <a href="https://www.linkedin.com/in/christopher-vincent-a7b594105" rel="noopener" target="_blank"><img className="socials" src={require("./LinkedIn.png")} alt="Linked In" /> </a>
            <a href="https://www.github.com/cdvincent" rel="noopener" target="_blank"><img className="socials" src={require("./github.png")} alt="Github" /> </a>
        </div>
    )
}

export default Icons;