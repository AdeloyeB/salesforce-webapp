import React, { Component } from "react";

import "./pages/Home/Home.css";

export class SFTeam extends Component {
  render() {
    return (
      <section>
        <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>

          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
              <div className="avatar mx-auto" />
              <h5 className="font-weight-bold mt-4 mb-3">Helen Chan</h5>
              <p className="text-uppercase blue-text">
                <strong>Salesforce Consultant</strong>
              </p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
            </div>

            <div className="col-lg-3 col-md- mb-lg-0 mb-5">
              <div className="avatar mx-auto" />
              <h5 className="font-weight-bold mt-4 mb-3">Bode Adeloye</h5>
              <p className="text-uppercase blue-text">
                <strong>Salesforce Apprentice</strong>
              </p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default SFTeam;
