"use client";

import Slider from "react-slick";

export default function AccreditationsSection() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 870,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 525,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const logos = [
    { src: "/admission/media/aiulogo.png", alt: "AIU Logo" },
    { src: "/admission/media/nba.png", alt: "NBA Logo" },
    { src: "/admission/media/saqas.png", alt: "SAQS Logo" },
  ];

  return (
    <section
      className="ttm-row course-section_1 clearfix"
      id="placements"
      style={{ backgroundColor: "#0f265a" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h2 className="title text-warning">
                  ACCREDITATION &amp; APPROVALS
                </h2>
                <h5
                  className="mt-3 text-uppercase"
                  style={{ color: "#f4a300", letterSpacing: 1 }}
                >
                  Recognized excellence through trusted accreditations and
                  approvals.
                </h5>
              </div>
              <div className="heading-seperator">
                <span />
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-8">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index} className="accreditation-logo p-3">
                  <img src={logo.src} alt={logo.alt} className="img-fluid" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
