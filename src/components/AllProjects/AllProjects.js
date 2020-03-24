import React from "react";

function AllProjects () {
    return (
        <div className="images">
            <img className="projectImg" src={require("./abc.png")} alt="Guess the letter"/>
            <img className="projectImg" src={require("./burger.jpg")} alt="Burger App"/>
            <img className="projectImg" src={require("./catGif.gif")} alt="Gif Me Some Gifs!"/>
            <img className="projectImg" src={require("./friends.jpg")} alt="Friend Finder"/>
            <img className="projectImg" src={require("./greenRupee.png")} alt="Rupee Game"/>
            <img className="projectImg" src={require("./hungarray2.png")} alt="Hungarray"/>
            <img className="projectImg" src={require("./liri.png")} alt="Ask LIRI"/>
            <img className="projectImg" src={require("./manager.png")} alt="Bamazon"/>
            <img className="projectImg" src={require("./ow.jpg")} alt="Match The Heroes"/>
            <img className="projectImg" src={require("./scraping.jpg")} alt="Web Scraper"/>
            <img className="projectImg" src={require("./stout-beer.jpg")} alt="BrewFinder"/>
            <img className="projectImg" src={require("./traintime.jpg")} alt="Train Time"/>
            <img className="projectImg" src={require("./trivia.jpg")} alt="Pokemon Trivia"/>
        </div>
    );
}

export default AllProjects;