import React, { Component } from "react";

import "./KnowledgeBase.css";

export class KnowledgeBase extends Component {
  render() {
    return (
      <div>
        <div className="container featured-area-default padding-70">
          <div className="row">
            <div className="col-md-8 padding-20">
              <div className="row margin-bottom-30">
                <div className="col-md-12">
                  <div className="row">
                    <div className="featured-box container-fluid">
                      <div className="fb-heading">
                        Introduction to Salesforce
                        <div className="fb-sub-heading">
                          <b>New to Salesforce?</b> Watch the video below to get
                          an idea
                          <br />
                        </div>
                      </div>
                      <hr className="style-three" />
                      <div className="fb-content">
                        <iframe
                          src="https://www.youtube.com/embed/di6iwHhrH6s"
                          width="100%"
                          height="360"
                          frameborder="0"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="fb-heading">Salesforce Bot Questions</div>
                  <hr className="style-three" />
                  <div className="row">
                    <div className="col-md-6 margin-bottom-20">
                      <div clasNames="fat-heading-abb" />
                      <div className="fat-content-small padding-left-30">
                        <ul>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> How to reset a
                              password?
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> How do I log
                              into Salesforce?
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> How do I get a
                              Salesforce account?
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> I can't seem
                              to log meeting notes for other managers?
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> How do I get
                              weekly meeting reports?
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 margin-bottom-20">
                      <div className="fat-heading-abb" />
                      <div className="fat-content-small padding-left-30">
                        <ul>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> I can't seem
                              to view my team dashboard.
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> I can't seem
                              to log into Salesforce anymore.
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> Training is
                              needed!
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" />
                              Change customer details
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-file-text-o" /> Lookup
                              existing customer in order form
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 padding-20">
              <div className="row margin-bottom-30" />

              <div className="row margin-top-20">
                <div className="col-md-12">
                  <div className="fb-heading-small">Popular Bot Questions</div>
                  <hr className="style-three" />
                  <div className="fat-content-small padding-left-10">
                    <ul>
                      <li>
                        <a>
                          <i className="fa fa-file-text-o" /> How to change
                          account password?
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-file-text-o" /> Add new user
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-file-text-o" /> Change contact
                          details
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-file-text-o" /> Add an account to
                          Salesforce
                        </a>
                      </li>
                      <iframe
                        allow="microphone;"
                        width="350"
                        height="530"
                        src="https://console.dialogflow.com/api-client/demo/embedded/706474ce-d484-4b3e-a701-2e982954c16e"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KnowledgeBase;
