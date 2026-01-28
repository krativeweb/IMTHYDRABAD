"use client";

import Slider from "react-slick";

export default function AccreditationsSection({ images = [] }) {
  if (!images.length) return null;

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
      { breakpoint: 870, settings: { slidesToShow: 2 } },
      { breakpoint: 525, settings: { slidesToShow: 1 } },
    ],
  };

  // ✅ ENV base URL
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <section
      className="ttm-row course-section_1 clearfix"
      id="placements"
      style={{ backgroundColor: "#0f265a" }}
    >
      <div className="container">
        {/* Section Title */}
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
                  Recognized excellence through trusted accreditations and approvals.
                </h5>
              </div>
              <div className="heading-seperator">
                <span />
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Dynamic Slider */}
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-8">
            <Slider {...settings}>
              {images.map((img, index) => {
                const imgUrl = img.startsWith("http")
                  ? img
                  : `${API_URL}${img}`;

                return (
                  <div key={index} className="accreditation-logo p-3">
                    <img
                      src={imgUrl}
                      alt={`Accreditation ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
