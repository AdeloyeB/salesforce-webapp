import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import NavBar from "./components/Layout/NavBar/NavBar";
import Home from "./components/pages/Home";
import ReportAProblem from "./components/pages/ReportAProblem";
import Login from "./components/auth/Login";

import "./App.css";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Router>
        {/* Security is called from OKTA. This protects our webiste. Moreover, SecureRoute requires a login before it can be accessed */}
        <Security
          issuer="https://dev-913015.okta.com"
          client_id="0oadp2qztaSFpr1Y9356"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div>
            <div>
              <SecureRoute path="/" exact={true} component={Home} />
              <SecureRoute
                path="/reportaproblem"
                exact={true}
                component={ReportAProblem}
              />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-913015.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
