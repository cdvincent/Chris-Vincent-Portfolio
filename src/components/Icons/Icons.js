import React from "react";
import "./style.css"

function Icons () {
    return (
        <div>
        <div className="socialLinks">
            <a href="mailto:cdvincent89@gmail.com" rel="noopener" target="_blank"><img className="socials" src={require("./email.png")} alt="Email" /> </a>
            <a href="https://www.linkedin.com/in/christopher-vincent-a7b594105" rel="noopener" target="_blank"><img className="socials" src={require("./LinkedIn.png")} alt="Linked In" /> </a>
            <a href="https://www.github.com/cdvincent" rel="noopener" target="_blank"><img className="socials" src={require("./github.png")} alt="Github" /> </a>
        </div>
        <form>
            <label for="first name">First Name:</label>
            <br />
            <input placeholder="First Name" type="text"></input>
            <br />
            <label for="last name">Last Name:</label>
            <br />
            <input placeholder="Last Name" type="text"></input>
            <br />
            <label for="email">Email:</label>
            <br />
            <input placeholder="Email" type="email"></input>
            <br />
            <label for="message">Message:</label>
            <br />
            <input className="message" placeholder="Message" type="text"></input>
            <br />
            <button className="btn btn-secondary" type="submit">Submit</button>
        </form>
        </ div>
        
    )
}

export default Icons;