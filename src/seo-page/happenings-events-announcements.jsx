"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader";

const HappeningsPage = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [happenings, setHappenings] = useState([]);
  const [seo, setSeo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    let isMounted = true;

    const fetchSeo = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/happenings-seo`
        );
        const data = await res.json();
        if (isMounted) setSeo(data);
      } catch (err) {
        console.error("SEO fetch failed", err);
      }
    };

const fetchEvents = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events`
    );

    const result = res.data;

    if (isMounted && result?.success && Array.isArray(result.data)) {
      setEvents(
        result.data
          .filter((e) => e.isDeleted === false)
          .sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
      );
    }
  } catch (err) {
    console.error("Events fetch failed", err);
    setError("Failed to load events");
  }
};


const fetchAnnouncements = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/announcements`
    );

    const result = res.data;

    if (isMounted && result?.success && Array.isArray(result.data)) {
      setAnnouncements(
        result.data
          .filter((a) => a.isDeleted === false)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  } catch (err) {
    console.error("Announcements fetch failed", err);
    setError("Failed to load announcements");
  }
};


    const fetchHappenings = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/happenings`
        );
        const result = await res.json();
        if (isMounted && result?.success && Array.isArray(result.data)) {
          setHappenings(result.data.filter((item) => item.isDeleted === false));
        }
      } catch (err) {
        console.error("Happenings fetch failed", err);
      }
    };

    const loadAll = async () => {
      await Promise.all([
        fetchSeo(),
        fetchEvents(),
        fetchAnnouncements(),
        fetchHappenings(),
      ]);
      if (isMounted) setLoading(false);
    };

    loadAll();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading || !seo) return <Loader fullScreen />;

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <section className="faculty-section">
        {/* Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/${seo.banner_image})`,
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: seo.banner_text }} />
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-md-4"
          style={{ backgroundColor: "rgb(22,57,119)" }}
        >
          <div className="container-fluid">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white fw-bold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-warning fw-bold">
                {seo.page_title}
              </li>
            </ol>
          </div>
        </div>

        {/* Happenings Tabs */}

        <div className="container my-4">
          <div className="bg-white p-4 rounded-4 text-black">
            <div className="row">
              {/* Tabs */}
              <div className="col-12 col-md-3 mb-3">
                <div className="nav nav-pills scrollable-columns">
                  {happenings.map((item, idx) => (
                    <Link
                      key={item._id}
                      className={`nav-link rounded mt-2 text-black ${
                        idx === 0 ? "active bg-light" : "bg-light"
                      }`}
                      data-bs-toggle="pill"
                      href={`#tab-${idx}`}
                    >
                      {item.title.length > 50
                        ? item.title.slice(0, 50) + "..."
                        : item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="col-12 col-md-9">
                <div className="tab-content">
                  {happenings.map((item, idx) => (
                    <div
                      key={item._id}
                      id={`tab-${idx}`}
                      className={`tab-pane fade ${
                        idx === 0 ? "show active" : ""
                      }`}
                    >
                      <h4 className="fw-bold mb-3" style={{ color: "#08317a" }}>
                        {item.title}
                      </h4>

                      {/* Images */}
                      <div className="row mb-4">
                        {(item.images || []).map((img, i) => (
                          <div key={i} className="col-12 col-md-6 mb-3">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`}
                              alt={item.title}
                              className="img-fluid rounded shadow-sm w-100"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <section className="py-4">
          <div className="container">
            <h2 style={{ color: "#08317a" }}>Events</h2>
            <hr />

            <div
              className="px-4"
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <div className="row g-4">
                {events.map((event, i) => {
                  const d = new Date(event.event_date);
                  const day = d.getDate().toString().padStart(2, "0");
                  const month = d.toLocaleString("en-US", { month: "short" });
                  const year = d.getFullYear();

                  return (
                    <div key={event._id || i} className="col-md-6">
                      <div className="card shadow-sm h-100">
                        <div className="card-body d-flex">
                          {/* Date Box */}
                          <div className="date-box bg-warning text-white rounded me-3">
                            <div className="fw-bold fs-4">{day}</div>
                            <div className="small text-uppercase">{month}</div>
                            <div className="small">{year}</div>
                          </div>

                          {/* Event Info */}
                          <div>
                            <strong>{event.event_title}</strong>
                            <br />
                            <small className="text-muted">
                              {event.event_place || "IMT Hyderabad"}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="py-4">
          <div className="container">
            <h2 style={{ color: "#08317a" }}>Announcements</h2>
            <hr />

            <div className="row g-4">
              {announcements.map((item) => (
                <div key={item._id} className="col-md-4">
                  <div className="card h-100 border-warning shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title text-dark fw-bold">
                        {item.title}
                      </h6>

                      <div
                        
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Makes ANY active tab (main or sub) turn yellow (bg-warning) */
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }

      .scrollable-columns {
        max-height: 400px;
        overflow-y: auto;
        column-count: 2;
        column-gap: 1rem;
        padding-right: 10px;
      }

      /* For screens wider than 1300px */
      @media (min-width: 1300px) {
        .scrollable-columns {
          max-height: 580px;
        }
      }

      .scrollable-columns .nav-link {
        display: inline-block;
        width: 100%;
        margin-bottom: 0.5rem;
      }

      .date-box {
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("/media/banners/aboutus.webp");
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
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390d9;
        color: #ffffffff;
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
        color: #000000ff;
      }

      /* Limit height for the full tab area */
      .tab-pane.fade.show.active.bg-white.p-4.rounded-4.text-black {
height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
      }

      /* Left side (tabs) */
      .col-md-3.mb-3 {
        max-height: 80vh;
        overflow-y: auto;
        padding-right: 8px;
        border-right: 2px solid #eee;
      }

      /* Right side (content) */
      .col-md-9 {
        max-height: 80vh;
        overflow-y: auto;
        padding-left: 10px;
      }

      /* Optional: nice scrollbar */
      .col-md-3.mb-3::-webkit-scrollbar,
      .col-md-9::-webkit-scrollbar {
        width: 6px;
      }
      .col-md-3.mb-3::-webkit-scrollbar-thumb,
      .col-md-9::-webkit-scrollbar-thumb {
        background: #bbb;
        border-radius: 10px;
      }
      @media (max-width: 767.98px) {
  .tab-pane.fade.show.active.bg-white.p-4.rounded-4.text-black {
    height: 90vh !important;
    overflow-y: auto !important;
    overflow-x: hidden;
  }
}
    `,
        }}
      />
    </>
  );
};

export default HappeningsPage;
