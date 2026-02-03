"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DistinguishedClientsSection from "@/components/DistinguishedClient";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Loader from "@/components/Loader";

export default function PrivacyPolicySection() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch Privacy Policy
  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/privacy-policy`,
        );
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setPageData(data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch privacy policy", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  // 🔹 AOS Init
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, once: true });
      });
    }
  }, []);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 2000, stopOnInteraction: false })],
  );

  // 🔹 Loader
  if (loading || !pageData) return <Loader fullScreen />;

  return (
    <>
      {/* GTM (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Top Banner */}
      <div
        className="faculty-hero text-center text-white py-5"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${pageData.banner_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: pageData.banner_text }} />
      </div>
      {/* Breadcrumb */}
      <div className="breadcrumb p-4">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white fw-bold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-warning fw-bold">
                {pageData.page_title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <section id="executive-education" className="py-5">
        <div className="container" data-aos="fade-up">
          <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
        </div>
      </section>

      {/* Placement Alliances */}
      <DistinguishedClientsSection emblaRef={emblaRef} />

      {/* Contact Strip (static as requested) */}

      {(pageData.email || pageData.phone) && (
        <section className="contact-strip py-3">
          <h4 className="text-center fw-bold text-warning">Contact Details</h4>

          <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            {pageData.email && (
              <div>
                <strong className="text-warning">Email ID :</strong>
                <Link
                  href={`mailto:${pageData.email}`}
                  className="text-light text-decoration-none ms-1"
                >
                  {pageData.email}
                </Link>
              </div>
            )}

            {pageData.email && pageData.phone && (
              <div className="vr d-none d-md-block"></div>
            )}

            {pageData.phone && (
              <div>
                <strong className="text-warning">Phone :</strong>{" "}
                {pageData.phone.split("/").map((num, i) => (
                  <span key={i}>
                    <Link
                      href={`tel:${num.trim().replace(/\s+/g, "")}`}
                      className="text-light text-decoration-none ms-1"
                    >
                      {num.trim()}
                    </Link>
                    {i < pageData.phone.split("/").length - 1 && " / "}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url("./media/banners/carrier.webp") center/cover no-repeat;
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
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image Glow & Hover Effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      /* Social Icons */
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
        background: #5390D9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      /* Tabs */
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000000ff !important;
      }
      .small-placeholder::placeholder {
        font-size: 0.85rem;
      }
      .nav-pills .nav-link.active,
      .nav-pills .show > .nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: var(--bs-nav-pills-border-radius);
        background-color: #e9ecef;
        border-radius: 30px;
        color: #333;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Privacy Policy Section */
      .section-title {
        color: #08317a;
      }
      #executive-education .card {
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      #executive-education h5 {
        color: #08317a;
      }

      /* Placement Alliances Section */
      .placement-alliances-section .subtitle {
        font-size: 1rem;
        text-transform: uppercase;
      }
      .placement-alliances-section .section-title {
        font-size: 2rem;
        font-weight: bold;
      }
      .owl-carousel .item {
        background: #ffffff;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
      }
      .owl-carousel .item:hover {
        transform: translateY(-5px);
      }
      .owl-carousel .item img {
        max-height: 80px;
        object-fit: contain;
      }
      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }
      .custom-card:hover {
        background-color: #ffc107;
        border: 1px solid #03255f;
        transform: translateY(-5px);
      }

      /* Contact Strip */
      .contact-strip {
        background-color: rgb(21, 30, 84);
        color: white;
      }
                  /* ================= EMBLA CLIENTS ================= */

.embla {
  overflow: hidden;
  width: 100%;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 25%; /* Desktop: 4 */
  padding: 0 8px;
  box-sizing: border-box;
}

.logo-box {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.logo-box:hover {
  transform: translateY(-5px);
}

/* -------- RESPONSIVE -------- */

@media (max-width: 1200px) {
  .embla__slide {
    flex: 0 0 33.333%;
  }
}

@media (max-width: 992px) {
  .embla__slide {
    flex: 0 0 50%;
  }
}

@media (max-width: 768px) {
  .embla__slide {
    flex: 0 0 50%; /* 🔥 same same */
  }
}

@media (max-width: 576px) {
  .embla__slide {
    flex: 0 0 50%; /* 🔥 same same */
  }

  .logo-box {
    height: 120px;
  }
}

    `,
        }}
      />
    </>
  );
}
