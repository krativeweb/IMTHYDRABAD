// app/tenders/page.jsx
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function TendersPage() {
  // Initialize AOS (optional, safe)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/programs.webp')",
            position: 'relative',
            backgroundSize: 'cover',
            height: '60vh',
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Tenders</h2>
          <p className="text-white">
           Committed to transparent and responsible procurement. <br />
Our tender processes reflect fairness, accountability, and adherence to institutional and regulatory standards.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22, 57, 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Tenders
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ===== PROCUREMENT CARD ===== */}
        <section className="model py-5">
  <div className="container">
    <div className="card p-4 shadow-lg border-0" data-aos="fade-up">
      <h2 className="text-center mb-4 fw-bold" style={{ color: '#08317a' }}>
        Procurement
      </h2>      {/* New Item */}
      <p>
        Tender Notice – Construction of WTP Water Storage Tank
      </p>
      <p>
        <a
          href="https://imtindia-my.sharepoint.com/:b:/g/personal/webadmin_imthyderabad_edu_in/IQAuGMbDeDEiTJYk1EUppDIkAWM83jb0BJzmFgf6Dz6DitM?e=3VEcgc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn rounded-pill btn-warning">
            <strong>Click here to view</strong>
          </button>
        </a>
      </p>


      <hr />
      {/* Existing Item */}
      <p>
        Consultant Engineering firm Required ( Contract Based for yearly basis)
      </p>
      <p>
        <a
          href="https://drive.google.com/file/d/1Dv7HlbeeUDIOZTaKf8bESuu0CYWw6H5U/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn rounded-pill btn-warning">
            <strong>Click here to view</strong>
          </button>
        </a>
      </p>


    </div>
  </div>
</section>

        {/* ===== ALL STYLES (Preserved 1:1) ===== */}
       <style
  dangerouslySetInnerHTML={{
    __html: `
      .model .card {
        background-color: #f9f9f9;
        border-radius: 15px;
      }

      .model ul {
        list-style-type: disc;
        margin-left: 20px;
        padding-left: 20px;
      }

      .model ul li {
        margin-bottom: 8px;
        line-height: 1.6;
      }

      /* Hero Section */
      .faculty-hero {
        background: url('/media/hero.webp') center/cover no-repeat;
        position: relative;
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

      /* Nav Pills */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 5px;
        transition: all 0.3s;
        padding: 10px 20px;
        font-size: 1rem;
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000;
      }
    `,
  }}
/>

      </section>
    </>
  );
}
