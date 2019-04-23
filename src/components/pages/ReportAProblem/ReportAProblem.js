import React, { Component } from "react";

import NavBar from "../../Layout/NavBar/NavBar";
import Footer from "../../Layout/Footer/Footer";

import ContactForm from "../ContactForm";
import ContactJumbo from "../ContactJumbo";

export class ReportAProblem extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <div className="container">
          <ContactJumbo />
          <ContactForm />
        </div>
        <Footer />
      </section>
    );
  }
}

export default ReportAProblem;
