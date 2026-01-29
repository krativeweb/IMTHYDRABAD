"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
const StepDubaiContent = () => {
  useEffect(() => {
    // Initialize AOS only
    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 1200,
          once: true,
          offset: 100,
        });
      }
    };
    initAOS();
  }, []);

  return (
    <div className="step-dubai-content">
      {/* Hero Section */}
      <section className="faculty-section" >
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url('/media/banners/step-dubai.webp') no-repeat center center`,
            backgroundSize: 'cover',
            height: '60vh',
            position: 'relative',
          }}
        >
          <div
            style={{
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 1,
            }}
          />
          <div className="hero-content" style={{ position: 'relative', zIndex: 2, marginTop: '150px' }}>
            <h2 className="display-5 fw-bold mb-2">
              Step at @ IMT Dubai
            </h2>
            <p className="text-white">
             Extending our vision beyond borders. <br />
Through the STEP Dubai program, we connect students with international business environments and global learning opportunities.
            </p>
          </div>
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
                  Short Term Exchange Programs Step at @ IMT Dubai
                </li>
              </ol>
            </nav>
          </div>
        </div>
<InternationalAssociationStickyBtns/>
        {/* Main Content */}
        <section className="py-5">
          <div className="container bg-white p-4 rounded-4 mb-4">
            <div className="mb-4">
              <h2
                className="fw-bold text-center mt-2"
                style={{ color: '#022D7C' }}
                data-aos="fade-up"
              >
                Short Term Exchange Programs Step at @ IMT Dubai
              </h2>
            </div>

            <table className="table table-bordered" data-aos="fade-up" data-aos-delay="100">
              <tbody>
                <tr>
                  <td>For more details STEP @ Dubai</td>
                  <td>
                    <Link
                      href="https://www.imthyderabad.edu.in/assets/images/international-relations/pdf/STEP-Dubai.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary fw-bold"
                    >
                      Click Here
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>

      {/* Scoped Styles */}
    <style
  dangerouslySetInnerHTML={{
    __html: `
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }

      .hero-content {
        position: relative;
        z-index: 2;
      }

      .table {
        border-radius: 0.5rem;
        overflow: hidden;
      }

      .table td {
        vertical-align: middle;
        font-size: 1rem;
      }

      .table a {
        text-decoration: underline;
        transition: color 0.3s;
      }

      .table a:hover {
        color: #ffc107 !important;
      }

      @media (max-width: 768px) {
        .hero-content {
          margin-top: 100px !important;
        }
        .hero-content h2 {
          font-size: 1.8rem;
        }
        .table {
          font-size: 0.9rem;
        }
      }
    `,
  }}
/>

    </div>
  );
};

export default StepDubaiContent;