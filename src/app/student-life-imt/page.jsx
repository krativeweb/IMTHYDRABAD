// app/student-life/page.jsx
'use client';

import PlacementAlliance from '@/components/PlacementAlliance.jsx';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function StudentLifePage() {
  const carouselRef = useRef(null);

  useEffect(() => {
    // === AOS INIT ===
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1200,
        once: true,
      });
    }

    // === OWL CAROUSEL INIT (SAFE) ===
    const initCarousel = () => {
      if (
        typeof window === 'undefined' ||
        !window.$ ||
        !window.$.fn ||
        !window.$.fn.owlCarousel ||
        !carouselRef.current
      ) {
        return false;
      }

      const $carousel = window.$(carouselRef.current);

      // Destroy existing instance
      if ($carousel.hasClass('owl-loaded')) {
        $carousel.trigger('destroy.owl.carousel');
      }

      // Initialize
      $carousel.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 4 }
        }
      });

      return true;
    };

    // Try immediately
    if (!initCarousel()) {
      // If failed → poll until jQuery + Owl are ready
      const interval = setInterval(() => {
        if (initCarousel()) {
          clearInterval(interval);
        }
      }, 100);

      // Fallback timeout
      setTimeout(() => clearInterval(interval), 5000);
    }

    // Cleanup
    return () => {
      if (carouselRef.current && window.$ && window.$(carouselRef.current).hasClass('owl-loaded')) {
        window.$(carouselRef.current).trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('/media/banners/pgdm(lscm).webp')",
            position: 'relative',
            backgroundSize: 'cover',
            height: '60vh'
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Student Life</h2>
          <p className="text-white">
            A community where students grow, collaborate, and lead.
            <br/>
We cultivate thinkers and doers prepared for a future shaped by innovation and empathy.

          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ backgroundColor: 'rgb(22 57 119)' }}>
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link style={{ textDecoration: 'none' }} href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Student Life
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <section id="international-associations" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title" style={{ color: '#08317a' }}>Student Life</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10" data-aos="fade-up" data-aos-delay="250">
                <p className="mb-4 fst-italic text-dark">
                  “I always knew looking back on the tears would make me laugh, but I never knew looking back on the laughs would make me cry.”
                </p>
                <p className="mb-3 text-dark">
                  Life in a B-School is always filled with eventful events, as they say the life starts at 5 in the morning and ends at 5. With the changing outlook in management education, where theories are made and shelved every now and then, where businesses are going global, where geographies are not just defined with barbed wires, the need of the hour is to keep with that pace. Understanding the same, B-Schools around the world are striving to incorporate all these in their students. So if everyone is following the same trend worldwide, then how is life at IMT Hyderabad different from the others?
                </p>
                <p className="mb-3 text-dark">
                  Well, the answer lays here—at IMT Hyderabad, on one hand when the student is prepared to cater to the need of the hour, it also incorporates within the student the forgotten lesson of humanity. In an environment where students are perceived to be the most important stakeholder, and in almost every occasion the students are given a fair chance to voice their opinions, it brings out the sense of involvement, responsibility, and pride within the student.
                </p>
                <p className="mb-3 text-dark">
                  Here, life is not only stipulated to the black imprints on hard paper-bound books. The leafy campus of IMT Hyderabad blisters with events apart from the regular bland lectures in the form of activities by the students, of the students and of course for the students. On one hand, when there is enormous pressure of assignments, class tests, etc., the other hand has limitless fun, friends—friends made for life, soothing chords of guitar and of course a sense of belonging that the students make at IMT Hyderabad far from their sunny native lands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== IMAGE GALLERY ===== */}
        <section id="student-life-gallery" className="py-5" style={{ backgroundColor: '#163977' }}>
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title text-warning">Life at IMT Hyderabad</h2>
              <p className="text-light">Moments from campus life, events, and activities</p>
            </div>
            <div className="row g-4">
  {[
    "/media/std-life/1.JPG",
    "/media/std-life/2.JPG",
    "/media/std-life/3.JPG",
    "/media/std-life/4.JPG",
    "/media/std-life/5.JPG",
    "/media/std-life/6.JPG",
    "/media/std-life/7.JPG",
    "/media/std-life/8.JPG",
  ].map((img, i) => (
    <div
      key={i}
      className="col-6 col-md-4 col-lg-3"
      data-aos="zoom-in"
      data-aos-delay={100 + i * 50}
    >
      <div className="card border-0 shadow-sm overflow-hidden">
        <img
          src={img}
          className="card-img-top img-fluid h-100"
          style={{ height: "200px", objectFit: "cover" }}
          alt={`Event ${i + 1}`}
        />
      </div>
    </div>
  ))}
</div>

          </div>
        </section>

        {/* ===== CLIENTS CAROUSEL (ref attached) ===== */}
        <section className="placement-alliances-section py-4" data-aos="fade-up" data-aos-duration="1000">
          <div className="container text-center">
            <h6 className="subtitle text-center text-warning" data-aos="fade-down" data-aos-delay="100">
              Our Clients
            </h6>
            <h2 className="section-title mb-4" data-aos="zoom-in" data-aos-delay="200">
              Our Distinguished Clients
            </h2>
            <p className="mb-5" data-aos="fade-up" data-aos-delay="300">
              We are proud to be associated with top companies.
            </p>

            <div
              ref={carouselRef}
              id="placement-carousel"
              className="owl-carousel owl-theme"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="item"><img src="/media/placementimg/1.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/2.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/3.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/4.webp" alt=".." /></div>
              <div className="item"><img src="/media/placementimg/5.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/6.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/7.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/8.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/9.webp"  alt=".." /></div>
              <div className="item"><img src="/media/placementimg/10.webp"  alt=".." /></div>
            </div>
          </div>
        </section>

        {/* ===== STYLES (unchanged) ===== */}
<style
  dangerouslySetInnerHTML={{
    __html: `
      #student-life-gallery .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      }
      #student-life-gallery .card:hover {
        transform: translateY(-5px) scale(1.03);
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
      }
      #student-life-gallery .card-body {
        padding: 0.5rem;
      }

      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }
      .custom-card:hover {
        background: #ffc107;
        transform: translateY(-5px);
      }

      .owl-carousel .item {
        background: #fff;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
      }
      .owl-carousel .item:hover {
        transform: translateY(-5px);
      }
      .owl-carousel .item img {
        max-height: 80px;
        object-fit: contain;
      }

      .faculty-hero {
        background: url('/media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.3);
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 150px;
      }

      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      .social-icon {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #ffc107;
        color: #fff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #fff;
        transform: translateY(-3px);
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
      }
      .small-placeholder::placeholder {
        font-size: 0.85rem;
      }
      .nav-pills .nav-link.active,
      .nav-pills .show > .nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: var(--bs-nav-pills-border-radius);
        background: #e9ecef;
        border-radius: 30px;
        color: #333;
      }
    `,
  }}
/>

      </section>
    </>
  );
}
