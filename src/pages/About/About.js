import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };

class About extends Component {
    state = {

    };

    render() {
        return (
          <div className="wrapper">
            <Navbar 
            homeClass="nav-link" aboutClass="nav-link active" projectsClass="nav-link"
            contactClass="nav-link"/>
            <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants}>
                    <h3 className="pageHead">About Me</h3>
                    <div className="hr"></div>
                <div className="container">
                    <div className="content">
                      <div className="aboutMe">
                        <p>Hi, I'm Chris! Im a full-stack web developer with a background in HVAC diagnostics, allowing a heightened sense of problem solving and critical thinking. I acquired newly developed skills in HTML, CSS, and Javascript attaining a certificate in the  Full Stack Web Development coding boot camp from the University of Central Florida.</p>
                        <p>As a problem-solver by nature, I enjoy the task of creating new applications and troubleshooting along the way. I'm eager to use my new skills in a quality company that will offer me an environment that will allow me to learn and grow in order to improve myself as a developer.</p>
                        <p>I have experience with HTML5, CSS3, Handelbars, React, Javascript, Jquery, and REST API's for the front-end, as well as MongoDB and mongoose, MySQL and Sequelize for database experience, and Express and Node.js for the back-end.</p>
                        <p>I have acquired a great passion for coding, and enjoy constantly learning new things to keep up with the industry. Please head to the Contact page to ask me any questions!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            </div>
        )
    };
};

export default About;