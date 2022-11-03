import React from "react";
// import A from './images/A.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import A from './images/A.jpg'
import B from './images/B.jpg'
import C from './images/C.jpg'

export default function MainCard() {

  return (
    <div className="align-center" >
      <div className="card " style={{ width: "90%" }}>
        <div className="card-body d-flex">
          <div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-6"> <Card Heading="Best Mobile Recharge" /></div>
                   
                    <div className="col-lg-6"><img
                      src={A}
                      className=" col-md-6  w-100 ms-4 "
                      style={{ height: "280px" }}
                      alt="..."
                    />
                  </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-6"><Card Heading="Best gas Recharge" /></div>
                    <div className="col-lg-6"><img
                      src={B}
                      className="d-block  w-100 ms-4  "
                      style={{ height: "280px" }}
                      alt="..."
                    />
                  </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                  <div className="col-lg-6"><Card Heading="Best credit Recharge" /></div>
                    <div className="col-lg-6"><img
                      src={C}
                      className="d-block  w-100 ms-4  "
                      style={{ height: "280px" }}
                      alt="..."
                    />
                  </div>
                  </div>
                </div>
              </div>
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
