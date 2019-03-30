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
              src="https://www.britishland.com/~/media/Images/B/British-Land-V4/redesign-2017/banners/homepage-banner-2018.jpg"
              alt="First slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.britishland.com/~/media/Images/B/British-Land-V4/content-images/featured-properties-standard-banners/BL_Banner_496x1500_paddington.jpg"
              alt="Second slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.britishland.com/~/media/Images/B/British-Land-V4/content-images/featured-properties-standard-banners/featured-properties-updated-images/meadowhall-2017-main.jpg"
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
