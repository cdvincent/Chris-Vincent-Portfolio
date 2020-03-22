import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";


class Home extends Component {

    state = {
        activeClass: "navbar-expand-lg flex-md-row navbar-dark bg-dark nav"
    }
    
    componentDidMount() {
        window.addEventListener("scroll", () => {
           let activeClass = "navbar-expand-lg flex-md-row navbar-dark bg-dark nav";
           if(window.scrollY >755){
               activeClass = "navbar-expand-lg flex-md-row navbar-dark bg-dark sticky";
           }
           this.setState({ activeClass: activeClass });
        });
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Navbar className={this.state.activeClass} />
                <div className="container">
                    <h3>Home</h3>
                </div>
            </div>
        )
    };
};

export default Home;