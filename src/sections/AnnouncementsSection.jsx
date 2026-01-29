"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

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

    fetchAnnouncements();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="text-center py-4">
        <span className="spinner-border text-warning" role="status"></span>{" "}
        Loading announcements...
      </div>
    );

  if (error)
    return <div className="text-center text-danger py-4">{error}</div>;

  return (
    <section className="announcements-section py-4">
      <div className="container">
        <div className="section-header text-start">
          <h2
            className="section-title mb-4 text-start"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Announcements
          </h2>
          <p>Stay updated with the latest news and important updates</p>
        </div>
        <hr className="mb-5" />

  <div className="row g-4">
  {/* First two big cards */}
  {announcements.slice(0, 2).map((item,index) => (
    <div key={item.id} className="col-md-6">
      <div className="card border-0 shadow-sm d-flex flex-md-row align-items-center h-100">
        <div className="card-body">
          <h5
            className="card-title text-dark fw-bold"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          <p
            className="card-text text-muted"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          <Link
            href={index === 0 ? "/admissions/pgdm" : "/happenings-events-announcements"}
            className="btn btn-warning border-dark rounded-pill"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  ))}

  {/* Remaining cards (any number) */}
  {announcements.slice(2,5).map((item) => (
    <div key={item.id} className="col-md-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body">
          <h6
            className="card-title text-dark fw-bold"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          <p
            className="card-text small text-muted"
            dangerouslySetInnerHTML={{
              __html:
                item.description.length > 80
                  ? item.description.slice(0, 80) + "..."
                  : item.description,
            }}
          />
          <Link
            href="/happenings-events-announcements"
            className="btn btn-warning border-dark rounded-pill"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className="text-center mt-4">
          <Link
            href="/happenings-events-announcements"
            className="btn btn-warning px-4 rounded-pill border-dark"
          >
            View All Announcements
          </Link>
        </div>
      </div>
    </section>
  );
}
