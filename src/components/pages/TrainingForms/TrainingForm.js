import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../Layout/NavBar/NavBar";
import Footer from "../../Layout/Footer/Footer";

import "./TrainingForm.css";

export class TrainingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <NavBar />
        <div className="container">
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Training Owner</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">
                Training Owner: Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@britishland.com"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Team Manager</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Team Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Retail"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Team Attendees</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe, Ryan Doe, Jessica Doe"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Details</label>
              <textarea
                className="form-control"
                placeholder="Hi, We need some training on: Meeting Notes, Accounts, Salesforce1 App, Contacts. Our team is new so all of us may not have Salesforce. Please check!"
                id="exampleFormControlTextarea1"
                rows="4"
              />

              <button type="submit" class="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </section>
    );
  }
}

export default TrainingForm;
