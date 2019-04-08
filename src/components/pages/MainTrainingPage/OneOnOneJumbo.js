import React, { Component } from "react";
import { Link } from "react-router-dom";

export class OneOnOneJumbo extends Component {
  render() {
    return (
      <section>
        <div class="jumbotron jumbotron-fluid jumboBackground">
          <div class="container vertical-center">
            <h2 class="display-4 trainingText ">Internal 1:1 Training</h2>
            <p class="lead trainingText">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <Link to="/oneononetrainingform"> <button type="button" class="btn btn-dark">Apply</button></Link>
          </div>
        </div>
      </section>
    );
  }
}

export default OneOnOneJumbo;
