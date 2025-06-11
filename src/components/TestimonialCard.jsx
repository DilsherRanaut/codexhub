import React from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TestimonialCard(props) {
  let rating = [];

  for (let star = 0; star < props.rating; star++) {
    rating.push(<FontAwesomeIcon key={star} icon={faStar} />);
  }

  return (
    <div className={`testimonial-card ${props.className}`}>
      <div className="testimonial-card-inner">
        <div className="icons-area">
          <div className="col-2 testimonial-card-icon ">
            <img src={props.icon} alt="Icon" />
          </div>
        </div>
        <div className="content-area pt-3">
          <p className="testimonial-card-review">{props.review}</p>
          <div className="testimonial-autor-details row">
            <div className="testimonial-author col-10">
              <h4 className="testimonial-card-name">{props.name}</h4>
              {rating}
            </div>
            <div className="testimonial-company col-2 align-right">
              <img src={props.company} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
