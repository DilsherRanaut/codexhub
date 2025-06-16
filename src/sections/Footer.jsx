import logo from "../assets/images/codexhub-logo.png";
import fbIcon from "../assets/icons/facebook-icon.svg";
import instaIcon from "../assets/icons/instagram-icon.svg";
import lnIcon from "../assets/icons/linkedin-icon.svg";
import xIcon from "../assets/icons/x-icon.svg";

import mailIcon from "../assets/icons/mail-icon.png";
import mapIcon from "../assets/icons/map-icon.png";
import phoneIcon from "../assets/icons/phone-icon.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer px-8">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-content row gap-6">
                {/* site details  */}
                <div className="footer-col col-3">
                  <div className="site-logo text-left">
                    <a href="/"><img src={logo}></img></a>
                  </div>
                  <p className="pt-2">By optimizing content, leveraging relevant keywords, and adhering to best practices, businesses can secure prominent position (SEO)</p>

                  <div className="footer-social-icons row gap-1">
                    <a href="" className="footer-social-icon">
                        <img src={fbIcon} alt="facebook" />
                    </a>
                    <a href="" className="footer-social-icon">
                        <img src={instaIcon} alt="instagram" />
                    </a>
                    <a href="" className="footer-social-icon">
                        <img src={lnIcon} alt="linkedin" />
                    </a>
                    <a href="" className="footer-social-icon">
                        <img src={xIcon} alt="X" />
                    </a>
                  </div>
                </div>
                {/* about menus */}
                <div className="footer-col col-2">
                    <h4 className="footer-heading">Quick Links</h4>
                    <a className="footer-menu-item-link" href="#about"><li className="footer-menu-item">About Us</li></a>
                    <a className="footer-menu-item-link" href="#services"><li className="footer-menu-item">Services</li></a>
                    <a className="footer-menu-item-link" href="#work-process"><li className="footer-menu-item">Work Process</li></a>
                    <a className="footer-menu-item-link" href="#pricing"><li className="footer-menu-item">Pricing</li></a>
                    <a className="footer-menu-item-link" href="#testimonials"><li className="footer-menu-item">Testimonials</li></a>
                    <a className="footer-menu-item-link" href="#blogs"><li className="footer-menu-item">Blogs</li></a>
                </div>
                {/* get in touch */}
                <div className="footer-col col-3">
                    <h4 className="footer-heading">Get in touch</h4>
                    <div className="footer-contect-item row gap-1">
                        <div className="contect-icon col-1"><img src={mailIcon} alt="Mail" /></div>
                        <div className="contect-details col-11">infocodexhub@gmail.com</div>
                    </div>
                    <div className="footer-contect-item row gap-1">
                        <div className="contect-icon col-1"><img src={mapIcon} alt="Map" /></div>
                        <div className="contect-details col-11">CP.67 Unity Homeland, Site-252, Airport Road, Sector-67, Mohali</div>
                    </div>
                    <div className="footer-contect-item row gap-1">
                        <div className="contect-icon col-1"><img src={phoneIcon} alt="Phone" /></div>
                        <div className="contect-details col-11">+91 6284-371962</div>
                    </div>
                </div>
                {/* newsletter */}
                <div className="footer-col col-4">
                    <h4 className="footer-heading">Subscribe Our Newsletter</h4>
                    <div className="footer-newsletter">
                        <form action="" className="newsletter-form">
                            <input type="email" name="newsletter" id="newsletter" placeholder="Enter Your Email"/>
                            <button type="submit" className="newsletter-btn primary-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright align-center px-1">
    <p className="copyright-text">Copyright © 2025 CodeX Hub | All rights reserved.</p>
      </div>
    </footer>
  );
}
