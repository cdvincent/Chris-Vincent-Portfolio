import React from "react";
import ProjectImg from "../ProjectImg/ProjectImg"
import { AnimatePresence, motion } from "framer-motion";

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
  
function ReactProjects () {
    return (
        <AnimatePresence>
            <motion.div className="images" initial="initial" animate="in" exit="out" variants={pageVariants}>
                <ProjectImg src={require("./logo.jpg")} alt="Destination:Budget" text="Destination:Budget" url="https://github.com/cdvincent/Destination-Budget" />
                <ProjectImg src={require("./ow.jpg")} alt="Memory Game" text="Overwatch Assemble!" url="https://github.com/cdvincent/Overwatch-Assemble" />
            </motion.div>
        </AnimatePresence>
    );
}

export default ReactProjects;