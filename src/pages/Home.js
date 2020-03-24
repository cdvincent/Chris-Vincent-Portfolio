import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";


class Home extends Component {

    render() {
        return (
            <div className="page">
                <Jumbotron>
                </Jumbotron>
                <Navbar/>
            </div>
        )
    };
};

export default Home;