import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";

class About extends Component {
    state = {

    };

    render() {
        return (
            <div className="page">
                <Navbar className="navbar-expand-lg flex-md-row navbar-dark bg-dark nav"/>
                    <h3 className="pageHead">About Me</h3>
                    <div className="hr"></div>
                <div className="container">
                    <div className="content">
                        <p>Hi, I'm Chris. Im a full-stack web developer with a background in HVAC diagnostics, allowing a heightened sense of problem solving and critical thinking. I acquired newly developed skills in HTML, CSS, and Javascript attaining a certificate in the  Full Stack Web Development coding boot camp from the University of Central Florida.</p>
                        <p>I have experience with HTML5, CSS3, Handelbars, React, Javascript, Jquery, and REST API's for the front-end; as well as MongoDB and mongoose, MySQL and Sequelize for database experience, and Express and Node.js for the back-end.</p>
                        <p>As a problem-solver by nature, I enjoy the task of creating new applications and troubleshooting along the way. I'm eager to use my new skills in a quality company that will offer me an environment that will allow me to learn and grow in order to improve myself as a developer.</p>
                    </div>
                </div>
            </div>
        )
    };
};

export default About;