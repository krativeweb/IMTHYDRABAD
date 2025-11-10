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
  const [activeTab, setActiveTab] = useState(0);
  // Handle external scripts in useEffect
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
      <style jsx global>{`
   /* Smooth scrollbar */
  .sticky-top > div > div {
    scrollbar-width: thin;
    scrollbar-color: #ffc107 #f1f3f5;
  }
  .sticky-top > div > div::-webkit-scrollbar {
    width: 6px;
  }
  .sticky-top > div > div::-webkit-scrollbar-track {
    background: #f1f3f5;
    border-radius: 10px;
  }
  .sticky-top > div > div::-webkit-scrollbar-thumb {
    background: #ffc107;
    border-radius: 10px;
  }

  /* Hover effects */
  .hover-bg-gray:hover {
    background-color: #e9ecef !important;
  }

  .transition-all {
    transition: all 0.3s ease;
  }

  /* Mobile: Remove sticky */
  @media (max-width: 992px) {
    .sticky-top {
      position: static !important;
      top: auto !important;
      max-height: none !important;
    }
    .sticky-top > div {
      height: auto !important;
    }
  }

  /* Active tab glow */
  .nav-link.active {
    transform: translateX(4px);
    box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3) !important;
  }

        /* Gradient banner with subtle overlay */
        .faculty-hero {
          background: url("/media/banners/aboutus.webp");
          position: relative;
          background-size: cover;
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
          height: 80vh; /* adjust height as you wish */
          overflow: hidden;
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
      `}</style>

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
          }}
        >
          <h2 className="display-5 fw-bold mb-2">
            Happenings Events & Announcements
          </h2>
          <p className="text-white">
  A campus always alive with ideas and initiatives.<br/>
From new appointments to dynamic events, our community thrives on engagement, inspiration, and progress.
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
  <section className="py-5 bg-light">
  <div className="container">
    <div className="row g-4">
      {/* LEFT: Vertical Tabs (Scrollable + Sticky on Large Screens) */}
      <div className="col-12 col-lg-4">
        <div className="sticky-top" style={{ top: '2rem', maxHeight: 'calc(100vh - 4rem)', overflow: 'hidden' }}>
          <div className="bg-white rounded-4 shadow-sm p-4 h-100" style={{ overflowY: 'auto' }}>
            <h5 className="fw-bold text-primary mb-4">Recent Happenings</h5>
            <div className="nav nav-pills flex-column gap-2">
              {happenings.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`nav-link text-start rounded-3 px-4 py-3 transition-all text-truncate ${
                    activeTab === idx
                      ? "active bg-warning text-dark fw-semibold shadow-sm"
                      : "bg-light text-secondary hover-bg-gray"
                  }`}
                  style={{ 
                    fontSize: '0.95rem',
                    minHeight: '56px',
                    border: 'none'
                  }}
                >
                  <small className="d-block text-muted mb-1">
                    {item.event_date && new Date(item.event_date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </small>
                  {item.title.length > 45
                    ? item.title.slice(0, 45) + "..."
                    : item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Content Area */}
      <div className="col-12 col-lg-8">
        <div className="bg-white rounded-4 shadow p-5">
          {happenings.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted fs-4">No happenings available.</p>
            </div>
          ) : (
            <div className="animate__animated animate__fadeIn">
              {/* Title */}
              <h3 className="fw-bold text-primary mb-4">
                {happenings[activeTab]?.title}
              </h3>

              {/* Date Badge */}
              {happenings[activeTab]?.event_date && (
                <span className="badge bg-warning text-dark fs-6 px-3 py-2 mb-4">
                  {new Date(happenings[activeTab].event_date).toLocaleDateString('en-IN', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}

              {/* Image + Description */}
              <div className="row align-items-start g-5 mt-3">
                <div className="col-12 col-xl-5">
                  <img
                    src={happenings[activeTab]?.team_image || "/media/placeholder.jpg"}
                    alt={happenings[activeTab]?.title}
                    className="img-fluid rounded-4 shadow-lg w-100"
                    style={{ 
                      maxHeight: '400px', 
                      objectFit: 'cover',
                      border: '4px solid #fff'
                    }}
                    onError={(e) => e.target.src = "/media/placeholder.jpg"}
                  />
                </div>
                <div className="col-12 col-xl-7">
                  <div 
                    className="fs-5 text-dark lh-lg"
                    dangerouslySetInnerHTML={{ 
                      __html: decodeHTMLEntities(happenings[activeTab]?.description || "") 
                    }}
                  />
                </div>
              </div>
            </div>
          )}
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
                              href={`/events/${event.id}`}
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
