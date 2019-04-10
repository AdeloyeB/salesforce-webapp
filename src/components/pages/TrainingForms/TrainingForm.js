import React, { Component } from "react";

import NavBar from "../../Layout/NavBar/NavBar";
import Footer from "../../Layout/Footer/Footer";
import "./TrainingForm.css";

import firebase from "../../../config/firebase";

export class TrainingForm extends Component {
  constructor() {
    super();
    this.state = {
      TrainingOwner: "",
      TrainingOwnerEmailAddress: "",
      TrainingManager: "",
      TrainingTeam: "",
      TrainingAttendees: "",
      TrainingContent: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formDataRef = firebase.database().ref("trainingSessions");
    const formData = {
      trainingOwner: this.state.TrainingOwner,
      trainingOwnerEmailAddress: this.state.TrainingOwnerEmailAddress,
      trainingManager: this.state.TrainingManager,
      trainingTeam: this.state.TrainingTeam,
      trainingAttendees: this.state.TrainingAttendees,
      trainingContent: this.state.TrainingContent
    };
    formDataRef.push(formData);
    this.setState({
      TrainingOwner: "",
      TrainingOwnerEmailAddress: "",
      TrainingManager: "",
      TrainingTeam: "",
      TrainingAttendees: "",
      TrainingContent: ""
    });
  }

  render() {
    return (
      <section>
        <NavBar />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group req">
              <label>Training Owner</label>
              <input
                type="text"
                name="TrainingOwner"
                className="form-control"
                value={this.state.TrainingOwner}
                onChange={this.handleUserInput}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group req">
              <label>Training Owner: Email address</label>
              <input
                type="email"
                name="TrainingOwnerEmailAddress"
                className="form-control"
                value={this.state.TrainingOwnerEmailAddress}
                onChange={this.handleUserInput}
                id="exampleFormControlInput1"
                placeholder="name@britishland.com"
                required
              />
            </div>

            <div className="form-group req">
              <label>Team Manager</label>
              <input
                type="text"
                name="TrainingManager"
                className="form-control"
                value={this.state.TrainingManager}
                onChange={this.handleUserInput}
                id="exampleFormControlInput1"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group req">
              <label>Team Name</label>
              <input
                type="text"
                name="TrainingTeam"
                className="form-control"
                value={this.state.TrainingTeam}
                onChange={this.handleUserInput}
                id="exampleFormControlInput1"
                placeholder="Retail"
                required
              />
            </div>

            <div className="form-group req">
              <label>Team Attendees</label>
              <input
                type="text"
                name="TrainingAttendees"
                className="form-control"
                value={this.state.TrainingAttendees}
                onChange={this.handleUserInput}
                id="exampleFormControlInput1"
                placeholder="John Doe, Ryan Doe, Jessica Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>Details</label>
              <textarea
                className="form-control"
                name="TrainingContent"
                value={this.state.TrainingContent}
                onChange={this.handleUserInput}
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
