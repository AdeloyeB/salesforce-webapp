import React, { Component } from "react";
import "./pages/MainTrainingPage/TrainingStyle.css";

export class TrainingJumbo extends Component {
  render() {
    return (
      <section>
        <div className="card card-image jumboImage">
          <div className="text-white text-center rgba-stylish-strong py-5 px-4">
            <div className="py-5">
              <h5 className="h5 orange-text">
                <i className="fas fa-camera-retro" /> Photography
              </h5>
              <h2 className="card-title h2 my-4 py-2">
                Jumbotron with image overlay
              </h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur obcaecati vero aliquid libero doloribus ad, unde
                tempora maiores, ullam, modi qui quidem minima debitis
                perferendis vitae cumque et quo impedit.
              </p>
              <a className="btn peach-gradient">
                <i className="fas fa-clone left" /> View project
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrainingJumbo;