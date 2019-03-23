import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Layout/NavBar/NavBar";
import Home from "./components/pages/Home";
import ReportAProblem from "./components/pages/ReportAProblem";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route
              path="/reportaproblem"
              exact={true}
              component={ReportAProblem}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
