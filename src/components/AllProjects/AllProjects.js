import React from "react";

function AllProjects () {
    return (
        <div className="images">
            <div>
                <img className="projectImg" src={require("./abc.png")} alt="Guess the letter"/>
            </div>
            <div>
                <img className="projectImg" src={require("./burger.jpg")} alt="Burger App"/>
            </div>
            <div>
                <img className="projectImg" src={require("./catGif.gif")} alt="Gif Me Some Gifs!"/>
            </div>
            <div>
                <img className="projectImg" src={require("./friends.jpg")} alt="Friend Finder"/>
            </div>
            <div>
                <img className="projectImg" src={require("./greenRupee.png")} alt="Rupee Game"/>
            </div>
            <div>
                <img className="projectImg" src={require("./hungarray2.png")} alt="Hungarray"/>
            </div>
            <div>
                <img className="projectImg" src={require("./liri.png")} alt="Ask LIRI"/>
            </div>
            <div>
                <img className="projectImg" src={require("./manager.png")} alt="Bamazon"/>
            </div>
            <div>
                <img className="projectImg" src={require("./ow.jpg")} alt="Match The Heroes"/>
            </div>
            <div>
                <img className="projectImg" src={require("./scraping.jpg")} alt="Web Scraper"/>
            </div>
            <div>
                <img className="projectImg" src={require("./stout-beer.jpg")} alt="BrewFinder"/>
            </div>
            <div>
                <img className="projectImg" src={require("./traintime.jpg")} alt="Train Time"/>
            </div>
            <div>
                <img className="projectImg" src={require("./trivia.jpg")} alt="Pokemon Trivia"/>
            </div>
        </div>
    );
}

export default AllProjects;