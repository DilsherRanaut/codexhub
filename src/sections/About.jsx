import React from "react";
import aboutImg1 from "../assets/images/about-img1.png";
import aboutImg2 from "../assets/images/about-img2.png";
import circleTextImg from "../assets/images/circle-textimage.png";
import planetImg from "../assets/images/planet.png";
import arrowIcon from "../assets/icons/arrow-icon.png";

export default function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about-outer">
          <div className="container">
            <div className="about-inner row gap-6">
              <div className="about-left col-4">
                <img className="aboutImg1" src={aboutImg1} alt="aboutImg1" />
              </div>
              <div className="about-center col-4 pt-5">
                <div className="arrow-circle">
                  <a href="">
                    <img src={circleTextImg} alt="rotation image" className="rotation" />
                    <img src={arrowIcon} alt="arrow" className="arrow" />
                  </a>
                </div>
                <h5 className="about-subheading subheading">About CodeX Hub</h5>
                <h2 className="about-heading">
                  Comprehensive SEO & <span className="highlighted-text">Digital Marketing</span> Solutions.
                </h2>
                <p className="about-desription">
                  Welcome to CodeX Hub your trusted partner for comprehensive SEO and
                  digital marketing solutions. With our proven expertise and
                  innovative strategies the digital landscape.
                </p>
                <div className="about-btn pt-1">
                  <button className="primary-btn">Learn More</button>
                </div>
              </div>
              <div className="about-right col-3">
                <div className="about-auhtor-images">
                  <img className="planet rotation" src={planetImg} alt="" />
                  <img className="aboutImg2" src={aboutImg2} alt="aboutImg2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
