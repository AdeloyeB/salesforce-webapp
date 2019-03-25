import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

import "./NavBar.css";

export default withAuth(
  class NavBar extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      if (this.state.authenticated === null) return null;

      // const button = this.state.authenticated ? (
      //   <button onClick={this.logout}>Logout</button>
      // ) : (
      //   <button onClick={this.login}>Login</button>
      // );

      return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Salesforce Portal
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
                  <Link className="nav-link" to="/registration">
                    Registration
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
                    User
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" to="/reportaproblem">
                      Report a Problem
                    </Link>
                    <button className="dropdown-item" onClick={this.logout}>
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
