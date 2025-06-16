import { useEffect, useState } from "react";
import logo from "../assets/images/codexhub-logo.png";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 100);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className={isSticky ? "header sticky" : "header"}>
        <div className="header-outer">
          <div className="container">
            <div className="header-inner">
              <div className="header-elements row">
                <div className="site-logo col-2 align-left">
                  <a href="/"><img src={logo} alt="Logo" /></a>
                </div>

                {/* Hamburger Icon */}
                <div className="mobile-hamburger col-10">
                <button className="hamburger" onClick={toggleMenu}>
                  ☰
                </button>
                </div>

                <div className={`main-menu col-10 ${menuOpen ? "open" : ""}`}>
                  <ul className="row gap-2">
                    <a href="#about" onClick={() => setMenuOpen(false)}><li>About Us</li></a>
                    <a href="#services" onClick={() => setMenuOpen(false)}><li>Services</li></a>
                    <a href="#work-process" onClick={() => setMenuOpen(false)}><li>Work Process</li></a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}><li>Pricing</li></a>
                    <a href="#testimonials" onClick={() => setMenuOpen(false)}><li>Testimonials</li></a>
                    <a href="#blogs" onClick={() => setMenuOpen(false)}><li>Blogs</li></a>
                    <a href="#blogs" onClick={() => setMenuOpen(false)} className="primary-btn"><li>Free Consultation</li></a>
                  </ul>
                </div>

                {/* <div className="btn-area col-2 align-right">
                  <a href="tel:+91 6284-371962">
                    <button className="primary-btn">Free Consultation</button>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
