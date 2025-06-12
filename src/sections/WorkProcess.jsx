import workProcessImg from "../assets/images/workprocess.png";
import ProcessCard from "../components/ProcessCard";
import processicon1 from "../assets/icons/process-icon1.png";
import processicon2 from "../assets/icons/process-icon2.png";
import processicon3 from "../assets/icons/process-icon3.png";

let processcards = [
  {
    icon: processicon1,
    title: "Strategy Development",
    content:
      "Based on our findings, we develop customized digital marketing strategy tailored objective.",
    linkName: "Learn More",
    linkUrl: "#",
  },
  {
    icon: processicon2,
    title: "Monitoring & Optimization",
    content:
      "We believe in the power of data-driven decision-making. Throughout the campaign,.",
    linkName: "Learn More",
    linkUrl: "#",
  },
  {
    icon: processicon3,
    title: "Continuous Improvement",
    content:
      "Digital marketing is an ever-evolving field, and we're committed to staying ahead of the CodeX Hub curve.",
    linkName: "Learn More",
    linkUrl: "#",
  },
];

export default function WorkProcess() {
  return (
    <section id="work-process">
      <div className="work-process">
        <div className="work-process-outer px-8">
          <div className="container">
            <div className="work-process-inner">
              <div className="work-process-inner-top row gap-6">
                <div className="col-5 work-process-content">
                  <h5 className="about-subheading subheading">Work Process</h5>
                  <h2 className="about-heading">
                    CodeX Hub Your Path
                    <br /> To SEO & Digital <br />{" "}
                    <span className="highlighted-text">Marketing Success</span>
                  </h2>
                  <p className="about-desription">
                    From increasing your website's visibility on search engines
                    to engaging with your audience on social media,
                  </p>
                  <div className="about-btn pt-1">
                    <button className="primary-btn">Learn More</button>
                  </div>
                </div>
                <div className="col-7 work-process-img">
                  <img
                    src={workProcessImg}
                    alt="workProcessImg"
                    className="work-process-img"
                  />
                </div>
              </div>
              <div className="work-process-inner-bottom row gap-3 pt-6">
                {processcards.map((card, index) => (
                  <ProcessCard
                    key={index}
                    className="col-4 align-center"
                    icon={card.icon}
                    title={card.title}
                    content={card.content}
                    linkName={card.linkName}
                    linkUrl={card.linkUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
