"use client";

import Link from "next/link";

export default function HappeningsSection() {
  return (
    <section
      className="blogs-section py-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <h6
          className="subtitle text-center text-warning"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Know Us More
        </h6>
        <h2
          className="section-title text-center mb-5"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Happenings
        </h2>

        <div className="row g-4">
          {/* Blog Card 1 */}
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="blog-card card h-100 shadow">
              <img
                src="/media/img/shake.webp"
                className="card-img-top"
                style={{ height: "25vh", objectFit: "cover" }}
                alt="Zimbabwe Partnership"
              />
              <div className="card-body">
                <h5 className="card-title">
                  IMT Hyderabad Explores Academic Partnerships with Zimbabwean
                  Universities Following High-Level Meeting at CII Africa Summit
                </h5>
                <p className="card-text">
                  Strengthening global outreach through collaborative
                  opportunities in Africa.
                </p>
                <Link href="#" className="btn btn-primary rounded-pill">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Card 2 & 3 */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row g-4">
              <div
                className="col-12 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="blog-card card h-100 shadow">
                  <img
                    src="/media/flag.webp"
                    className="card-img-top"
                    style={{ height: "20vh", objectFit: "cover" }}
                    alt="Independence Day"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      79th Independence Day Celebrations
                    </h5>
                    <p className="card-text">
                      Patriotic fervor and cultural performances marked the 79th
                      Independence Day on campus.
                    </p>
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="blog-card card h-100 shadow">
                  <img
                    src="/media/img/e.webp"
                    className="card-img-top"
                    style={{ height: "20vh", objectFit: "cover" }}
                    alt="SICI Membership"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      IMT Hyderabad joins Shastri Indo-Canadian Institute (SICI)
                    </h5>
                    <p className="card-text">
                      Promoting Indo-Canadian collaborations in research,
                      academics, and cultural exchange.
                    </p>
                    <Link href="#" className="btn btn-primary rounded-pill">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link
            href="happenings-events-announcements"
            className="btn btn-warning px-4 rounded-pill border-dark"
          >
            View All Happenings
          </Link>
        </div>
      </div>
    </section>
  );
}
