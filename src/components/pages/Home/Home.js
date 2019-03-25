import React, { Component } from "react";
import NavBar from "../../Layout/NavBar/NavBar";
import Carousel from "../../Carousel";

import "./Home.css";

export class Home extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: ""
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <NavBar />
        <div className="container">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Home;
