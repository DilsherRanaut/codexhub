import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWebAwesome } from "@fortawesome/free-solid-svg-icons";

export default function PriceCard(props) {
  return (
    <div className={`price-card ${props.className}`}>
      <div className="price-card-inner">
        <h4 className="price-card-name">Basic Plan - Starter</h4>
        <p className="price-card-desc">
          Our SEO and Digital Marketing agency <br />
          offers a range of pricing plans tailored
        </p>
        <hr />
        <div className="price-card-price">
            <span >$999</span>
        <sub>/monthly</sub>
        </div>
        
        <hr className="red" />
        <h4 className="price-card-btn align-center">CHOOSE YOUR PLAN</h4>
        <hr className="red" />

        <div className="price-card-services">
          <h4 className="price-card-services-title">Service Include:</h4>
          <div className="price-card-services-list">
            <div className="price-card-services-item row gap-1">
              <div className="check-icon col-1">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="col-11">Keyword Research</div>
            </div>

            <div className="price-card-services-item row gap-1 pt-1">
              <div className="check-icon col-1">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="col-11">One Page Optimization</div>
            </div>

           <div className="price-card-services-item row gap-1 pt-1">
              <div className="check-icon col-1">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="col-11"> Basic Analytics Reporting</div>
            </div>
           
          </div>
        </div>
        <small className="price-card-extra-info">
          Small businesses or startups looking to establish their online
          presence.
        </small>
      </div>
    </div>
  );
}
