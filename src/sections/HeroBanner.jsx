import heroGirl from "../assets/images/hero-girl.png";
import heroGirlBg from "../assets/images/hero-girl-bg.png";
import element1 from "../assets/icons/elements1.png";
import soundIcon from "../assets/icons/sound-icon.png";
import lightIcon from "../assets/icons/light-icon.png";

export default function HeroBanner() {
  return (
    <section>
      <div className="hero-banner">
        <div className="hero-banner-outer">
            <img className="circle-element up-down" src={element1} alt="" />
          <div className="container">
            <div className="hero-banner-inner row">
              <div className="hero-banner-left col-6">
                <div className="hero-banner-content">
                    <h5 className="hero-banner-subheading subheading">Top #1 SEO & Marketing Agency</h5>
                    <h1 className="hero-banner-heading">Elevate Your Brand With Expert SEO & <span className="highlighted-text">Digital Marketing</span></h1>
                    <p className="hero-banner-desription">Welcome to CodeX Hub where we specialize in revolutionizing your online presence through expert SEO and digital marketing solutions.</p>
                    <div className="hero-banner-btns row gap-2 pt-1">
                        <button className="primary-btn">Start Ranking Now</button>
                        <button className="outline-btn">Contact Now</button>
                    </div>
                </div>
              </div>
              <div className="hero-banner-right col-6">
                <div className="hero-banner-images">
                    <div className="hero-banner-girl-bg align-center"><img src={heroGirlBg} alt="" /></div>
                    <div className="hero-banner-girl align-center"><img src={heroGirl} alt="" /></div>
                    <div className="hero-banner-floating-icons">
                        <img className="sound-icon up-down" src={soundIcon} alt="" />
                        <img className="light-icon up-down" src={lightIcon} alt="" />
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
