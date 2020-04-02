import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsSwitch from "../../components/ProjectsSwitch/ProjectsSwitch";
import AllProjects from "../../components/AllProjects/AllProjects";
import FrontEndProjects from "../../components/FrontEndProjects/FrontEndProjects";
import BackEndProjects from "../../components/BackEndProjects/BackEndProjects";
import ReactProjects from "../../components/ReactProjects/ReactProjects";
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

class Projects extends Component {
    state = {
        showAll: true,
        showFrontEnd: false,
        showBackEnd: false,
        showReact: false
    };

    showAll = () => {
        this.setState({
            showAll: true,
            showFrontEnd: false,
            showBackEnd: false,
            showReact: false
        })
    }

    showFrontEnd = () => {
        this.setState({
            showAll: false,
            showFrontEnd: true,
            showBackEnd: false,
            showReact: false
        })
    }

    showBackEnd = () => {
        this.setState({
            showAll: false,
            showFrontEnd: false,
            showBackEnd: true,
            showReact: false
        })
    }

    showReact = () => {
        this.setState({
            showAll: false,
            showFrontEnd: false,
            showBackEnd: false,
            showReact: true
        })
    }

    render() {
        return (
            <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants}>
                <Navbar className="navbar-expand-lg flex-md-row navbar-dark bg-dark nav"/>
                    <h3 className="pageHead">My Projects</h3>
                    <div className="hr"></div>
                    <div className="container">
                        <div className="content">

                            <ProjectsSwitch showAll={this.showAll} showFrontEnd={this.showFrontEnd} showBackEnd={this.showBackEnd} showReact={this.showReact} />

                            {this.state.showAll ? (
                            <AllProjects />
                            ) : ( 
                            <div></div>
                            )}

                            {this.state.showFrontEnd ? (
                            <FrontEndProjects />
                            ) : ( 
                            <div></div>
                            )}

                            {this.state.showBackEnd ? (
                            <BackEndProjects />
                            ) : ( 
                            <div></div>
                            )}

                            {this.state.showReact ? (
                            <ReactProjects />
                            ) : ( 
                            <div></div>
                            )}

                        </div>
                </div>
            </motion.div>
        )
    };
};

export default Projects;