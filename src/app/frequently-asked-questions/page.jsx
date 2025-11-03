'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function FAQ() {
  // FAQ data
  const faqs = [
    {
      question: 'The Cost?',
      answer:
        'The partner institution shall not charge any tuition fee. However all other expenses including living expenses, travel, insurance, course material, etc., shall have to be borne by the students.',
      id: 'collapseOne',
      isOpen: true,
    },
    {
      question: 'The Rational',
      answer:
        'Exchange programs will provide an opportunity to study courses that would not be possible to do at home. More over it is a great way to enhance one’s employability, experience new culture, study & work abroad and to network globally.',
      id: 'collapseTwo',
      isOpen: false,
    },
    {
      question: 'Eligibility',
      answer:
        'All full time students of IMT Hyderabad are eligible. A panel of faculty members would shortlist the candidates based on their academic, co-curricular and extra curricular achievements.',
      id: 'collapseThree',
      isOpen: false,
    },
    {
      question: 'Best Time To Go & Duration',
      answer:
        'The best time is after the second semester. Normally the exchange is for a period of one month which can be extended to a maximum of one year subject to approval of IMT Hyderabad and the host institution.',
      id: 'collapseFour',
      isOpen: false,
    },
    {
      question: 'Work Part Time?',
      answer:
        'It depends on the visiting country laws, visa norms, host institution policy and the ability of the students to balance the demands of the course work and the job.',
      id: 'collapseFive',
      isOpen: false,
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
      <style jsx global>{`
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/internationalrelations.webp') !important;
          position: relative;
          background-size: cover !important;
          height: 60vh;
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
        .faculty-tabs .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }
        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107;
          color: #000000;
        }
      `}</style>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Hero Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/internationalrelations.webp')",
            position: 'relative',
            backgroundSize: 'cover',
            height: '60vh',
          }}
        >
          <h2 className="display-5 fw-bold mb-2" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="text-white" data-aos="fade-up" data-aos-delay="100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi illum <br /> facere fuga eaque
            ducimus, praesentium in distinctio
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22, 57, 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Frequently Asked Questions
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <div className="container bg-white p-4 mb-4 rounded-4" data-aos="fade-up">
            <div className="mb-4">
              <h2 className="fw-bold text-center mt-2" style={{ color: '#022D7C' }}>
                FAQ'S
              </h2>
            </div>
            <div className="accordion" id="accordionExample">
              {faqs.map((faq, index) => (
                <div className="accordion-item mt-2" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button bg-warning ${faq.isOpen ? '' : 'collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                      aria-expanded={faq.isOpen ? 'true' : 'false'}
                      aria-controls={faq.id}
                    >
                      <b>{faq.question}</b>
                    </button>
                  </h2>
                  <div
                    id={faq.id}
                    className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}