import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class GroupTrainingJumbo extends Component {
  render() {
    return (
        <section>
        <div class="jumbotron jumbotron-fluid jumboBackground">
          <div class="container vertical-center">
            <h2 class="display-4 trainingText">Internal Team Training</h2>
            <p class="lead trainingText">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <Link to="/grouptrainingform"> <button type="button" class="btn btn-dark">Apply</button></Link>
          </div>
        </div>
      </section>
    )
  }
}

export default GroupTrainingJumbo
