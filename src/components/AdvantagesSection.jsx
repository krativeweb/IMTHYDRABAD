import React from "react";



export default function AdvantagesSection() {
  return (

    
    <section
      className="ttm-row introduction-section_1 py-5"
      id="about"
      style={{ background: "#f8f9fa" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title title-style-center_text mb-5">
          <div className="title-header">
            <h2 className="title">Advantage of IMT Hyderabad</h2>
            <h5 className="mt-3">
              Innovate • Create • Transform • Dominate
            </h5>
          </div>
          <div className="heading-seperator text-center">
            <span />
          </div>
        </div>
        {/* Horizontal Boxes */}
        <div className="row g-4 mt-4">
          {/* Item 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="adv-box h-100 p-4 text-center border rounded-4 shadow-sm">
              <div className="mb-3">
                <i className="flaticon-school-6 fs-1 text-warning" />
              </div>
              <h4 className="fw-bold mb-2">Hyderabad Pharma City (HPC)</h4>
              <p className="mb-0">
                World’s largest integrated cluster, recognized as a National
                Investment and Manufacturing Zone (NIMZ) by the Government of
                India.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="adv-box h-100 p-4 text-center border rounded-4 shadow-sm">
              <div className="mb-3">
                <i className="flaticon-school-6 fs-1 text-warning" />
              </div>
              <h4 className="fw-bold mb-2">Healthcare Hub</h4>
              <p className="mb-0">
                Major healthcare hub offering quality service, affordability,
                local connections, direct flights, rich culture, and diverse
                cuisine.
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="adv-box h-100 p-4 text-center border rounded-4 shadow-sm">
              <div className="mb-3">
                <i className="flaticon-school-6 fs-1 text-warning" />
              </div>
              <h4 className="fw-bold mb-2">Startup &amp; Innovation Hub</h4>
              <p className="mb-0">
                One of India’s most popular startup hubs, supported by
                IIT-Hyderabad, T-Hub, IIIT-H, and a thriving environment for
                innovation.
              </p>
            </div>
          </div>
          {/* Item 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="adv-box h-100 p-4 text-center border rounded-4 shadow-sm">
              <div className="mb-3">
                <i className="flaticon-school-6 fs-1 text-warning" />
              </div>
              <h4 className="fw-bold mb-2">IT Hub</h4>
              <p className="mb-0">
                India’s premier IT and IT-enabled services hub and a center for
                scientific and technological development in IT and
                pharmaceuticals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
