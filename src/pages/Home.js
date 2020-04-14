import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
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

class Home extends Component {

    render() {
        return (
          <div>
            <Navbar 
            homeClass="nav-link active" aboutClass="nav-link" projectsClass="nav-link"
            contactClass="nav-link"/>
            <motion.div className="page"  initial="initial" animate="in" exit="out" variants={pageVariants}>
                <Jumbotron />
            </motion.div>
          </div>
        )
    };
};

export default Home;