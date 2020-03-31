import React from "react";
import ProjectImg from "../ProjectImg/ProjectImg"

function FrontEndProjects () {
    return (
        <div className="images">
            <ProjectImg src={require("./abc.png")} alt="Guess the letter game" text="Guess the letter" />
            <ProjectImg src={require("./burger.jpg")} alt="Burger app" text="Eat-Da-Burger" />
            <ProjectImg src={require("./catGif.gif")} alt="Gifphy project" text="Gif Me Some Gifs!" />
            <ProjectImg src={require("./friends.jpg")} alt="FriendFinder app" text="FriendFinder" />
            <ProjectImg src={require("./greenRupee.png")} alt="Number Game" text="Rupee Game" />
            <ProjectImg src={require("./hungarray2.png")} alt="Restaurant app" text="HungArray" />
            <ProjectImg src={require("./logo.jpg")} alt="Destination:Budget" text="Destination:Budget" />
            <ProjectImg src={require("./ow.jpg")} alt="Memory Game" text="Overwatch Assemble!" />
            <ProjectImg src={require("./scraping.jpg")} alt="Web Scraping Application" text="Web Scraper" />
            <ProjectImg src={require("./stout-beer.jpg")} alt="Brewery finding app" text="BrewFinder" />
            <ProjectImg src={require("./traintime.jpg")} alt="Train scheduling app" text="Train Time" />
            <ProjectImg src={require("./trivia.jpg")} alt="Pokemon trivia game" text="Pokemon Trivia" />
        </div>
    );
}

export default FrontEndProjects;