"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  // Media query hook to detect mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 870;

  const testimonials = [
    {
      name: "Anchal Dugar",
      img: "/admission/testimonial/Aanchaldugar.jpg",
      text: `With a corporate background at Deloitte, I chose IMT Hyderabad to strengthen my expertise at the intersection of business and technology. The curriculum, industry exposure, and collaborative culture have given me clarity and confidence to pursue impactful opportunities in the tech-business space.`,
    },
    {
      name: "Abhishek Kumar",
      img: "/admission/testimonial/abishekkumar.jpg",
      text: `Choosing IMT Hyderabad has been rewarding, with a curriculum that fosters growth both academically and beyond. Through active involvement in committees, I’ve contributed to events, sponsorships, and guiding new students, integrating my diverse academic background into real-world challenges.`,
    },
    {
      name: "Kashish Javed",
      img: "/admission/testimonial/kashishjaved.jpg",
      text: `IMT Hyderabad has been a transformative journey, offering opportunities for growth, collaboration, and learning. From leading social media initiatives to exploring management's human side, it has shaped me both personally and professionally.`,
    },
    {
      name: "Priyanshu Naugariya",
      img: "/admission/testimonial/priyanshu.jpg",
      text: `Choosing Logistics and Supply Chain Management at IMT Hyderabad was transformative. The combination of industry-relevant knowledge, practical exposure through internships, and leadership development made my experience both academically and personally enriching.`,
    },
  ];

  return (
    <section className="ttm-row testimonial-section_2 clearfix">
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h2 className="title">Student Testimonials</h2>
                <h5 className="mt-3">
                  Hear from our students about their transformative journeys.
                </h5>
              </div>
              <div className="heading-seperator">
                <span></span>
              </div>
            </div>
            {/* section title end */}
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div
            className="flex"
            style={{
              gap: "30px",
              // Responsive slides visible
              ...(isMobile
                ? { marginLeft: "calc((100% - (100vw - 40px)) / 2)" } // rough centering on mobile
                : {}),
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="ttm-box-col-wrapper"
                style={{
                  flex: isMobile ? "0 0 100%" : "0 0 calc(33.333% - 20px)",
                  minWidth: 0,
                }}
              >
                <div
                  className="testimonials ttm-testimonial-box-view-style2"
                  style={{ height: "100%" }}
                >
                  <div className="testimonial-content border">
                    <div className="testimonial-avatar">
                      <div className="testimonial-img">
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="testimonial-caption">
                      <h5>{t.name}</h5>
                    </div>
                    <blockquote className="italic text-gray-700">
                      {t.text}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
