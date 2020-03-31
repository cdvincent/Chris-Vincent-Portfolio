import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

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
                    <ul>
                    <FontAwesomeIcon icon={faCoffee} />
                        <li><i class="fas fa-envelope"></i></li>
                        <li><i class="fab fa-linkedin"></i></li>
                        <li><i class="fab fa-github-square"></i></li>
                        </ul>
                </div>
            </div>
        )
    };
};

export default Contact;