import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

import Navbar from "./components/Navbar/Navbar";

class App extends Component {

  state = {
    currentPage: "home"
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
