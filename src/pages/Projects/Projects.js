import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
class Projects extends Component {
    state = {
        showFullStack: false
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h3>My Projects</h3>
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