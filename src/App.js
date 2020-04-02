import React, { Component } from 'react';
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

class App extends Component {

  render() {
    return (
      <Router>
        <AnimatePresence>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route path="*" component={Home} />
          </Switch>
        </AnimatePresence>          
      </Router>
    );
  }
};

export default App;
