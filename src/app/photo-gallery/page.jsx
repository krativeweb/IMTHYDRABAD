"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function PhotoGallerySection() {
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

  // Gallery data
  const galleryItems = [
    { src: "/images/pg1.webp", title: "Neoma Business School (Reims Campus)", subtitle: "France" },
    { src: "/images/pg2.webp", title: "Neoma Business School (Reims Campus)", subtitle: "France" },
    { src: "/images/pg3.webp", title: "Prof. (Dr.) Nitin Gupta", subtitle: "at ICN Business School, France 2015" },
    { src: "/images/pg4.webp", title: "Portland State University", subtitle: "USA 2013, @ Students" },
    { src: "/images/pg5.webp", title: "Prof. (Dr.) P. Stevenraj", subtitle: "at University of Haifa -Israel" },
    { src: "/images/pg6.webp", title: "Audencia Business School", subtitle: "France" },
    { src: "/images/pg7.webp", title: "Exchange students", subtitle: "at IMT Hyderabad" },
    { src: "/images/pg8.webp", title: "University of Warsaw", subtitle: "Poland" },
    { src: "/images/pg9.webp", title: "ESC Rennes School of Business", subtitle: "France" },
    { src: "/images/pg10.webp", title: "ESC Rennes School of Business", subtitle: "Poland" },
    { src: "/images/pg11.webp", title: "Korea University", subtitle: "Korea" },
    { src: "/images/pg12.webp", title: "University of San Diego", subtitle: "USA" },
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
      <style jsx global>{`
        /* Faculty Hero */
        .faculty-hero {
          background: url("/media/banners/photogallery.webp") center/cover
            no-repeat;
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

        /* Card Styling */
        .card {
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 18rem;
        }
        .card-body {
          padding: 1rem;
        }
        .card-img-top {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        /* Breadcrumb */
        .breadcrumb {
          background-color: rgb(22, 57, 119);
        }

        /* Container */
        .gallery-container {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
        }
        .card-img-top {
          min-height: 226px;
        }
        @media (max-width: 580px) {
          .px-5.mx-5 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            margin-left: 0.5rem !important;
            margin-right: 0.5rem !important;
          }
        }
      `}</style>

      {/* Top Banner */}
      <div
        className="faculty-hero text-center text-white py-5"
        data-aos="fade-up"
      >
        <h2 className="display-5 fw-bold mb-2">Photo Gallery</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          animi illum
          <br /> facere fuga eaque ducimus, praesentium in distinctio
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb p-4">
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
                Photo Gallery
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <section>
        <div
          className="container gallery-container p-4 mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <h2
              className="fw-bold text-center mt-3"
              style={{ color: "#022D7C" }}
            >
              PHOTO GALLERY
            </h2>
          </div>

          {/* Gallery Rows */}
          {[0, 3, 6, 9].map((startIndex) => (
            <div key={startIndex} className="row mt-5 px-5 mx-5">
              {galleryItems
                .slice(startIndex, startIndex + 3)
                .map((item, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="card h-100">
                      <img
                        src={item.src}
                        className="card-img-top"
                        alt={item.title}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <b>{item.title}</b>
                        </p>
                        <p className="card-text">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
