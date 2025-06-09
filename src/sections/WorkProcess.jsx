import workProcessImg from "../assets/images/workprocess.png"

export default function WorkProcess() {
  return (
    <section>
      <div className="work-process">
        <div className="work-process-outer">
          <div className="container">
            <div className="work-process-inner row gap-6">
                <div className="col-5 work-process-content">
                     <h5 className="about-subheading subheading">Work Process</h5>
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
                <div className="col-7 work-process-img">
                    <img src={workProcessImg} alt="workProcessImg" className="work-process-img" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
