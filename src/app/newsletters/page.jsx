"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NewsletterSection() {
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
        background: url("/media/banners/newsletter.webp") center/cover no-repeat;
        position: relative;
        height: 60vh;
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
        background: #5390d9;
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
    `,
  }}
/>


      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-2">News Letter</h2>
          <p className="text-white">
            Led by vision, governed by integrity. <br />
Our Board of Governors ensures strategic direction, sound governance, and academic accountability.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: "rgb(22, 57, 119)" }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  News Letter
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Inline SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol id="icon-doc" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
            <path fill="#fff" d="M13 2v5h5z" />
            <rect x="7" y="10" width="10" height="1.5" fill="#fff" opacity=".85" />
            <rect x="7" y="13" width="10" height="1.5" fill="#fff" opacity=".85" />
            <rect x="7" y="16" width="7" height="1.5" fill="#fff" opacity=".85" />
          </symbol>
        </svg>

        {/* Newsletter Section */}
        <div className="container mt-4">
          <h2 className="text-center fw-bold text-uppercase" style={{ color: "#163977" }}>
            News Letters
          </h2>

          {/* Responsive Grid */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mb-4">
            {[
              { date: "January 2026", url: "https://drive.google.com/file/d/17h-uGjxhla71be2eOqWfbW9m4_S_8d33/view" },
              { date: "April 2025", url: "https://drive.google.com/file/d/1mgo6lvRgquw87G1zUeBQJidX2j4_G7Nf/view" },
              { date: "April 2024", url: "https://drive.google.com/file/d/1wO8OOA6xCymZIsGGZxNhfGWiHFJeywlD/view" },
              { date: "January 2024", url: "https://drive.google.com/file/d/1_pvBJfyZ9R0O6YW-0Euvwf9LL6oFpRNN/view" },
              { date: "September 2023", url: "https://drive.google.com/file/d/1wMJ2P9CwRJ5kokxvQ8_AxwnZNze0vLis/view" },
              { date: "April 2023", url: "https://drive.google.com/file/d/1meVMxZM_BN02sce7dRO4cM2-BjcHJEdt/view" },
              { date: "December 2022", url: "https://drive.google.com/file/d/1btxAcOjo05q0vUzTuWexsdQn3aE5Kw5j/view" },
              { date: "September 2022", url: "https://drive.google.com/file/d/1nzj3NFmDuGpStAn18G335JLdXRO1VQGa/view" },
              { date: "February 2022", url: "https://drive.google.com/file/d/1wC5VoRwI_jjARQf3eFoMb7SDhhqLLYOp/view" },
              { date: "November 2021", url: "https://drive.google.com/file/d/1AQ7UhL09rJLaJ6jFXarsWsfr1rTgpkpm/view" },
              { date: "February 2021", url: "https://drive.google.com/file/d/19EVTmPrZu5TX0Cvs_DPmV33cGKi3Zfy7/view" },
              { date: "October 2020", url: "https://drive.google.com/file/d/1gn_IgZ7RczSRSbB8AbDWGH_Ug4GXDqok/view" },
              { date: "February 2020", url: "https://drive.google.com/file/d/10B40OP8Wkm_-EIB3lc9IX3CBSdWzua2b/view" },
              { date: "October 2019", url: "https://www.imthyderabad.edu.in/assets/images/newsletters/pulse-oct-2019.pdf" },
              { date: "February 2019", url: "https://drive.google.com/file/d/1L2MEBjx6_k41jvP6RCcy83NUjDJUmCjm/view" },
              { date: "December 2018", url: "https://drive.google.com/file/d/1VfsPi5xg7wlwz32HrPo14JNDU0Zm9qGM/view" },
            ].map((newsletter, index) => (
              <div className="col" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center gap-3">
                    <svg
                      width="40"
                      height="40"
                      className="text-secondary flex-shrink-0"
                      role="img"
                      aria-label="Document icon"
                    >
                      <use href="#icon-doc" />
                    </svg>
                    <div className="flex-grow-1">
                      <Link
                        className="fw-bold text-warning stretched-link link-warning text-decoration-none"
                        href={newsletter.url}
                        target="_blank"
                        rel="noopener"
                      >
                        {newsletter.date}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}