"use client";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000 })]
  );

  const testimonials = [
    {
      name: "Anchal Dugar",
      img: "/admission/testimonial/Aanchaldugar.jpg",
      text: `With a corporate background at Deloitte, I chose IMT Hyderabad to strengthen my expertise...`,
    },
    {
      name: "Abhishek Kumar",
      img: "/admission/testimonial/abishekkumar.jpg",
      text: `Choosing IMT Hyderabad has been rewarding, with a curriculum that fosters growth...`,
    },
    {
      name: "Kashish Javed",
      img: "/admission/testimonial/kashishjaved.jpg",
      text: `IMT Hyderabad has been a transformative journey, offering opportunities for growth...`,
    },
    {
      name: "Priyanshu Naugariya",
      img: "/admission/testimonial/priyanshu.jpg",
      text: `Choosing Logistics and Supply Chain Management at IMT Hyderabad was transformative...`,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Student Testimonials</h2>
          <h5 className="mt-4 text-lg text-gray-600">
            Hear from our students about their transformative journeys.
          </h5>
          <div className="mt-6">
            <span className="block w-24 h-1 bg-orange-500 mx-auto"></span>
          </div>
        </div>

        {/* Embla Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] px-3 
                md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="border rounded-lg shadow-lg bg-white p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-block rounded-full overflow-hidden border-4 border-orange-500">
                      <img
                        width="100"
                        height="100"
                        className="rounded-full object-cover"
                        src={t.img}
                        alt={t.name}
                      />
                    </div>
                  </div>
                  <h5 className="text-xl font-semibold text-gray-900 text-center mb-4">
                    {t.name}
                  </h5>
                  <blockquote className="text-gray-700 text-base leading-relaxed flex-1 text-center">
                    “{t.text}”
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
