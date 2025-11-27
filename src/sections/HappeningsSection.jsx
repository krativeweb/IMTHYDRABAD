"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";


function limitWordsHtml(html, limit) {
  // 1. Sanitize the HTML
  const cleanHtml = DOMPurify.sanitize(html);

  // 2. Decode entities
  const txt = document.createElement("textarea");
  txt.innerHTML = cleanHtml;
  const decoded = txt.value;

  // 3. Limit words
  const words = decoded.split(" ");
  const limitedText = words.length > limit ? words.slice(0, limit).join(" ") + "..." : decoded;

  return limitedText;
}

export default function HappeningsSection() {
  const [happenings, setHappenings] = useState([]);

  useEffect(() => {
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

    fetchHappenings();
  }, []);

  return (
    <section
      className="blogs-section py-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <h6
          className="subtitle text-center text-warning"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Know Us More
        </h6>
        <h2
          className="section-title text-center mb-5"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Happenings
        </h2>

        <div className="row g-4">
          {/* Blog Card 1 */}
          {happenings[0] && (
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="blog-card card h-100 shadow">
                <img
                  src={happenings[0].team_image}
                  className="card-img-top"
                  style={{ height: "25vh", objectFit: "cover" }}
                  alt={happenings[0].title}
                />
                <div className="card-body">
                  <h5 className="card-title">{happenings[0].title}</h5>
             <p
        className="card-text"
        dangerouslySetInnerHTML={{
          __html: limitWordsHtml(happenings[0].description, 30), // limit to 50 words
        }}
      />
                  <Link href="/happenings-events-announcements" className="btn btn-primary rounded-pill">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Blog Card 2 & 3 */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row g-4">
              {happenings.slice(1, 3).map((item, idx) => (
                <div
                  key={item.id}
                  className="col-12 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 100}
                >
                  <div className="blog-card card h-100 shadow">
                    <img
                      src={item.team_image}
                      className="card-img-top"
                      style={{ height: "20vh", objectFit: "cover" }}
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                 <p
        className="card-text"
        dangerouslySetInnerHTML={{ __html: limitWordsHtml(item.description, 30) }}
      />

                      <Link href="/happenings-events-announcements" className="btn btn-primary rounded-pill">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link
            href="/happenings-events-announcements"
            className="btn btn-warning px-4 rounded-pill border-dark"
          >
            View All Happenings
          </Link>
        </div>
      </div>
    </section>
  );
}
