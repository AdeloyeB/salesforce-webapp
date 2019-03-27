import React, { Component } from "react";

export class ControlledCarousel extends Component {
  render() {
    return (
      <div
        id="carousel-example-1z"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-1z"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carousel-example-1z" data-slide-to="1" />
          <li data-target="#carousel-example-1z" data-slide-to="2" />
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
              alt="First slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
              alt="Second slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              alt="Third slide"
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-example-1z"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-example-1z"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default ControlledCarousel;
