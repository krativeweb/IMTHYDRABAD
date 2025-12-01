"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

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
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* EMBLA CAROUSEL - WORKS ON MOBILE */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((t, index) => (
              <div key={index} className="embla__slide">
                <div className="px-4">
                  <div className="ttm-box-col-wrapper">
                    <div className="testimonials ttm-testimonial-box-view-style2 h-full">
                      <div className="testimonial-content border rounded-lg shadow-lg bg-white p-8">
                        <div className="testimonial-avatar text-center mb-6">
                          <div className="testimonial-img inline-block">
                            <Image
                              src={t.img}
                              alt={t.name}
                              width={80}
                              height={80}
                              className="rounded-full object-cover mx-auto border-4 border-white shadow"
                            />
                          </div>
                        </div>
                        <div className="testimonial-caption text-center mb-4">
                          <h5 className="font-bold text-lg">{t.name}</h5>
                        </div>
                        <blockquote className="text-gray-600 italic text-center leading-relaxed">
                          "{t.text}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CRITICAL: This CSS fixes blank mobile issue */}
        <style jsx global>{`
          .embla {
            overflow: hidden;
            width: 100%;
          }
          .embla__container {
            display: flex;
            touch-action: pan-y pinch-zoom; /* fixes mobile swipe */
          }
          .embla__slide {
            flex: 0 0 100%;
            min-width: 0;
          }

          /* Desktop: Show 3 cards */
          @media (min-width: 768px) {
            .embla__slide {
              flex: 0 0 33.333%;
            }
          }

          /* Mobile: Center the card */
          @media (max-width: 767px) {
            .embla__container {
              justify-content: flex-start;
            }
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
