import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Icons from "../../components/Icons/Icons";

class Contact extends Component {
    state = {

    };

    render() {
        return (
            <div className="page">
                <Navbar className="navbar-expand-lg flex-md-row navbar-dark bg-dark nav"/>
                    <h3 className="pageHead">Contact Me</h3>
                    <div className="hr"></div>
                <div className="container">
                    <Icons />
                </div>
            </div>
        )
    };
};

export default Contact;