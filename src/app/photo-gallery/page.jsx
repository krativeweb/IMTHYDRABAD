"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";

export default function PhotoGallerySection() {
  const [galleryItems, setGalleryItems] = useState([]);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery`);
        const data = await res.json();
        // Filter out deleted items
        const activeItems = data.filter((item) => item.is_del === 0);
        setGalleryItems(activeItems);
      } catch (err) {
        console.error("Failed to fetch gallery data:", err);
      }
    };

    fetchGallery();

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
      {/* Top Banner */}
     <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
        <h2 className="display-5 fw-bold mb-2">Photo Gallery</h2>
        <p className="text-white">
          Capturing moments of learning, leadership, and life. <br />
          Our gallery reflects the vibrancy, energy, and achievements of our academic journey.
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
<InternationalAssociationStickyBtns/>
      {/* Photo Gallery */}
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
          {[...Array(Math.ceil(galleryItems.length / 3))].map((_, rowIndex) => (
            <div key={rowIndex} className="row mt-5 px-5 mx-5">
              {galleryItems
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((item) => (
                  <div key={item.id} className="col-md-4 mb-3">
                    <div className="card h-100">
                      <img
                        src={item.gallery_image}
                        className="card-img-top"
                        alt={item.title}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <b>{item.title}</b>
                        </p>
                        <p className="card-text">{item.place}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>

      {/* Styles */}
   <style
  dangerouslySetInnerHTML={{
    __html: `
      .faculty-hero {
        background: url("/media/banners/photogallery.webp") center/cover no-repeat;
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
      .card {
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
      }
      .card-body {
        padding: 1rem;
      }
      .card-img-top {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        min-height: 226px;
      }
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
      .gallery-container {
        background: #fff;
        border-radius: 1rem;
        padding: 1.5rem;
      }
      @media (max-width: 580px) {
        .px-5.mx-5 {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
          margin-left: 0.5rem !important;
          margin-right: 0.5rem !important;
        }
      }
    `,
  }}
/>

    </>
  );
}
