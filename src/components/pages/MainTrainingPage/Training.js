import React, { Component } from "react";

import TrainingJumbo from "./TrainingJumbo";
import OneOnOneJumbo from "./OneOnOneJumbo";
import GroupTrainingJumbo from "./GroupTrainingJumbo";
import NavBar from "../../Layout/NavBar/NavBar";
import Footer from "../../Layout/Footer/Footer";

export class Training extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <TrainingJumbo />
          <OneOnOneJumbo />
          <GroupTrainingJumbo />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Training;
