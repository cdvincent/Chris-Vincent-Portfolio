import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Icons from "../../components/Icons/Icons";
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

class Contact extends Component {

    render() {
        return (
            <motion.div className="page" initial="initial" animate="in" exit="out" variants={pageVariants}>
                <Navbar 
                homeClass="nav-link" aboutClass="nav-link" projectsClass="nav-link"
                contactClass="nav-link active"/>
                    <h3 className="pageHead">Contact Me</h3>
                    <div className="hr"></div>
                    <p className="contactMe">Please contact me if you would like to work together!</p>
                <div className="container">
                    <Icons />
                </div>
            </motion.div>
        )
    };
};

export default Contact;