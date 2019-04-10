import React, { Component } from "react";

import KnowledgeBase from "./KnowledgeBase";
import NavBar from "../../Layout/NavBar/NavBar";
import Footer from "../../Layout/Footer/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

export class MainKnowledgeBase extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <div className="container">
          <KnowledgeBase />
        </div>
        <Footer />
      </section>
    );
  }
}

export default MainKnowledgeBase;
