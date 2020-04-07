import React from "react";
import ProjectImg from "../ProjectImg/ProjectImg"
import "./style.css";

function BackEndProjects () {
    return (
        <div className="images">
            <ProjectImg src={require("./logo.jpg")} alt="Destination:Budget" text="Destination:Budget" url="https://github.com/cdvincent/Destination-Budget" />
            <ProjectImg src={require("./liri.png")} alt="Ask LIRI" text="Ask LIRI" url="https://github.com/cdvincent/liri_node_app" />
            <ProjectImg src={require("./manager.png")} alt="Storefront Command Line Interface" text="Bamazon" url="https://github.com/cdvincent/bamazon" />
            <ProjectImg src={require("./burger.jpg")} alt="Burger app" text="Eat-Da-Burger" url="https://github.com/cdvincent/burger" />
            <ProjectImg src={require("./stout-beer.jpg")} alt="Brewery finding app" text="BrewFinder" url="https://github.com/cdvincent/Brew-Finder" />        
        </div>
    );
}

export default BackEndProjects;