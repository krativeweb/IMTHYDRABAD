"use client";

import Slider from "react-slick";

export default function TestimonialsSection() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 870,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 525,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
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

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="ttm-box-col-wrapper">
              <div
                className="testimonials ttm-testimonial-box-view-style2"
                style={{ height: "100%" }}
              >
                <div className="testimonial-content border">
                  <div className="testimonial-avatar">
                    <div className="testimonial-img">
                      <img
                        width="80"
                        height="80"
                        className="img-center lazyload"
                        src={t.img}
                        alt="testimonial-img"
                      />
                    </div>
                  </div>
                  <div className="testimonial-caption">
                    <h5>{t.name}</h5>
                  </div>
                  <blockquote>{t.text}</blockquote>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
