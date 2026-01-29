"use client";

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function PlacementsSection() {
  // Initialize AOS
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  // Owl Carousel options for placement alliances
  const placementCarouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  };

  // Owl Carousel options for student testimonials
  const studentCarouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 2 },
    },
  };

  // Placement alliances data
  const placementAlliances = [
    { src: "/media/placementimg/1.webp", alt: "Logo 1" },
    { src: "/media/placementimg/2.webp", alt: "Logo 2" },
    { src: "/media/placementimg/3.webp", alt: "Logo 3" },
    { src: "/media/placementimg/4.webp", alt: "Logo 4" },
    { src: "/media/placementimg/5.webp", alt: "Logo 5" },
    { src: "/media/placementimg/6.webp", alt: "Logo 6" },
    { src: "/media/placementimg/7.webp", alt: "Logo 7" },
    { src: "/media/placementimg/8.webp", alt: "Logo 8" },
    { src: "/media/placementimg/9.webp", alt: "Logo 9" },
    { src: "/media/placementimg/10.webp", alt: "Logo 10" },
    { src: "/media/placementimg/11.webp", alt: "Logo 11" },
    { src: "/media/placementimg/12.webp", alt: "Logo 12" },
    { src: "/media/placementimg/13.webp", alt: "Logo 13" },
    { src: "/media/placementimg/14.webp", alt: "Logo 14" },
    { src: "/media/placementimg/15.webp", alt: "Logo 15" },
    { src: "/media/placementimg/16.webp", alt: "Logo 16" },
    { src: "/media/placementimg/17.webp", alt: "Logo 17" },
    { src: "/media/placementimg/18.webp", alt: "Logo 18" },
    { src: "/media/placementimg/19.webp", alt: "Logo 19" },
    { src: "/media/placementimg/20.webp", alt: "Logo 20" },
    { src: "/media/placementimg/21.webp", alt: "Logo 21" },
    { src: "/media/placementimg/22.webp", alt: "Logo 22" },
    { src: "/media/placementimg/23.webp", alt: "Logo 23" },
    { src: "/media/placementimg/24.webp", alt: "Logo 24" },
    { src: "/media/placementimg/25.webp", alt: "Logo 25" },
    { src: "/media/placementimg/26.webp", alt: "Logo 26" },
    { src: "/media/placementimg/27.webp", alt: "Logo 27" },
    { src: "/media/placementimg/28.webp", alt: "Logo 28" },
    { src: "/media/placementimg/29.webp", alt: "Logo 29" },
    { src: "/media/placementimg/30.webp", alt: "Logo 30" },
    { src: "/media/placementimg/31.webp", alt: "Logo 31" },
    { src: "/media/placementimg/32.webp", alt: "Logo 32" },
    { src: "/media/placementimg/33.webp", alt: "Logo 33" },
    { src: "/media/placementimg/34.webp", alt: "Logo 34" },
    { src: "/media/placementimg/35.webp", alt: "Logo 35" },
    { src: "/media/placementimg/36.webp", alt: "Logo 36" },
    { src: "/media/placementimg/37.webp", alt: "Logo 37" },
    { src: "/media/placementimg/38.webp", alt: "Logo 38" },
    { src: "/media/placementimg/39.webp", alt: "Logo 39" },
    { src: "/media/placementimg/40.webp", alt: "Logo 40" },
    { src: "/media/placementimg/41.webp", alt: "Logo 41" },
    { src: "/media/placementimg/42.webp", alt: "Logo 42" },
    { src: "/media/placementimg/43.webp", alt: "Logo 43" },
    { src: "/media/placementimg/44.webp", alt: "Logo 44" },
    { src: "/media/placementimg/45.webp", alt: "Logo 45" },
    { src: "/media/placementimg/46.webp", alt: "Logo 46" },
    { src: "/media/placementimg/47.webp", alt: "Logo 47" },
    { src: "/media/placementimg/48.webp", alt: "Logo 48" },
    { src: "/media/placementimg/49.webp", alt: "Logo 49" },
    { src: "/media/placementimg/50.webp", alt: "Logo 50" },
    { src: "/media/placementimg/51.webp", alt: "Logo 51" },
    { src: "/media/placementimg/52.webp", alt: "Logo 52" },
    { src: "/media/placementimg/53.webp", alt: "Logo 53" },
    { src: "/media/placementimg/54.webp", alt: "Logo 54" },
    { src: "/media/placementimg/55.webp", alt: "Logo 55" },
    { src: "/media/placementimg/56.webp", alt: "Logo 56" },
    { src: "/media/placementimg/57.webp", alt: "Logo 57" },
    { src: "/media/placementimg/58.webp", alt: "Logo 58" },
    { src: "/media/placementimg/59.webp", alt: "Logo 59" },
    { src: "/media/placementimg/60.webp", alt: "Logo 60" },
    { src: "/media/placementimg/61.webp", alt: "Logo 61" },
    { src: "/media/placementimg/62.webp", alt: "Logo 62" },
    { src: "/media/placementimg/63.webp", alt: "Logo 63" },
    { src: "/media/placementimg/64.webp", alt: "Logo 64" },
    { src: "/media/placementimg/65.webp", alt: "Logo 65" },
    { src: "/media/placementimg/66.webp", alt: "Logo 66" },
  ];

  // Alumni thoughts data
  const alumniThoughts = [
    { src: "/media/test1.webp", alt: "Google" },
    { src: "/media/test2.webp", alt: "Microsoft" },
    { src: "/media/test1.webp", alt: "Amazon" },
    { src: "/media/test2.webp", alt: "Infosys" },
    { src: "/media/test1.webp", alt: "TCS" },
  ];

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
        background: url('./media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.3);
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 170px;
      }

      .placement-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin: 0 !important;
      }
      .placement-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
      }
      .placement-card img {
        transition: transform 0.3s ease;
      }
      .placement-card:hover img {
        transform: scale(1.02);
      }

      @media (min-width: 1200px) {
        .container-fluid {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
      }
      @media (max-width: 768px) {
        .placement-card {
          max-height: 60vh;
          border-radius: 1rem !important;
        }
        .container-fluid {
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
      }

      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      .social-icon {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #ffc107;
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000000ff;
      }

      .directors-message .message-wrapper {
        background: #fff;
        border-radius: 1.2rem;
        padding: 2rem 2.5rem;
        line-height: 1.8;
      }
      .directors-message h2 {
        font-weight: 700;
        font-size: 1.8rem;
        letter-spacing: -0.5px;
        position: relative;
      }
      .directors-message h2::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 60px;
        height: 3px;
        background: #ffc107;
      }
      .director-img {
        width: 180px;
        height: auto;
        border-radius: 1rem;
        object-fit: cover;
        float: left;
        margin-right: 1.5rem;
        margin-bottom: 0.5rem;
      }
      .director-img:hover {
        filter: brightness(1.05);
        transform: scale(1.02);
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .director-img {
          float: none;
          display: block;
          margin: 0 auto 1.5rem auto;
          width: 150px;
          clip-path: none;
          shape-outside: none;
        }
        .directors-message h2 {
          text-align: center;
          font-size: 1.5rem;
        }
      }

      .owl-carousel .item {
        background: #f8f9fa;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
      }
      .owl-carousel .item:hover {
        transform: translateY(-5px);
      }
      .owl-carousel .item img {
        max-height: 80px;
        object-fit: contain;
      }

      .placement-alliances-section {
        background-color: #151e54;
      }

      .sticky-buttons {
        position: fixed;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .sticky-btn {
        background-color: #ffc107;
        color: #000;
        padding: 10px 16px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 50px 0 0 50px;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }
      .sticky-btn:hover {
        background-color: #0f2d61;
        color: #fff;
      }
      @media (max-width: 768px) {
        .sticky-buttons {
          right: 5px;
          gap: 6px;
        }
        .sticky-btn {
          padding: 6px 10px;
          font-size: 10px;
          border-radius: 30px 0 0 30px;
        }
      }
    `,
        }}
      />

      {/* Top Banner */}
      <div
        className="faculty-hero text-center text-white py-5"
        style={{
          background: "url(/media/banners/placementbanner.jpeg)",
          position: "relative",
          backgroundSize: "cover",
          height: "70vh",
        }}
      >
        <h2 className="display-5 fw-bold mb-2">Placements</h2>
        <p className="text-white">
          Empowering careers through excellence and opportunity. <br />
          Our placement ecosystem connects talent with leading organizations,
          ensuring strong outcomes and professional growth for every student.
        </p>
      </div>

      {/* USP Section */}
      <section className="usp-section py-4">
        <div className="container">
          <div className="row text-center justify-content-center">
            {[
              { number: "#1", text: "Private B-School Telangana", delay: 0 },
              { number: "#9", text: "Top 10 in South Indias", delay: 100 },
              { number: "#17", text: "India’s Top 100 B-Schools", delay: 200 },
              {
                number: "#13",
                text: "Private B-Schools by Careers360",
                delay: 300,
              },
              { number: "#72", text: "NIRF India Ranking 2025", delay: 400 },
            ].map((item, index) => (
              <div
                key={index}
                className="col-6 col-md-2 usp-item"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <h2 className="usp-number">{item.number}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="directors-message py-5">
        <div className="container">
          <div className="message-wrapper bg-white shadow-sm rounded-4 p-4 p-md-5 position-relative">
            <h2 className="fw-bold text-dark mb-4 text-center text-md-start">
              Director’s Message
            </h2>
            <img
              src="./media/prof-Islam.webp"
              alt="Prof. (Dr.) K. M. Baharul Islam"
              className="director-img float-md-start me-md-4 mb-3 shadow-sm rounded-3"
            />
            <div className="text-secondary lh-lg">
              <p>
                It is my privilege to invite your esteemed organization to
                participate in IMT Hyderabad’s campus recruitment process for
                the 2024–25 academic year. We take great pride in presenting our
                thirteenth postgraduate batch — a cohort of exceptional young
                professionals poised to make significant contributions in
                today’s dynamic business landscape shaped by Industry 5.0.
              </p>
              <p>
                At IMT Hyderabad, we have cultivated a distinctive “Know-Do-Be”
                educational philosophy that transcends conventional learning.
                Our approach integrates rigorous academic training with
                real-world exposure, developing leaders who combine technical
                expertise with emotional intelligence and social awareness.
              </p>
              <p>
                The curriculum blends Harvard and Ivey case methodologies with
                international immersion experiences, while our community
                initiatives foster responsible leadership. This holistic
                development model produces graduates with sharp analytical
                capabilities, strong interpersonal skills, and the agility to
                navigate complex business challenges.
              </p>
              <p>
                Over the past twelve years, our alumni network has established
                an impressive track record of driving innovation and delivering
                sustainable results across diverse sectors. The current batch
                embodies this legacy while bringing fresh perspectives shaped by
                emerging industry paradigms.
              </p>
              <p>
                We are confident that their unique blend of theoretical
                knowledge, practical orientation, and creative problem-solving
                abilities will add substantial value to your organization.
              </p>
              <p>
                Our dedicated placement team stands ready to customize the
                recruitment process to your specific requirements. We look
                forward to welcoming you to our campus and facilitating
                meaningful connections with these promising future leaders.
              </p>
              <div className="mt-4">
                <p className="fw-bold text-dark mb-0">Warm Regards,</p>
                <p className="fw-bold text-dark mb-0">
                  Prof. (Dr.) K. M. Baharul Islam
                </p>
                <small className="text-muted">Director, IMT Hyderabad</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Alliances Section */}
      <section
        className="placement-alliances-section py-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container text-center">
          <h6
            className="subtitle text-center text-white"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Our Alliances
          </h6>
          <h2
            className="section-title text-warning mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            PLACEMENT ALLIANCES
          </h2>
          <p
            className="mb-5 text-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We are proud to be associated with top companies for student
            placements.
          </p>
          <OwlCarousel className="owl-theme" {...placementCarouselOptions}>
            {placementAlliances.map((item, index) => (
              <div key={index} className="item">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>

      {/* Message from Head of Corporate Relations */}
      <section className="py-5">
        <div className="container">
          <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">
            <div className="position-relative">
              <img
                src="/media/imt-prasanth.webp"
                alt="Mr. Prakash Pathak"
                className="float-md-start me-md-4 mb-3 shadow-sm"
                style={{
                  width: "180px",
                  height: "auto",
                  borderRadius: "1rem",
                  objectFit: "cover",
                   float: "left",
                  marginRight: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              <h2 className="h4 fw-bold text-dark mb-1">
                Message from the Head, Corporate Relations
              </h2>
              <hr className="border-dark opacity-50 w-25 mb-3" />
              <div className="text-dark fs-6 lh-lg mt-3">
                <p>Dear Recruiters,</p>
                <p>
                  I am pleased to invite you for campus placements of our PGDM
                  Class of 2026 students. IMT Hyderabad is a part of the IMT
                  Group and the institute is well known for its quality
                  education and is a preferred destination for students who are
                  seeking management education. With our management education
                  experience of more than four decades, we have been able to
                  provide an edge over our contemporaries, that goes a long way
                  in grooming our students to not only be industry-ready, but
                  also future-ready.
                </p>
                <p>
                  The last year has been affected by many global and domestic
                  events that had an impact on campus placements across all
                  institutes and universities. However, IMT Hyderabad has been
                  able to respond by taking extra measures for our placements.
                  Even this year, recruiters like{" "}
                  <strong>
                    Arcesium, BNY, Micron, HCL, Berkedia, Oracle, PepsiCo,
                    Volvo, Zeta Global, Sony India, Wipro, Infosys, Cognizant,
                    Advance Auto Parts, Voltas, Nerolac, CRISIL, Netelixir
                  </strong>{" "}
                  and many more conducted campus placement process and selected
                  our students, with a <strong>highest CTC of ₹31 LPA</strong>{" "}
                  and an <strong>average CTC of ₹12.2 LPA</strong>.
                </p>
                <p>
                  The batch of 2024–26 is a good mix of students from all
                  backgrounds, and has students from Engineering (18%), Arts &
                  Commerce (47%), Management (18%) and Science (16%). There are
                  students with work experience greater than 2 years (5%), less
                  than 2 years (14%), and freshers (81%). Besides diverse
                  backgrounds, the batch is a good mix of gender diversity with{" "}
                  <strong>34% female students</strong>.
                </p>
                <p>
                  The students specialize in the areas of Marketing, Finance,
                  HR, Operations, IT, Analytics, and General Management. All the
                  students have undergone a 12-week summer internship which
                  gives them a good notion of the market trends. The students
                  contribute substantially and at the same time gain valuable
                  learning during their summer internships.
                </p>
                <p>
                  I extend a warm invite to you to attend our final placement
                  process for the Class of 2026 and look forward to a symbiotic
                  relationship.
                </p>
                <p className="mt-4 mb-0 fw-bold">Warm Regards,</p>
                <p className="mb-0">Prakash Pathak</p>
                <p className="text-muted">Head – Corporate Relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Wise Statistics */}
      <section className="py-3">
        <div className="container">
          <h3 className="section-title text-center mb-4">
            Sector Wise Statistics
          </h3>
          <div className="card placement-card">
            <div className="img-container">
              <img
                src="/media/stats.webp"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Batch Profile PGDM Class 2026 */}
      <section className="py-3">
        <div className="container-fluid">
          <h3 className="section-title text-center mb-4">
            Batch Profile PGDM CLASS 2026
          </h3>
          <div className="row">
            {[
              "/media/stat2.webp",
              "/media/stat3.webp",
              "/media/stat4.webp",
              "/media/stat5.webp",
            ].map((src, index) => (
              <div key={index} className="col-md-3">
                <div className="card placement-card">
                  <div className="img-container">
                    <img src={src} className="img-fluid rounded" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sticky Buttons */}
        <div className="sticky-buttons">
          <a
            href="https://drive.google.com/file/d/1fHoddrt_trxb8hyxATXnJzMkvM3iEPaH/view"
            target="_blank"
            className="sticky-btn"
          >
            Recruiters Handbook
          </a>
          <a
            href="https://drive.google.com/file/d/1jkjfW8OBofArrSCjurKNVK5Vr2YS_KvB/view"
            target="_blank"
            className="sticky-btn"
          >
            Placement Brochure
          </a>
          <a
            href="https://drive.google.com/file/d/1OaObJn3rOucYi5Yib3ojuiLzY42-O4my/view?usp=sharing"
            target="_blank"
            className="sticky-btn"
          >
            Summer Internship
          </a>
        </div>
      </section>

      {/* Alumni Thoughts Section */}
      {/* <section className="placement-alliances-section py-4" data-aos="fade-up" data-aos-duration="1000">
        <div className="container text-center">
          <h6 className="subtitle text-center text-white" data-aos="fade-down" data-aos-delay="100">
            Our Alumni
          </h6>
          <h2 className="section-title text-warning mb-4" data-aos="zoom-in" data-aos-delay="200">
            Thoughts of ALUMNI
          </h2>
          <p className="mb-5 text-white" data-aos="fade-up" data-aos-delay="300">
            We are proud to be associated with top companies for student placements.
          </p>
          <OwlCarousel className="owl-theme" {...studentCarouselOptions}>
            {alumniThoughts.map((item, index) => (
              <div key={index} className="itemo">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section> */}
    </>
  );
}
