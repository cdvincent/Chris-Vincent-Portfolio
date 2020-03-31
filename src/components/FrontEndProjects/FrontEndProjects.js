import React from "react";
import ProjectImg from "../ProjectImg/ProjectImg"

function FrontEndProjects () {
    return (
        <div className="images">
            <ProjectImg src={require("./abc.png")} alt="Guess the letter game" text="Guess the letter" url="https://github.com/cdvincent/Guess-The-Letter"/>
            <ProjectImg src={require("./burger.jpg")} alt="Burger app" text="Eat-Da-Burger" url="https://github.com/cdvincent/burger" />
            <ProjectImg src={require("./catGif.gif")} alt="Gifphy project" text="Gif Me Some Gifs!" url="https://github.com/cdvincent/Gif-Me-Some-Gifs" />
            <ProjectImg src={require("./friends.jpg")} alt="FriendFinder app" text="FriendFinder" url="https://github.com/cdvincent/FriendFinder" />
            <ProjectImg src={require("./greenRupee.png")} alt="Number Game" text="Rupee Game" url="https://github.com/cdvincent/Rupee-Game" />
            <ProjectImg src={require("./hungarray2.png")} alt="Restaurant app" text="HungArray" url="https://github.com/cdvincent/hungArray" />
            <ProjectImg src={require("./logo.jpg")} alt="Destination:Budget" text="Destination:Budget" url="https://github.com/cdvincent/Destination-Budget" />
            <ProjectImg src={require("./ow.jpg")} alt="Memory Game" text="Overwatch Assemble!" url="https://github.com/cdvincent/Overwatch-Assemble" />
            <ProjectImg src={require("./scraping.jpg")} alt="Web Scraping Application" text="Web Scraper" url="https://github.com/cdvincent/Web-Scrapin" />
            <ProjectImg src={require("./stout-beer.jpg")} alt="Brewery finding app" text="BrewFinder" url="https://github.com/cdvincent/BrewFinder" />
            <ProjectImg src={require("./traintime.jpg")} alt="Train scheduling app" text="Train Time" url="https://github.com/cdvincent/Train-Time" />
            <ProjectImg src={require("./trivia.jpg")} alt="Pokemon trivia game" text="Pokemon Trivia" url="https://github.com/cdvincent/TriviaGame" />
        </div>
    );
}

export default FrontEndProjects;