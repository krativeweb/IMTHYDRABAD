"use client";

import Link from "next/link";
import Image from "next/image";
export default function CentreSustainabilityCSR() {
  return (
    <>
      {/* ===== Banner Section ===== */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url(./media/banners/researcharchive.webp)",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">
            Centre For Sustainability & CSR
          </h2>
          <p className="text-white">
            Committed to business with a conscience. <br />
            Our Centre for Sustainability and CSR integrates responsible
            management and social innovation into education and research.
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    href="/"
                    style={{ textDecoration: "none" }}
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Centre For Sustainability & CSR
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container mb-4 mt-5">
          <h2
            className="section-title text-center mb-3"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Centre For Sustainability & CSR
          </h2>

          <div
            className="tab-pane fade show active bg-white p-4 rounded-4 text-black"
            id="tab-sus"
            role="tabpanel"
          >
            {/* Nav Tabs */}
            <nav className="nav nav-pills flex-wrap gap-2 mb-4 justify-content-center mt-4">
              <button
                className="nav-link bg-light text-dark rounded-pill tab active"
                data-bs-toggle="pill"
                data-bs-target="#sub-res-susabt"
                type="button"
                role="tab"
              >
                About
              </button>
              <button
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                data-bs-target="#sub-res-suspep"
                type="button"
                role="tab"
              >
                People
              </button>
              <button
                className="nav-link bg-light text-dark rounded-pill tab"
                data-bs-toggle="pill"
                data-bs-target="#sub-res-susne"
                type="button"
                role="tab"
              >
                News & Events
              </button>
            </nav>

            <div className="tab-content container-sm text-black mb-4">
              {/* === About Tab === */}
              <div
                className="tab-pane fade show active"
                id="sub-res-susabt"
                role="tabpanel"
              >
                <p>
                  Excellence, innovation and responsible leadership have always
                  remained basic tenets guiding all the processes at IMT
                  Hyderabad. In line with the vision of nurturing socially
                  responsible leaders, the mission of IMT Hyderabad is
                </p>

                <ul>
                  <li>To promote academic excellence</li>
                  <li>
                    To enhance industry readiness through learner centric
                    pedagogy and industry inspired curriculum
                  </li>
                  <li>To instill social conscientiousness</li>
                </ul>

                <p>
                  IMT Hyderabad aims to continuously leverage opportunities in
                  creating awareness and sense of responsibility among the
                  students so that the future leaders are prepared to make
                  meaningful contributions to the society.
                </p>
                <p>
                  The Centre for Sustainability and CSR at IMT Hyderabad
                  provides a collaborative eco-system for researchers,
                  practitioners, students, inter-governmental organizations,
                  governments organizations, non-government organizations,
                  social incubators, and other stakeholders, to create a
                  sustainable future.
                </p>
                <p>
                  Continuing the works of Millennium Development Goals (MDGs) to
                  save the planet and improve the quality of life for its
                  population, in 2015 the United Nations (UN) and its member
                  states committed to achieve 17 Sustainable Development Goals
                  (SDGs) by 2030 (
                  <Link href="https://sdgs.un.org/goals" target="_blank">
                    https://sdgs.un.org/goals
                  </Link>
                  ). UN also realizes the importance of partnership among
                  educational institutions, local communities, governments, and
                  corporate organizations to achieve the ambitious SDGs by 2030
                  (
                  <Link
                    href="https://sdgs.un.org/topics/multi-stakeholder-partnerships-and-voluntary-commitments"
                    target="_blank"
                  >
                    https://sdgs.un.org/topics/multi-stakeholder-partnerships-and-voluntary-commitments
                  </Link>
                  ).
                </p>

                <div className="centre_award text-center mt-5">
                  <Image
                    src="/media/center-csr/csr.png"
                    alt="CSR"
                    width={800}
                    height={450}
                    className="img-fluid rounded-4"
                  />
                  <p className="mt-3">
                    Source:{" "}
                    <Link
                      href="https://www.un.org/sustainabledevelopment/blog/2015/12/sustainable-development-goals-kick-off-with-start-of-new-year/"
                      target="_blank"
                    >
                      https://www.un.org/sustainabledevelopment/blog/2015/12/sustainable-development-goals-kick-off-with-start-of-new-year/
                    </Link>
                  </p>
                </div>

                <h4 style={{ color: "#08317a" }} className="mt-4">
                  <b>Objective of the Centre for Sustainability and CSR</b>
                </h4>
                <ul>
                  <li>
                    The Centre for Sustainability and CSR aims to provide
                    thought leadership through action research projects and
                    round table discussions in order to promote CSR and
                    sustainability initiatives of the collaborating partners and
                    community as a whole.
                  </li>
                </ul>

                <h4 style={{ color: "#08317a" }} className="mt-4">
                  <b>Activities of the Centre for Sustainability and CSR</b>
                </h4>
                <ul>
                  <li>
                    Entering into agreements/MoUs with organisations engaged in
                    Sustainability and CSR for promoting collaboration.
                  </li>
                  <li>
                    Encouraging people-centric research, studies and innovative
                    initiatives by practitioners and scholars for the benefit of
                    all stakeholders, especially industry and academics.
                  </li>
                  <li>
                    Conducting training and capacity building programs for
                    corporates on Sustainability and CSR.
                  </li>
                  <li>
                    Conducting seminars, conferences and workshops on
                    sustainability and CSR for wider advocacy of the concepts
                    and upgrading the knowledge and competence for successful
                    strategic implementation practices.
                  </li>
                  <li>
                    Funding long-term research studies undertaken by IMT Hyderabad
                    faculty. Providing advisory support and capacity building
                    help to NGOs and other organisations engaged in providing
                    sustainable development solutions.
                  </li>
                  <li>
                    Extending help to corporates and other organizations in
                    formulation of their sustainability and CSR policies and
                    their strategic implementation.
                  </li>
                  <li>
                    Organizing knowledge exchange programs/visits with reputed
                    International bodies, agencies and institutes to keep
                    abreast with the global best policies and practices in the
                    domain of sustainability and CSR.
                  </li>
                </ul>
              </div>

              {/* === People Tab === */}
              <div
                className="tab-pane fade"
                id="sub-res-suspep"
                role="tabpanel"
              >
                {/* === Advisory Council === */}
                <div className="row mb-4">
                  <h5
                    className="text-center fw-bold fs-3 mb-4"
                    style={{ color: "#163977" }}
                  >
                    ADVISORY COUNCIL
                  </h5>

                  {[
                    {
                      name: "Shri Ashok K. Pavadia",
                      img: "/media/center-csr/1.webp",
                      title1: "Founder & Director",
                      title2: "Council for Research on Policy and Governance",
                      title3: "Lead expert and Mentor",
                      link: "https://www.imthyderabad.edu.in/assets/images/admissions/AKP_profile.pdf",
                    },
                    {
                      name: "Shri S.K. Joshi",
                      img: "/media/center-csr/2.webp",
                      title1: "IAS (retired), Former Chief Secretary",
                      title2: "Govt of Telangana",
                      link: "https://www.imthyderabad.edu.in/assets/images/faculty/pdf/skj.pdf",
                    },
                    {
                      name: "Shri S. Shoury Reddy",
                      img: "/media/center-csr/3.webp",
                      title1: "Executive Director",
                      title2: "BalaVikasa",
                      link: "https://www.imthyderabad.edu.in/assets/images/admissions/srprofile.pdf",
                    },
                    {
                      name: "Dr. Sriharsha Reddy",
                      img: "/media/center-csr/4.webp",
                      title1: "Dean (New Initiatives) & Professor",
                      title2: "IMT Hyderabad",
                      link: "/faculties",
                    },
                  ].map((m, i) => (
                    <div className="col-12 col-md-6 mb-4" key={i}>
                      <div className="card h-100 p-4">
                        <div className="row g-0">
                          <div className="col-md-5">
                            <Image
                              src={m.img}
                              alt={m.name}
                              className="img-fluid rounded-start"
                              width={300}
                              height={224}
                              style={{ height: "14rem", objectFit: "cover" }}
                            />
                          </div>
                          <div className="col-md-7">
                            <div className="card-body">
                              <p className="fw-bold fs-4">{m.name}</p>
                              <p>{m.title1}</p>
                              <p>{m.title2}</p>
                              {m.title3 && <p>{m.title3}</p>}
                              <Link
                                href={m.link}
                                className="btn bg-warning text-white px-3 py-2 rounded-4"
                                target="_blank"
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* === Affiliated Faculty & Practitioners === */}
                <div className="row mb-4 mt-5">
                  <h5
                    className="text-center fw-bold fs-3 mb-4"
                    style={{ color: "#163977" }}
                  >
                    AFFILIATED FACULTY & PRACTITIONERS
                  </h5>

                  {[
                    {
                      name: "Dr. Sourabh Bhattacharya",
                      img: "/media/center-csr/5.webp",
                      title1: "Chairperson, Centre for Sustainability and CSR",
                      title2: "Operational Management",
                    },
                    // {
                    //   name: "Dr. Tulika Sharma",
                    //   img: "/media/center-csr/6.webp",
                    //   title1: "Assistant Professor",
                    //   title2: "General Management",
                    // },
                    {
                      name: "Dr. Kalyan C Chejarla",
                      img: "/media/center-csr/7.webp",
                      title1: "Assistant Professor",
                      title2: "Operational Management",
                    },
                    {
                      name: "Prof. Pushpesh Pant",
                      img: "/media/center-csr/8.webp",
                      title1: "Assistant Professor",
                      title2: "Operational Management",
                    },
                    {
                      name: "Mr. Vijay Kumar Machcha",
                      img: "/media/center-csr/9.webp",
                      title1: "Sustainability and CSR Professional",
                      title2: "Startup Mentor and Guide",
                    },
                    {
                      name: "Prof Irfan Ahmed Shah",
                      img: "/media/faculties/7.webp",
                      title1: "Assistant Professor & Area Chairperson",
                      title2: " Economics & Public Policy",
                    },
                  ].map((m, i) => (
                    <div className="col-12 col-md-6 mb-4" key={i}>
                      <div className="card h-100 p-4">
                        <div className="row g-0">
                          <div className="col-md-5">
                            <Image
                              src={m.img}
                              alt={m.name}
                              className="img-fluid rounded-start"
                              width={300}
                              height={224}
                              style={{ height: "14rem", objectFit: "cover" }}
                            />
                          </div>
                          <div className="col-md-7">
                            <div className="card-body">
                              <p className="fw-bold fs-4">{m.name}</p>
                              <p>{m.title1}</p>
                              <p>{m.title2}</p>
                              <Link
                                href="/faculties"
                                className="btn bg-warning text-white px-3 py-2 rounded-4"
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* === News & Events Tab === */}
              <div className="tab-pane fade" id="sub-res-susne" role="tabpanel">
                <p>
                  IMT Hyderabad held an inauguration ceremony to launch the
                  Centre for Sustainability and CSR on 7th August 2021. The
                  session began with an inaugural address by Prof. (Dr.) Tulika
                  Sharma, Chairperson - Centre for Sustainability & CSR. The
                  event presided under Shri Ashok K Pavadia, Founder & Director,
                  Council for Research on Policy & Governance and Lead Expert &
                  Mentor, Centre for Sustainability and CSR, Shri Shoury Reddy,
                  Advisor, Centre for Sustainability & CSR and Executive
                  Director, BVIC, Shri Atul Sobti, Director General, SCOPE, and
                  Shri Dr. S.K. Joshi, Advisor, Centre for Sustainability & CSR
                  and Former Chief Secretary, Govt. of Telangana. They discussed
                  their views on sustainability and how CSR aims to achieve and
                  maintain social well-being, environmental and ecological
                  preservation.
                </p>
                <p>
                  The event also witnessed a brief address by Prof. (Dr.)
                  Sriharsha Reddy, Director Designate, IMT Hyderabad, shared his
                  vision of the centre contributing to nurturing socially
                  responsible leaders. The event concluded with Prof. (Dr)
                  Rambalak Yadav proposing a vote of thanks to all the
                  dignitaries for their valuable time and suggestions in the
                  domain of sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PRESERVE ALL ORIGINAL CSS === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Makes ANY active tab (main or sub) turn yellow (bg-warning) */
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }

      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("./media/hero.webp");
        position: relative;
        background-size: cover;
        height: 50vh;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 150px;
      }

      /* Card styling */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image glow & hover effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      /* Social icons */
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
        background: #5390d9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      /* Tabs */
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
        /* Fix long links overflow */
a,
a:visited {
  word-break: break-word;
  overflow-wrap: anywhere;
}

    `,
        }}
      />
    </>
  );
}
