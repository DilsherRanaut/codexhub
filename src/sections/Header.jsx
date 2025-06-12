import { useEffect, useState } from "react";
import logo from "../assets/images/codexhub-logo.png";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 100); // Add sticky after scrolling 100px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <header>
      <div className={isSticky ? "header sticky" : "header"}>
        <div className="header-outer">
          <div className="container">
            <div className="header-inner">
              <div className="header-elements row">
                <div className="site-logo col-2 align-left">
                  <a href="/"><img src={logo}></img></a>
                </div>
                <div className="main-menu col-8">
                  <ul className="row gap-2">
                    <a href="#about"><li>About Us</li></a>
                    <a href="#services"><li>Services</li></a>
                    <a href="#work-process"><li>Work Process</li></a>
                    <a href="#pricing"><li>Pricing</li></a>
                    <a href="#testimonials"><li>Testimonials</li></a>
                    <a href="#blogs"><li>Blogs</li></a>
                  </ul>
                </div>
                <div className="btn-area col-2 align-right">
                  <a href="tel:+91 6284-371962"><button className="primary-btn">Free Consultation</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
