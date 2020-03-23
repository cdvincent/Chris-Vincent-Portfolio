import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";

class About extends Component {
    state = {

    };

    render() {
        return (
            <div className="page">
                <Navbar className="navbar-expand-lg flex-md-row navbar-dark bg-dark nav"/>
                    <h3 className="pageHead">About</h3>
                <div className="container">
                </div>
            </div>
        )
    };
};

export default About;