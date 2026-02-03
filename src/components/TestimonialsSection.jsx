"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  // ✅ API call inside component
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/student-tutorials`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch testimonials");

        const json = await res.json();
        setTestimonials(json?.data || []);
      } catch (err) {
        console.error("Testimonials fetch error:", err);
      }
    }

    fetchTestimonials();
  }, []);

  if (!testimonials.length) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <section className="ttm-row testimonial-section_2 clearfix py-16">
      <div className="container">
        {/* Title */}
        <div className="row mb-10">
          <div className="col-lg-12 text-center">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h2 className="title">Student Testimonials</h2>
                <h5 className="mt-3">
                  Hear from our students about their transformative journeys.
                </h5>
              </div>
              <div className="heading-seperator mx-auto">
                <span />
              </div>
            </div>
          </div>
        </div>

        {/* EMBLA CAROUSEL */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((t, index) => {
              const imageUrl = t.image.startsWith("http")
                ? t.image
                : `${API_URL}${t.image}`;

              return (
                <div key={t._id} className="embla__slide">
                  <div className="px-4">
                    <div className="ttm-box-col-wrapper">
                      <div className="testimonials ttm-testimonial-box-view-style2 h-full">
                        <div className="testimonial-content border rounded-lg shadow-lg bg-white p-8">
                          {/* Avatar */}
                          <div className="testimonial-avatar text-center mb-6">
                            <div className="testimonial-img inline-block">
                              <Image
                                src={imageUrl}
                                alt={t.name}
                                width={80}
                                height={80}
                                className="rounded-full object-cover mx-auto border-4 border-white shadow"
                              />
                            </div>
                          </div>

                          {/* Name */}
                          <div className="testimonial-caption text-center mb-4">
                            <h5 className="font-bold text-lg">{t.name}</h5>
                          </div>

                          {/* Description (CMS HTML) */}
                          <blockquote
                            className="text-gray-600 italic text-center leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: t.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CSS – unchanged */}
        <style jsx global>{`
          .embla {
            overflow: hidden;
            width: 100%;
          }
          .embla__container {
            display: flex;
            touch-action: pan-y pinch-zoom;
          }
          .embla__slide {
            flex: 0 0 100%;
            min-width: 0;
          }

          @media (min-width: 768px) {
            .embla__slide {
              flex: 0 0 33.333%;
            }
          }

          @media (max-width: 767px) {
            .embla__slide > div {
              max-width: 380px;
              margin: 0 auto;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
