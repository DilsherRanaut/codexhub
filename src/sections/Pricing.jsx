import React from "react";
import PriceCard from "../components/PriceCard";

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing">
        <div className="pricing-outer px-8">
          <div className="container">
            <div className="pricing-inner">
                <div className="pricing-content align-center">
                  <h5 className="about-subheading subheading mx-auto">Pricing & Plan</h5>
                  <h2 className="about-heading">
                    Our
                    <span className="highlighted-text"> Pricing Plan</span>
                  </h2>
                  
                </div>

                <div className="pricing-cards row pt-4 gap-4">
                    <PriceCard className="col-4"/>
                    <PriceCard className="col-4 bg-main"/>
                    <PriceCard className="col-4"/>
                </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
