import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AllProjects from "../../components/AllProjects/AllProjects";
import ProjectsSwitch from "../../components/ProjectsSwitch/ProjectsSwitch";

class Projects extends Component {
    state = {
        showFullStack: false
    };

    render() {
        return (
            <div className="page">
                <Navbar className="navbar-expand-lg flex-md-row navbar-dark bg-dark nav"/>
                    <h3 className="pageHead">My Projects</h3>
                    <div className="hr"></div>
                    <div className="container">
                        <div className="content">
                            <ProjectsSwitch />
                            <AllProjects />
                        </div>
                </div>
            </div>
        )
    };
};

export default Projects;