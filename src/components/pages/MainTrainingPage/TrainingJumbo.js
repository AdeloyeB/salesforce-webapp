import React, { Component } from "react";
import "./TrainingStyle.css";

export class TrainingJumbo extends Component {
  render() {
    return (
      <section>
        <div className="card card-image jumboImage">
          <div className="text-white text-center rgba-stylish-strong py-5 px-4">
            <div className="py-5">
              <h5 className="h5 orange-text">
                <i className="fas fa-camera-retro" /> Salesforce Training
              </h5>
              <h2 className="jumboText card-title h2 my-4 py-2">
                Get started with Salesforce at British Land Today!
              </h2>
              <a className="btn peach-gradient" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrainingJumbo;
