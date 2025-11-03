"use client";

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const InternationalAssociations = () => {
  useEffect(() => {
    // Initialize AOS after mount
    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1200,
          once: true,
        });
      }
    };
    initAOS();

    // Ensure Bootstrap is loaded

  }, []);

  return (
    <div className="international-associations-page">
      {/* Note: Replace with <Navbar /> component */}
      {/* <Navbar /> */}

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">International Associations</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, laboriosam.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  International Associations
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* International Associations Section */}
        <section id="international-associations" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title">International Associations</h2>
            </div>

            <div className="row g-4">
              {/* Card: Austria */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050133_FachhochschuleKufsteinTirolUniversityofAppliedSciencesKufstein.jpg"
                    className="card-img-top p-3"
                    alt="Austria"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Austria</h5>
                  </div>
                </div>
              </div>

              {/* Card: China */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="150">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050192_Shanxi-University-Taiyuan.png"
                    className="card-img-top p-3"
                    alt="China"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">China</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Audencia) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050216_AudenciaBusinessSchool-Nantes.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Normandie) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050233_Normandie-Business-School.jpg"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (EM Strasbourg) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050252_EMStrasbourgBusinessSchool-UniversityofStrasbourg.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (ESC Rennes) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050283_ESCRennesSchoolofBusiness.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Grenoble) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050301_Grenoble-Ecole-de-management.jpg"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Burgundy) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050317_Burgundy-School-of-Business.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Kedge) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050334_Groupe-Kedge-Business-School.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Neoma) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050351_Neoma-Business-School.jpg"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (PSB) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050373_PSB-Paris-School-of-Business.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (SKEMA) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050388_SKEMA-Business-School.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Toulouse) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050403_Toulouse-Business-School-Groupe-ESC-Toulouse.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: France (Universite Paris) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050425_Universite-Paris-Dauphine-Paris.png"
                    className="card-img-top p-3"
                    alt="France"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">France</h5>
                  </div>
                </div>
              </div>

              {/* Card: Germany */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="250">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050461_Leipzig-Graduate-School-of-Management.jpg"
                    className="card-img-top p-3"
                    alt="Germany"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Germany</h5>
                  </div>
                </div>
              </div>

              {/* Card: Kazakhstan */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050479_KIMEP-University.png"
                    className="card-img-top p-3"
                    alt="Kazakhstan"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Kazakhstan</h5>
                  </div>
                </div>
              </div>

              {/* Card: Mexico */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="350">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050498_IPADE-Business-School-Mexico-D_F.png"
                    className="card-img-top p-3"
                    alt="Mexico"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Mexico</h5>
                  </div>
                </div>
              </div>

              {/* Card: Morocco (ESCA) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050515_ESCAEcoledeManagement.jpg"
                    className="card-img-top p-3"
                    alt="Morocco"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Morocco</h5>
                  </div>
                </div>
              </div>

              {/* Card: Morocco (HEM) */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050528_HEM-Business-School-Morocco.png"
                    className="card-img-top p-3"
                    alt="Morocco"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Morocco</h5>
                  </div>
                </div>
              </div>

              {/* Card: Poland */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="450">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050543_University-of-Warsaw.png"
                    className="card-img-top p-3"
                    alt="Poland"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Poland</h5>
                  </div>
                </div>
              </div>

              {/* Card: Portugal */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="500">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050561_Nova-School-of-Business-and-Economics-Lisbon.png"
                    className="card-img-top p-3"
                    alt="Portugal"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Portugal</h5>
                  </div>
                </div>
              </div>

              {/* Card: Slovenia */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="550">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050577_University-of-Ljubljana-Faculty-of-Economics.png"
                    className="card-img-top p-3"
                    alt="Slovenia"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Slovenia</h5>
                  </div>
                </div>
              </div>

              {/* Card: Thailand */}
              <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="600">
                <div className="card text-center border-0 shadow-sm h-100 custom-card">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672050597_Facultyof-Business-Administration-Kasetsart-University-Bangkok.jpg"
                    className="card-img-top p-3"
                    alt="Thailand"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Thailand</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Alliances Section */}
        <section className="placement-alliances-section py-4" data-aos="fade-up" data-aos-duration="1000">
          <div className="container text-center">
            <h6 className="subtitle text-warning" data-aos="fade-down" data-aos-delay="100">
              Our Clients
            </h6>
            <h2 className="section-title mb-4" data-aos="zoom-in" data-aos-delay="200">
              Our Distinguished Clients
            </h2>
            <p className="mb-5" data-aos="fade-up" data-aos-delay="300">
              We are proud to be associated with top companies.
            </p>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              spaceBetween={20}
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
              }}
              className="placement-swiper"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <SwiperSlide>
                <div className="swiper-item">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051319_r14.png"
                    alt="Google"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051331_r39.png"
                    alt="Microsoft"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051345_r12.png"
                    alt="Amazon"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051576_r1.png"
                    alt="Infosys"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-item">
                  <img
                    src="https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051590_r36.png"
                    alt="TCS"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Contact & Links Strip */}
        <section className="contact-links-section py-3">
          <div
            className="container d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div data-aos="fade-up" data-aos-delay="200">
              <Link href="/directions.pdf" target="_blank" className="text-warning text-decoration-none fw-bold">
                Directions
              </Link>
            </div>
            <div className="vr d-none d-md-block"></div>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link href="/fact-sheet.pdf" target="_blank" className="text-warning text-decoration-none me-3 fw-bold">
                Fact Sheet
              </Link>
            </div>
            <div className="vr d-none d-md-block"></div>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link href="/application-form.pdf" target="_blank" className="text-warning text-decoration-none me-3 fw-bold">
                Application Form
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* Note: Replace with <Footer /> component */}
      {/* <Footer /> */}

      <style jsx>{`
        .international-associations-page {
          width: 100%;
        }

        .faculty-section {
          width: 100%;
        }

        /* Hero Banner */
        .faculty-hero {
          background: url('./media/banners/internationalrelations.webp') no-repeat center center;
          background-size: cover;
          height: 60vh;
          position: relative;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 150px;
        }

        /* Breadcrumb */
        .breadcrumb {
          background-color: rgb(22, 57, 119);
        }

        /* Section Styles */
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #08317a;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .section-title::after {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #ffc107;
        }

        /* Card Styles */
        .custom-card {
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          background: #f8f9fa;
          border: none;
          border-radius: 1.5rem;
        }

        .custom-card:hover {
          background-color: #ffc107;
          border: 1px solid #03255f;
          transform: translateY(-5px);
        }

        .card-img-top {
          height: 150px;
          object-fit: contain;
        }

        /* Placement Alliances */
        .placement-alliances-section .subtitle {
          color: #ffc107;
        }

        .swiper-item {
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }

        .swiper-item:hover {
          transform: translateY(-5px);
        }

        .swiper-item img {
          max-height: 80px;
          object-fit: contain;
        }

        /* Swiper Navigation */
        .placement-swiper .swiper-button-next,
        .placement-swiper .swiper-button-prev {
          color: #08317a;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placement-swiper .swiper-button-next:after,
        .placement-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        /* Contact Links Section */
        .contact-links-section {
          background-color: rgb(21, 30, 84);
          color: white;
        }

        /* Social Icons (unused but included) */
        .social-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          background: #ffc107;
          color: #ffffff;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background: #5390d9;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Tabs (unused but included) */
        .faculty-tabs .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }

        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000 !important;
        }

        .nav-pills .nav-link {
          border-radius: 30px;
          background-color: #e9ecef;
          color: #333;
        }

        .nav-pills .nav-link.active,
        .nav-pills .show > .nav-link {
          border-radius: 50rem !important;
          background: #ffc107 !important;
          color: #333 !important;
          transition: all 0.3s !important;
        }

        .small-placeholder::placeholder {
          font-size: 0.85rem;
        }

        /* Media Queries */
        @media (max-width: 767px) {
          .section-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InternationalAssociations;