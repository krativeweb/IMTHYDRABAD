// src/components/AboutSection.


export default function AboutSection() {
  return (
    <section className="about-section py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-content pe-lg-5" data-aos="fade-right" data-aos-duration="1000">
              <h6 className="text-warning">About Us</h6>
              <h2>Shaping Future Leaders Through Holistic Education</h2>
              <p style={{ textAlign: "justify" }}>
                Institute of Management Technology, Hyderabad (IMT Hyderabad) is a residential management institute established in 2011...
              </p>
              <p style={{ textAlign: "justify" }}>
                The institute offers rigorous and innovative 2-year PGDM programs...
              </p>
              <Link href="about-imt-hyderabad" className="btn btn-primary rounded-pill border border-dark mt-3" data-aos="zoom-in" data-aos-delay="300">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="about-img position-relative" data-aos="fade-left" data-aos-duration="1000">
              <img src="/media/img/a.webp" alt="About Us" className="img-fluid shadow-lg rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}