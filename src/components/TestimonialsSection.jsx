"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,  // lg and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,  // md and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

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
    <section className="ttm-row testimonial-section_2 clearfix py-16 bg-gray-50">
      <div className="container">
        {/* Section Title */}
        <div className="row text-center mb-12">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h2 className="title text-4xl font-bold text-gray-900">
                  Student Testimonials
                </h2>
                <h5 className="mt-4 text-lg text-gray-600">
                  Hear from our students about their transformative journeys.
                </h5>
              </div>
              <div className="heading-seperator mt-6">
                <span className="block w-24 h-1 bg-orange-500 mx-auto"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Slider - Fully Responsive */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-3">
              {"{"}
              {/* This padding (px-3) replaces Bootstrap gutters */}
              <div className="testimonials ttm-testimonial-box-view-style2 h-full">
                <div className="testimonial-content border rounded-lg shadow-lg bg-white p-8 h-full flex flex-col">
                  <div className="testimonial-avatar mb-6 text-center">
                    <div className="testimonial-img inline-block rounded-full overflow-hidden border-4 border-orange-500">
                      <img
                        width="100"
                        height="100"
                        className="rounded-full object-cover"
                        src={t.img}
                        alt={t.name}
                      />
                    </div>
                  </div>
                  <div className="testimonial-caption text-center mb-4">
                    <h5 className="text-xl font-semibold text-gray-900">
                      {t.name}
                    </h5>
                  </div>
                  <blockquote className="text-gray-700 text-base leading-relaxed flex-1">
                    "{t.text}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
