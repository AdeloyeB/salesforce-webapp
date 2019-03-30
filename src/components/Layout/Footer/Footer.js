import React, { Component } from "react";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small mdb-color pt-4 bg-background">
        <div className="container text-center text-md-left whiteText">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <a href="https://www.britishland.com/">
                  The British Land Company PLC
                </a>
              </h6>
              <p>Registered in England. Company No: 621920.</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold whiteText">
                BLSFP
              </h6>
              <p className="whiteText">
                <a href="https://www.britishland.com/site-services/glossary">
                  Glossary
                </a>
              </p>
              <p className="whiteText">
                <a href="https://www.britishland.com/site-services/privacy-notice">
                  Privacy Notice
                </a>
              </p>
              <p className="whiteText">
                <a href="https://www.britishland.com/site-services/terms-of-use">
                  Terms of use
                </a>
              </p>
              <p className="whiteText">
                <a href="https://www.britishland.com/site-services/cookie-policy">
                  Cookie Policy
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <hr class="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold whiteText">
                Contact
              </h6>
              <p className="whiteText">
                <i className="fas fa-home mr-3" />
                York House, 45 Seymour Street, London , W1H 7LX
              </p>
              <p className="whiteText">
                <i className="fas fa-envelope mr-3" /> nfo@britishland.com
              </p>
              <p className="whiteText">
                <i className="fas fa-phone mr-3" /> Tel: 020 7486 4466
              </p>
            </div>
          </div>

          <hr />

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left whiteText">
                <a href="https://www.britishland.com/">
                  <strong> © British Land 2019</strong>
                </a>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
