import React from "react";
import Slider from "react-slick";

import TestimonialCard from "../components/TestimonialCard";

import quoteIcon from "../assets/icons/quote-icon.png";
import googleIcon from "../assets/icons/google-icon.png";
import amazoneIcon from "../assets/icons/amazone-icon.png";

const reviews = [
  {
    icon: quoteIcon,
    review:
      '"As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us. "',
    name: "Nisha",
    rating: 5,
    company: googleIcon,
  },
  {
    icon: quoteIcon,
    review:
      '"As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us. "',
    name: "Dilsher",
    rating: 5,
    company: amazoneIcon,
  },
  {
    icon: quoteIcon,
    review:
      '"As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us. "',
    name: "Honey",
    rating: 4,
    company: googleIcon,
  },
  {
    icon: quoteIcon,
    review:
      '"As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us. "',
    name: "Tanveer",
    rating: 5,
    company: amazoneIcon,
  },
];

export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <section id="testimonials">
      <div className="testimonials">
        <div className="testimonials-outer px-8">
          <div className="container">
            <div className="testimonials-inner">
              <div className="testimonials-content align-center">
                <h5 className="testimonials-subheading subheading mx-auto">
                  Testimonials
                </h5>
                <h2 className="testimonials-heading">
                  What Our
                  <span className="highlighted-text"> Client Say</span>
                </h2>
              </div>

              <div className="testimonials-slider pt-4">
                <Slider {...settings}>
                  {reviews.map((review, index) => (
                    <TestimonialCard
                      key={index}
                      icon={review.icon}
                      review={review.review}
                      name={review.name}
                      rating={review.rating}
                      company={review.company}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
