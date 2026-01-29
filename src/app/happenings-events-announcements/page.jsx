"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HappeningsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [happenings, setHappenings] = useState([]);
  // Handle external scripts in useEffect

  function decodeHTMLEntities(str) {
    if (!str) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }
  useEffect(() => {
    let isMounted = true; // Prevent state update after unmount

    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/events`
        );

        if (isMounted && Array.isArray(data)) {
          // Filter out deleted or invalid events
          const filtered = data.filter((e) => e.is_del === 0);

          // Sort by latest date first
          const sorted = filtered.sort(
            (a, b) => new Date(b.event_date) - new Date(a.event_date)
          );

          setEvents(sorted);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    const fetchAnnouncements = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/announcements`
        );

        if (isMounted && Array.isArray(data)) {
          // Filter valid announcements
          const valid = data.filter((item) => item.is_del === 0);

          // Sort by latest event_date first
          const sorted = valid.sort(
            (a, b) => new Date(b.event_date) - new Date(a.event_date)
          );

          setAnnouncements(sorted);
        }
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError("Failed to load announcements. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    const fetchHappenings = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/happiness`
        );
        const data = await res.json();
        setHappenings(data.filter((item) => item.is_del === 0));
      } catch (err) {
        console.error("Failed to fetch happenings:", err);
      }
    };

    fetchEvents();
    fetchAnnouncements();
    fetchHappenings();
    return () => {
      isMounted = false;
    };
  }, []);
  function decodeHTMLEntities(str) {
    if (!str) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  return (
    <>
      {/* Inline Styles */}
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

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url(/media/banners/aboutus.webp)",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center !important",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">
            Happenings Events & Announcements
          </h2>
          <p className="text-white">
            A campus always alive with ideas and initiatives.
            <br />
            From new appointments to dynamic events, our community thrives on
            engagement, inspiration, and progress.
          </p>
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-md-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Happenings Events & Announcements
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Tab Content */}
        <section>
          <div className="container mb-4 mt-4">
            <div
              className="tab-pane fade show active bg-white p-4 rounded-4 text-black"
              id="tab-out"
              role="tabpanel"
            >
              <div className="row">
                {/* Vertical Tabs */}
                <div className="col-12 col-md-3 mb-3">
                  <div
                    className="nav flex-md-row nav-pills scrollable-columns"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    {happenings.map((item, idx) => (
                      <Link
                        key={item.id}
                        className={`nav-link rounded mt-2 text-black ${
                          idx === 0 ? "active bg-light" : "bg-light"
                        }`}
                        id={`v-pills-std${idx + 1}-tab`}
                        data-bs-toggle="pill"
                        href={`#v-pills-std${idx + 1}`}
                        role="tab"
                      >
                        {item.title.length > 50
                          ? item.title.slice(0, 50) + "..."
                          : item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="col-12 col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    {happenings.map((item, idx) => (
                      <div
                        key={item.id}
                        className={`tab-pane fade ${
                          idx === 0 ? "show active" : ""
                        }`}
                        id={`v-pills-std${idx + 1}`}
                      >
                        {/* Title Row */}
                        <div className="row mb-3">
                          <div className="col-12">
                            <h4
                              className="fw-bold mt-2 mb-2"
                              style={{ color: "#08317a" }}
                            >
                              {item.title}
                            </h4>
                          </div>
                        </div>

                        {/* Images Row (only if available) */}
                        <div className="row mb-4">
                          {[
                            item.team_image,
                            item.team_image_two,
                            item.team_image_three,
                            item.team_image_four,
                          ]
                            .filter(Boolean)
                            .map((img, i) => (
                              <div key={i} className="col-12 col-md-6 mb-3">
                                <img
                                  src={img}
                                  alt={item.title}
                                  className="img-fluid rounded shadow-sm w-100"
                                />
                              </div>
                            ))}
                        </div>

                        {/* Description Row */}
                        <div className="row mb-5">
                          <div className="col-12">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: (item.description),
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-4">
          <div className="container">
            <h2
              className="section-title text-start"
              style={{ color: "#08317a" }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Events
            </h2>
            <hr />
            <div
              className="px-4"
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <div className="row g-4 mt-4">
                {events.map((event, index) => {
                  const dateObj = new Date(event.event_date);
                  const day = dateObj.getDate().toString().padStart(2, "0");
                  const month = dateObj.toLocaleString("en-US", {
                    month: "short",
                  });
                  const year = dateObj.getFullYear();

                  return (
                    <div className="col-12 col-md-6" key={event.id || index}>
                      <div className="card shadow-sm border-0 h-100">
                        <div className="card-body d-flex">
                          <div
                            className="date-box bg-warning text-white text-center rounded me-3 px-3 py-2"
                            style={{ minWidth: "80px" }}
                          >
                            <div className="fw-bold fs-4">{day}</div>
                            <div className="text-uppercase small">{month}</div>
                            <div className="small">{year}</div>
                          </div>
                          <div>
                            <Link
                              href="#"
                              className="text-dark fw-semibold text-decoration-none"
                            >
                              {event.title || "Untitled Event"}
                            </Link>
                            <br />
                            <small className="text-muted">
                              {event.time ? `${event.time} · ` : ""}
                              {event.location || "IMT Hyderabad"}
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

        {/* Announcements Section */}
        <section className="announcements-section py-4 mt-4">
          <div className="container">
            <div className="section-header text-start">
              <h2
                className="section-title mb-4 text-start"
                style={{ color: "#08317a" }}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Announcements
              </h2>
              <p>Stay updated with the latest news and important updates</p>
            </div>

            <hr className="mb-5" />

            <div className="row g-4">
              {/* --- First Row: Two Horizontal Cards --- */}
              {announcements.slice(0, 2).map((item) => (
                <div key={item.id} className="col-md-6">
                  <div className="card border-warning border shadow-sm announcement-featured d-flex flex-md-row align-items-center h-100">
                    <div className="card-body">
                      <h5 className="card-title text-dark fw-bold">
                        {decodeHTMLEntities(item.title)}
                      </h5>
                      <p className="card-text text-muted">
                        {decodeHTMLEntities(item.description)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* --- Second Row Onward: Vertical Cards --- */}
              {announcements.slice(2).map((item) => (
                <div key={item.id} className="col-md-4">
                  <div className="card h-100 border border-warning shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title text-dark fw-bold">
                        {decodeHTMLEntities(item.title)}
                      </h6>
                      <p className="card-text small text-muted">
                        {decodeHTMLEntities(item.description)}
                      </p>
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
};

export default HappeningsPage;
