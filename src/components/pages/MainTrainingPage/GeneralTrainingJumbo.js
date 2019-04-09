import React, { Component } from "react";
import { Link } from "react-router-dom";

export class GeneralTrainingJumbo extends Component {
  render() {
    return (
      <section>
        <div class="jumbotron jumbotron-fluid jumboBackground">
          <div class="container vertical-center">
            <h2 class="display-4 trainingText">Internal Training</h2>
            <p class="lead trainingText">
              If you would like training on how to use Salesforce let us know!
              We will go through the basics and anything relevant to you and
              your team.
            </p>
            <Link to="/generaltrainingform">
              {" "}
              <button type="button" class="btn btn-dark">
                Apply
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default GeneralTrainingJumbo;
