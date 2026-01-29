"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function EventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="text-center py-4">
        <span className="spinner-border text-warning" role="status"></span>{" "}
        <span>Loading events...</span>
      </div>
    );

  if (error)
    return <div className="text-center text-danger py-4">{error}</div>;

  return (
    <section className="py-2">
      <div className="container">
        <h2
          className="section-title text-start py-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Events
        </h2>
        <hr />

        <div className="row g-4 mt-4">
          {events.slice(0, 4).map((event) => {
            const dateObj = new Date(event.event_date);
            const date = dateObj.getDate().toString().padStart(2, "0");
            const month = dateObj.toLocaleString("en-US", { month: "short" });
            const year = dateObj.getFullYear();
            const time = new Date(`1970-01-01T${event.event_time}`).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div key={event.id} className="col-md-6">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body d-flex">
                    <div className="date-box bg-warning text-white text-center rounded me-3 px-3 py-2">
                      <div className="fw-bold fs-4">{date}</div>
                      <div className="text-uppercase small">{month}</div>
                      <div className="small">{year}</div>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="text-dark fw-semibold text-decoration-none"
                      >
                        {event.title}
                      </Link>
                      <br />
                      <small className="text-muted">
                        {time} · {event.event_place}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <Link
            href="/happenings-events-announcements"
            className="btn btn-warning px-4 rounded-pill border-dark"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
