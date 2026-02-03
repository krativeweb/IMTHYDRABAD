"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function MediaSection() {
  const [banner, setBanner] = useState(null);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ===============================
     FETCH CMS DATA
  =============================== */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mediaRes, roomRes] = await Promise.all([
          fetch(`${API}/api/media`).then((r) => r.json()),
          fetch(`${API}/api/media-room`).then((r) => r.json()),
        ]);

        setBanner(mediaRes?.[0]);
        setTabs(
          roomRes.data
            .filter((t) => !t.isDeleted)
            .sort((a, b) => b.year - a.year)
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ===============================
     AOS + TAB COLOR
  =============================== */
useEffect(() => {
  if (typeof window !== "undefined") {
 
    import("aos").then((AOS) => AOS.init({ once: true }));

    const navTabs = document.querySelectorAll("#mediaTabs .nav-link");

    const handler = (e) => {
      // 1️⃣ Reset ALL tabs
      navTabs.forEach((t) => {
        t.classList.remove("custom-active-bg");
        t.classList.remove("text-white");
        t.classList.add("bg-warning", "text-black");
      });

      // 2️⃣ Activate CURRENT tab
      e.target.classList.remove("bg-warning", "text-black");
      e.target.classList.add("custom-active-bg", "text-white");
    };

    navTabs.forEach((tab) => {
      tab.addEventListener("shown.bs.tab", handler);
    });

    // Cleanup
    return () => {
      navTabs.forEach((tab) => {
        tab.removeEventListener("shown.bs.tab", handler);
      });
    };
  }
}, [tabs]);


  if (loading) return <Loader fullScreen />;

  /* ===============================
     RENDER
  =============================== */
  return (
    <>
      <section className="faculty-section">
        {/* HERO */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{ backgroundImage: `url(${API}${banner?.banner_image})` }}
        >
          <div dangerouslySetInnerHTML={{ __html: banner?.banner_text }} />
        </div>

        {/* BREADCRUMB */}
        <div className="breadcrumb p-4" style={{ backgroundColor: "#163977" }}>
          <ol className="breadcrumb bg-transparent p-0 m-0 container-fluid">
            <li className="breadcrumb-item">
              <Link href="/" className="text-white fw-bold">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active text-warning fw-bold">
              {banner?.page_title}
            </li>
          </ol>
        </div>

        <div className="container my-4">
          <h1 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            {banner?.page_title}
          </h1>

          {/* ================= TABS ================= */}
          <ul
            className="nav mb-4 flex-wrap justify-content-center gap-3"
            id="mediaTabs"
          >
            {tabs.map((tab, i) => (
              <li className="nav-item" key={tab._id}>
                <a
                  href={`#tab-${tab.year}`}
                  data-bs-toggle="pill"
                  className={`nav-link rounded-pill ${
                    i === 0
                      ? "active custom-active-bg"
                      : "bg-warning text-black"
                  }`}
                >
                  MEDIA ROOM {tab.year}
                </a>
              </li>
            ))}
          </ul>

          {/* ================= TAB CONTENT ================= */}
          <div className="tab-content">
            {tabs.map((tab, i) => (
              <div
                key={tab._id}
                className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                id={`tab-${tab.year}`}
                dangerouslySetInnerHTML={{
                  __html: tab.content
                    .replace(/<div class="tab-pane[^>]*>/, "")
                    .replace(/<\/div>\s*$/, ""),
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-active-bg {
          background-color: #022d7c !important;
          color: white !important;
        }

        .faculty-hero {
          background: url("/media/banners/media.webp");
          position: relative;
          background-size: cover;
          height: 60vh;
            background-position: center !important;
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
    </>
  );
}
