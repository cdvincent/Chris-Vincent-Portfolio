import React from "react";
import ProjectImg from "../ProjectImg/ProjectImg"
import "./style.css";

function BackEndProjects () {
    return (
        <div className="images">
            <ProjectImg src={require("./logo.jpg")} alt="Destination:Budget" text="Destination:Budget" />
            <ProjectImg src={require("./liri.png")} alt="Ask LIRI" text="Ask LIRI" />
            <ProjectImg src={require("./manager.png")} alt="Storefront Command Line Interface" text="Bamazon" />
            <ProjectImg src={require("./burger.jpg")} alt="Burger app" text="Eat-Da-Burger" />
            <ProjectImg src={require("./stout-beer.jpg")} alt="Brewery finding app" text="BrewFinder" />        
        </div>
    );
}

export default BackEndProjects;