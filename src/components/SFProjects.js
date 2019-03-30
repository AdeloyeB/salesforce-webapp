import React, { Component } from "react";

export class SFProjects extends Component {
  render() {
    return (
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">
          Salesforce
        </h2>

        <p class="grey-text text-center w-responsive mx-auto mb-5">
          Salesforce Customer Relationship Management system is a combination of
          practices, strategies and technologies that British Land uses ot
          manage and analyse user and customer interactions. The goal is to
          improve our client service and relations whilst driving deals.
        </p>

        <div class="row">
          <div class="col-lg-5 mb-lg-0 mb-5">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
              alt="Sample project image"
              class="img-fluid rounded z-depth-1"
            />
          </div>

          <div class="col-lg-7">
            <div class="row mb-3">
              <div class="col-md-1 col-2">
                <i class="fas fa-book fa-2x cyan-text" />
              </div>
              <div class="col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Individual KPI Dashboard</h5>
                <p class="grey-text">
                  KPI Dashboard is designed to capture a few key metrics for how
                  well you are using the system, how that stacks against
                  colleagues, and the condition and status of an account and
                  contacts that you own.
                </p>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-1 col-2">
                <i class="fas fa-code fa-2x red-text" />
              </div>
              <div class="col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Meeting Notes</h5>
                <p class="grey-text">
                  Meeting Notes allows you to digitally log minutes taken in a
                  meeting. This can be referred too and future users can look
                  back at meeting notes that you have logged so information is
                  never lost.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-1 col-2">
                <i class="far fa-money-bill-alt fa-2x deep-purple-text" />
              </div>
              <div class="col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Team Dashboards</h5>
                <p class="grey-text mb-0">
                  Team Dashboards have been redesigned with the goal of
                  increasing information across a team. They give an overview of
                  how each team is using Salesforce, and to allow all members to
                  see activities across that team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-5" />

        <div class="row">
          <div class="col-lg-7">
            <div class="row mb-3">
              <div class="col-md-1 col-2">
                <i class="far fa-chart-bar fa-2x indigo-text" />
              </div>
              <div class="col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Capital Projects</h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-1 col-2">
                <i class="fas fa-music fa-2x pink-text" />
              </div>
              <div class="col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">
                  Budget Movements and IC Builds
                </h5>
                <p class="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </div>
            </div>

            <div class="row mb-lg-0 mb-5">
              <div class="col-md-1 col-2">
                <i class="far fa-grin fa-2x blue-text" />
              </div>
              <div class="col-md-11 col-10">
                <h5 class="font-weight-bold mb-3">Development</h5>
                <p class="grey-text mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
              alt="Sample project image"
              class="img-fluid rounded z-depth-1"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default SFProjects;
