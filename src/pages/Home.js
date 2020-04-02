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
            <motion.div className="page"  initial="initial" animate="in" exit="out" variants={pageVariants}>
                <Jumbotron>
                </Jumbotron>
                <Navbar/>
            </motion.div>
        )
    };
};

export default Home;