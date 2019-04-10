import React, { Component } from "react";

import NavBar from "../../Layout/NavBar/NavBar";
import Footer from "../../Layout/Footer/Footer";
import "./UserForm.css";

import firebase from "../../../config/firebase";

export class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      jobTitle: "",
      replicateUser: "",
      role: "",
      profile: "",
      divisionTeam: "",
      managerEmail: "",
      VIP: "",
      paCalendarSync: "",
      pardot: "",
      autoOpenSalesforce: ""
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
    const formDataRef = firebase.database().ref("userRequests");
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      jobTitle: this.state.jobTitle,
      replicateUser: this.state.replicateUser,
      role: this.state.role,
      profile: this.state.profile,
      divisionTeam: this.state.divisionTeam,
      managerEmail: this.state.managerEmail,
      VIP: this.state.VIP,
      paCalendarSync: this.state.paCalendarSync,
      pardot: this.state.pardot,
      autoOpenSalesforce: this.state.autoOpenSalesforce
    };
    formDataRef.push(formData);
    this.setState({
      firstName: "",
      lastName: "",
      emailAddress: "",
      jobTitle: "",
      replicateUser: "",
      role: "",
      profile: "",
      divisionTeam: "",
      managerEmail: "",
      VIP: "",
      paCalendarSync: "",
      pardot: "",
      autoOpenSalesforce: ""
    });
  }

  render() {
    return (
      <section>
        <NavBar />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group req">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleUserInput}
                placeholder="John"
                required
              />
            </div>

            <div className="form-group req">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleUserInput}
                placeholder="Doe"
                required
              />
            </div>

            <div className="form-group req">
              <label>Email address</label>
              <input
                type="email"
                name="emailAddress"
                className="form-control"
                value={this.state.emailAddress}
                onChange={this.handleUserInput}
                placeholder="name@britishland.com"
                required
              />
            </div>

            <div className="form-group req">
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                className="form-control"
                value={this.state.jobTitle}
                onChange={this.handleUserInput}
                placeholder="Community Manager"
                required
              />
            </div>

            <div className="form-group">
              <label>Salesforce User We Can Replicate:</label>
              <input
                type="text"
                name="replicateUser"
                className="form-control"
                value={this.state.replicateUser}
                onChange={this.handleUserInput}
                placeholder="Alan Summers"
              />
            </div>

            <div className="form-group req">
              <label>Role</label>
              <input
                type="text"
                name="role"
                className="form-control"
                value={this.state.role}
                onChange={this.handleUserInput}
                placeholder="BE Retail Team"
                required
              />
            </div>

            <div className="form-group req">
              <label>Profile</label>
              <input
                type="text"
                name="profile"
                className="form-control"
                value={this.state.profile}
                onChange={this.handleUserInput}
                placeholder="BE Retail User"
                required
              />
            </div>

            <div className="form-group req">
              <label>Division/Team</label>
              <input
                type="text"
                name="divisionTeam"
                className="form-control"
                value={this.state.divisionTeam}
                onChange={this.handleUserInput}
                id="exampleFormControlInput1"
                placeholder="BE Retail"
                required
              />
            </div>

            <div className="form-group req">
              <label>Manager: Email address</label>
              <input
                type="email"
                name="managerEmail"
                className="form-control"
                value={this.state.managerEmail}
                onChange={this.handleUserInput}
                placeholder="name@britishland.com"
                required
              />
            </div>

            <div className="form-group">
              <label for="vip">
                VIP User(Should only be executives and managers):
              </label>
              <select
                type="text"
                name="VIP"
                className="form-control"
                value={this.state.VIP}
                onChange={this.handleUserInput}
                required
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="form-group">
              <label for="paCalendarSync">
                Personal Assistant Calendar Sync:
              </label>
              <select
                type="text"
                name="paCalendarSync"
                className="form-control"
                value={this.state.paCalendarSync}
                onChange={this.handleUserInput}
                required
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="form-group">
              <label for="pardot">Pardot Access:</label>
              <select
                type="text"
                name="pardot"
                className="form-control"
                value={this.state.pardot}
                onChange={this.handleUserInput}
                required
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="form-group">
              <label for="autoOpenSalesforce">Auto Open Salesforce:</label>
              <select
                type="text"
                name="autoOpenSalesforce"
                className="form-control"
                value={this.state.autoOpenSalesforce}
                onChange={this.handleUserInput}
                required
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </section>
    );
  }
}

export default UserForm;
