import React from "react";
import blogImg1 from "../assets/images/blog1.jpg";
import blogImg2 from "../assets/images/blog2.jpg";
import blogImg3 from "../assets/images/blog3.webp";
import blogImg4 from "../assets/images/blog4.jpg";

export default function OurBlogs() {
  return (
    <section id="blogs">
      <div className="our-blogs">
        <div className="our-blogs-outer px-8">
          <div className="container">
            <div className="our-blogs-inner">
              <div className="our-blogs-content align-center">
                <h5 className="our-blogs-subheading subheading mx-auto">
                  Our Blogs
                </h5>
                <h2 className="our-blogs-heading">
                  Latest Trends in SEO and <br />
                  <span className="highlighted-text"> Digital Marketing</span>
                </h2>
              </div>
              <div className="our-blogs-grid row gap-4 pt-4">
                {/* Main Post  */}

                <div className="our-blogs-main-post col-6">
                  <div className="our-blogs-main">
                    <div className="our-blogs-main-img">
                      <img src={blogImg1} alt="" />
                    </div>
                    <div className="our-blogs-main-content">
                      <div className="our-blogs-main-meta row gap-4">
                        <div className="our-blogs-main-meta-author">Admin</div>
                        <div className="our-blogs-main-meta-date">
                          November 13, 2024
                        </div>
                      </div>
                      <div className="our-blogs-main-title pt-2">
                        <h3>The Future of Business: Trends to Watch in 2025</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="our-blogs-lists col-6">
                  {/* Post Lists  */}

                  <div className="our-blogs-list-item row gap-2">
                    <div className="our-blogs-list-item-img col-3">
                      <img src={blogImg2} alt="" />
                    </div>
                    <div className="our-blogs-list-item-content col-9">
                      <div className="our-blogs-list-item-meta">
                        admin November 13, 2024
                      </div>
                      <div className="our-blogs-list-item-title pt-1">
                        <h4>The Future of Business: Trends to Watch in 2025</h4>
                      </div>
                      <div className="our-blogs-list-item-link pt-1">
                        <h5>Read More</h5>
                      </div>
                    </div>
                  </div>

                  <div className="our-blogs-list-item row gap-2">
                    <div className="our-blogs-list-item-img col-3">
                      <img src={blogImg3} alt="" />
                    </div>
                    <div className="our-blogs-list-item-content col-9">
                      <div className="our-blogs-list-item-meta">
                        admin November 13, 2024
                      </div>
                      <div className="our-blogs-list-item-title pt-1">
                        <h4>The Future of Business: Trends to Watch in 2025</h4>
                      </div>
                      <div className="our-blogs-list-item-link pt-1">
                        <h5>Read More</h5>
                      </div>
                    </div>
                  </div>
                  <div className="our-blogs-list-item row gap-2">
                    <div className="our-blogs-list-item-img col-3">
                      <img src={blogImg4} alt="" />
                    </div>
                    <div className="our-blogs-list-item-content col-9">
                      <div className="our-blogs-list-item-meta">
                        admin November 13, 2024
                      </div>
                      <div className="our-blogs-list-item-title pt-1">
                        <h4>The Future of Business: Trends to Watch in 2025</h4>
                      </div>
                      <div className="our-blogs-list-item-link pt-1">
                        <h5>Read More</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
