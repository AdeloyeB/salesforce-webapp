import React, { Component } from "react";
import "./pages/ReportAProblem/ReportAProblem.css";

export class ContactForm extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: ""
  };

  async componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;
    return (
      <section>
        <form
          className="text-center border border-light p-4"
          action="https://formcarry.com/s/McuktKju6em"
          method="POST"
          accept-charset="UTF-8"
        >
          <p className="h4 mb-4">Report an Issue</p>

          <input
            type="text"
            id="ContactFormName"
            className="form-control mb-4 required"
            placeholder="Name"
            name="name"
            value={currentUserName}
          />

          <input
            type="email"
            id="ContactFormEmail"
            className="form-control mb-4 required"
            placeholder="E-mail"
            name="email"
            value={currentUserEmail}
          />

          <label>Issue:</label>
          <select className="browser-default custom-select mb-4">
            <option value="" disabled>
              Issue Option:
            </option>
            <option value="1" selected>
              Cannot see certain Dashboard
            </option>
            <option value="2">Reset Password</option>
            <option value="3">Meeting Notes</option>
            <option value="4">Capital Projects</option>
            <option value="5">Data Subject Access Rights</option>
            <option value="6">Other</option>
          </select>

          <div className="form-group">
            <textarea
              className="form-control rounded-0"
              id="FormControlTextarea2"
              rows="3"
              placeholder="Message"
            />
          </div>

          <button className="btn btn-info btn-block" type="submit">
            Send
          </button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
