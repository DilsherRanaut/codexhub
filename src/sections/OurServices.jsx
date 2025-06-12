import logo from "../assets/images/codexhub-logo.png";
import bgCircle from "../assets/images/hero-girl-bg.png";
import serviceIcon1 from "../assets/icons/service-icon1.png";
import serviceIcon2 from "../assets/icons/service-icon2.png";
import serviceIcon3 from "../assets/icons/service-icon3.png";
import serviceIcon4 from "../assets/icons/service-icon4.png";

export default function OurServices() {
  return (
    <section id="services">
      <div className="our-services">
        <div className="our-services-outer px-8">
          <div className="container">
            <div className="our-services-inner ">
            <div className="backround-cirlce">
              <img src={bgCircle} alt="bgCircle" className="zoom-in-out" />
            </div>

            <div className="our-services-content align-center">
                  <h5 className="our-services-subheading subheading mx-auto">Our Services</h5>
                <h2 className="our-services-heading">
                  Our Comprehensive Suite Of <br/>Digital Marketing <span className="highlighted-text"> Services.</span> 
                </h2>                
            </div>


              <div className="our-services-cards row pt-6">
                <div className="col-5">
                  <div className="service-card">
                    <div className="icons-area row space-between">
                      <div className="col-3 align-center service-icon">
                        <img src={serviceIcon1} alt="serviceIcon1" />
                      </div>
                      <div className="col-3 align-center service-number">
                        01
                      </div>
                    </div>
                    <div className="content-area">
                      <h4 className="our-service-title pt-2">
                        Search Engine Optimization
                      </h4>
                      <p className="our-service-description">
                        Our team of experts will optimize your site's on-page
                        elements, create high-quality content, and build
                        authoritative backlinks to boost your rankings attract.
                      </p>
                      <a href="" className="our-service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <div className="service-card">
                    <div className="icons-area row space-between">
                      <div className="col-3 align-center service-icon">
                        <img src={serviceIcon2} alt="serviceIcon2" />
                      </div>
                      <div className="col-3 align-center service-number">
                        02
                      </div>
                    </div>
                    <div className="content-area">
                      <h4 className="our-service-title pt-2">
                        Search Engine Optimization
                      </h4>
                      <p className="our-service-description">
                        Our team of experts will optimize your site's on-page
                        elements, create high-quality content, and build
                        authoritative backlinks to boost your rankings attract.
                      </p>
                      <a href="" className="our-service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="our-services-cards row pt-6">
                <div className="col-5"></div>
                <div className="col-2 align-center">
                  <img src={logo} alt="" />
                </div>
                <div className="col-5"></div>
              </div>

              <div className="our-services-cards row pt-6">
                <div className="col-5">
                  <div className="service-card">
                    <div className="icons-area row space-between">
                      <div className="col-3 align-center service-icon">
                        <img src={serviceIcon3} alt="serviceIcon3" />
                      </div>
                      <div className="col-3 align-center service-number">
                        03
                      </div>
                    </div>
                    <div className="content-area">
                      <h4 className="our-service-title pt-2">
                        Search Engine Optimization
                      </h4>
                      <p className="our-service-description">
                        Our team of experts will optimize your site's on-page
                        elements, create high-quality content, and build
                        authoritative backlinks to boost your rankings attract.
                      </p>
                      <a href="" className="our-service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <div className="service-card">
                    <div className="icons-area row space-between">
                      <div className="col-3 align-center service-icon">
                        <img src={serviceIcon4} alt="serviceIcon4" />
                      </div>
                      <div className="col-3 align-center service-number">
                        04
                      </div>
                    </div>
                    <div className="content-area">
                      <h4 className="our-service-title pt-2">
                        Search Engine Optimization
                      </h4>
                      <p className="our-service-description">
                        Our team of experts will optimize your site's on-page
                        elements, create high-quality content, and build
                        authoritative backlinks to boost your rankings attract.
                      </p>
                      <a href="" className="our-service-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="align-center pt-4"><a><button className="primary-btn">See All Sevices</button></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
