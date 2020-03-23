import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";

class Projects extends Component {
    state = {
        showFullStack: false
    };

    render() {
        return (
            <div className="page">
                <Navbar className="navbar-expand-lg flex-md-row navbar-dark bg-dark nav"/>
                    <h3 className="pageHead">My Projects</h3>
                    <div className="container">
                    {this.state.showFullStack ? (
                        <div>
                            fullstack project
                        </div>
                    ) : (
                        <div>
                            
                        </div>
                    )}
                </div>
            </div>
        )
    };
};

export default Projects;