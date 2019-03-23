import React, { Component } from "react";
import NavBar from "../Layout/NavBar/NavBar";

export class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>heelo</h1>
        </div>
      </div>
    );
  }
}

export default Home;
