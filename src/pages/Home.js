import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";

function Home(){

    return (
        <div>
            <Jumbotron />
            <Navbar />
            <div className="container">
                <h3>Home</h3>
            </div>
        </div>
    )
};

export default Home;