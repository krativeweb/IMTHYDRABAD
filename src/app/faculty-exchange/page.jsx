'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";

export default function FacultyExchange() {
  // Faculty exchange data
  const facultyData = [
    {
      id: 'ng',
      name: 'Dr. Nitin Gupta',
      title: 'Professor - Marketing & Chairperson - Branding & PR/Exchange Faculty ICN Business School, France',
      image: '/images/nitin.webp',
      testimonial: `
        “IMT Hyderabad gave me opportunity to go on a semester’s sabbatical from Feb’14 to May’14 at ICN Business School, Nancy, France. During my sabbatical period I was looking for opportunities to teach international students, do joint research with fellow Professors and take few academically enriching projects. This opportunity helped me in fulfilling each of my pre-determined goals. I received full support from IMT Hyderabad in this endeavor of mine. This sabbatical was a great experience for me. It not only enabled me to fulfill various academic tasks which I had planned for, but also proved to be a career enriching experience for me. I am glad that I received this opportunity and thank IMT system for the same”
      `,
    },
    {
      id: 'sb',
      name: 'Dr. Sourabh Bhattacharya',
      title: 'Professor - Operations Management & Chairperson - Internship / Exchange Faculty Normandy Business School, France',
      image: '/images/sourabh.webp',
      testimonial: `
        “My stint as a Visiting Faculty at Normandy Business School, France gave me an enriching experience. The share of services in GDP of France is around 80 percent and 75 percent of the employment in France is in service industry. Therefore, the course that I taught, “Value Chain in Service Organization”, was extremely important for the participants. Participants in this course came from a diverse background of geography, age and work experience. The participants came from countries such as UK, Germany, Spain, China, France, Algeria with an average age of 28 years and an average experience of 4 years. As an instructor it was a completely new experience for me to deal with such diverse group of students. I learnt that apart from subject related competencies it is the communication skill of the instructor that plays a vital role in bringing effective delivery. As an instructor, I had to work on my choice of vocabulary, tone, pitch and pace of speech to deliver the desired content. I found the students to be extremely committed and honest to their work. I believe that teaching in such environments develops an instructor in a holistic and comprehensive way. It makes an instructor more confident, flexible and the one with a global outlook.”
      `,
    },
    {
      id: 'ch',
      name: 'Dr. Chakrapani',
      title: 'Professor & Area Chairperson - Finance & Accounting / Exchange Faculty BIT-RAS Alkhaima Campus, UAE',
      image: '/images/chakrapani.webp',
      testimonial: `
        Dr. Chakrapani have taken Finance Seminar classes on Investments, Financial Modeling and Private Equity for the students of BIT-Ras Alkhaima Campus, UAE for their MBA and Executive MBA Program in the year 2012.
      `,
    },
  ];

  // Initialize AOS
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/Group 3.jpg') !important;
          position: relative;
          background-size: cover !important;
          height: 60vh;
            background-position: center !important;
        }
        .faculty-hero::before {
          content: '';
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
          color: #ffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Tabs */
        .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }
        .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000 !important;
        }
    `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/Group 3.jpg')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
              backgroundPosition: "center !important"
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Faculty Exchange
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Capturing moments of learning, leadership, and life. <br />
            Our gallery reflects the vibrancy, energy, and achievements of our
            academic journey.
          </p>
        </div>
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    href="/"
                    className="text-white fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Faculty Exchange
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <InternationalAssociationStickyBtns />
        {/* Faculty Exchange Tabs */}
        <section>
          <nav
            className="nav nav-pills justify-content-center flex-wrap gap-2 mt-5 mb-5"
            data-aos="zoom-in"
          >
            {facultyData.map((faculty) => (
              <Link
                key={faculty.id}
                className={`nav-link rounded-pill bg-white text-black ${
                  faculty.id === "ng" ? "active" : ""
                }`}
                data-bs-toggle="tab"
                href={`#tab-${faculty.id}`}
                role="tab"
                aria-controls={`tab-${faculty.id}`}
                aria-selected={faculty.id === "ng"}
              >
                {faculty.name}
              </Link>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="tab-content container mt-4">
            {facultyData.map((faculty, index) => (
              <div
                key={faculty.id}
                className={`tab-pane fade ${
                  faculty.id === "ng" ? "show active" : ""
                } bg-white p-4 rounded-4 text-black mb-4`}
                id={`tab-${faculty.id}`}
                role="tabpanel"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        className="img-fluid rounded-start p-3 faculty-img"
                        width={300}
                        height={300}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5
                          className="card-title fw-bold"
                          style={{ color: "#08317a" }}
                        >
                          {faculty.title}
                        </h5>
                        <br />
                        <p className="card-text">{faculty.testimonial}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}