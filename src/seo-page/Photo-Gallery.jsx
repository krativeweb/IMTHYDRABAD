"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";

export default function PhotoGallerySection() {
  const [pageData, setPageData] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------------
     FETCH BANNER + TEXT (CMS)
  ------------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(`${API_URL}/api/mandatory/slug/photo-gallery`);
        const json = await res.json();
        setPageData(json);
        setTimeout(() => {
          if (window.AOS) {
            window.AOS.refresh();
          }
        }, 300);
      } catch (err) {
        console.error("Failed to fetch page data:", err);
      }
    };

    fetchPage();
  }, [API_URL]);

  /* ------------------------------------
     FETCH PHOTO GALLERY IMAGES
  ------------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    const fetchGallery = async () => {
      try {
        const res = await fetch(`${API_URL}/api/photo-gallery`);
        const json = await res.json();
        const activeItems = (json.data || []).filter((i) => !i.isDel);
        setGalleryItems(activeItems);
      } catch (err) {
        console.error("Failed to fetch gallery images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [API_URL]);

  /* ------------------------------------
     INIT AOS (ONCE)
  ------------------------------------ */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out",
      });
    });
  }, []);

  /* ------------------------------------
     REFRESH AOS AFTER DATA LOAD (CRITICAL)
  ------------------------------------ */
  useEffect(() => {
    if (galleryItems.length > 0) {
      import("aos").then((AOS) => {
        AOS.refreshHard();
      });
    }
  }, [galleryItems]);

  /* ------------------------------------
     LOADER
  ------------------------------------ */
  if (loading || !pageData || !pageData.banner_image) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-warning bg-opacity-10">
        <div className="text-center">
          <div
            className="spinner-border text-warning mb-3"
            style={{ width: "3rem", height: "3rem" }}
          />
          <h6 className="fw-bold text-warning">Loading Photo Gallery...</h6>
        </div>
      </div>
    );
  }

  const { page_title, banner_image, banner_text } = pageData;

  return (
    <>
      {/* ================= HERO (NO AOS HERE) ================= */}
      <div
        className="faculty-hero text-center text-white py-5"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${API_URL}${banner_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(banner_text),
          }}
        />
      </div>

      {/* ================= BREADCRUMB ================= */}
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
                {page_title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <InternationalAssociationStickyBtns />

      {/* ================= PHOTO GALLERY ================= */}
      <section>
        <div className="container gallery-container p-4 mb-5">
          <h2 className="fw-bold text-center mt-3" style={{ color: "#022D7C" }}>
            PHOTO GALLERY
          </h2>

          <div className="row mt-4">
            {galleryItems.map((item, index) => (
              <div
                key={item._id}
                className="col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card h-100">
                  <img
                    src={`${API_URL}/${item.image}`}
                    className="card-img-top"
                    alt="Gallery"
                  />
                  <div
                    className="card-body"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
 
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

