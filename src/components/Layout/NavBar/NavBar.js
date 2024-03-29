import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

import "./NavBar.css";

export default withAuth(
  class NavBar extends Component {
    state = {
      authenticated: null,
      currentUserName: "",
      currentUserEmail: ""
    };

    async componentDidMount() {
      const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
      this.checkAuthentication();
      this.setState({
        currentUserEmail: idToken.idToken.claims.email,
        currentUserName: idToken.idToken.claims.name
      });
    }

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/login");
    };

    render() {
      if (this.state.authenticated === null) return null;
      const { currentUserName } = this.state;

      // const button = this.state.authenticated ? (
      //   <button onClick={this.logout}>Logout</button>
      // ) : (
      //   <button onClick={this.login}>Login</button>
      // );

      return (
        <nav className="navbar navbar-fixed-top navbar-expand-sm navbar-light bg-light mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              BL Salesforce Portal
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/knowledgebase">
                    Knowledge Base
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {currentUserName}
                  </a>
                  <div
                    className="dropdown-menu navBackground"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link
                      className="dropdown-item dropdownFontColor"
                      to="/newsfuser"
                    >
                      Get Salesforce
                    </Link>
                    <Link
                      className="dropdown-item dropdownFontColor"
                      to="/reportaproblem"
                    >
                      Report a Problem
                    </Link>
                    <Link
                      className="dropdown-item dropdownFontColor"
                      to="/training"
                    >
                      Request Training
                    </Link>
                    <button
                      className="dropdown-item dropdownFontColor"
                      onClick={this.logout}
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
);
