import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Icons from "../../components/Icons/Icons";

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

class Contact extends Component {

    render() {
        return (
          <div>
            <Navbar 
            homeClass="nav-link" aboutClass="nav-link" projectsClass="nav-link"
            contactClass="nav-link active"/>
            <div className="page" initial="initial" animate="in" exit="out" variants={pageVariants}>
                    <h3 className="pageHead">Contact Me</h3>
                    <div className="hr pageHr"></div>
                    <p className="contactMe">Please contact me if you would like to work together!</p>
                <div className="container">
                    <Icons />
                </div>
            </div>
          </div>
        )
    };
};

export default Contact;