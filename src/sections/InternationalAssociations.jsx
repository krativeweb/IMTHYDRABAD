"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function InternationalAssociations() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const logos = [
    { src: "/media/internationalacc/1.jpg", alt: "ia1" },
    { src: "/media/internationalacc/2.png", alt: "ia2" },
    { src: "/media/internationalacc/3.jpg", alt: "ia3" },
    { src: "/media/internationalacc/3.png", alt: "ia33" },
    { src: "/media/internationalacc/4.png", alt: "ia4" },
    { src: "/media/internationalacc/5.png", alt: "ia5" },
    { src: "/media/internationalacc/7.png", alt: "ia7" },
    { src: "/media/internationalacc/8.png", alt: "ia8" },
    { src: "/media/internationalacc/9.jpg", alt: "ia9" },
    { src: "/media/internationalacc/10.png", alt: "ia10" },
    { src: "/media/internationalacc/11.png", alt: "ia11" },
    { src: "/media/internationalacc/12.png", alt: "ia12" },
    { src: "/media/internationalacc/13.png", alt: "ia13" },
    { src: "/media/internationalacc/14.jpg", alt: "ia14" },
    { src: "/media/internationalacc/15.png", alt: "ia15" },
    { src: "/media/internationalacc/16.png", alt: "ia16" },
    { src: "/media/internationalacc/17.jpg", alt: "ia17" },
    { src: "/media/internationalacc/18.png", alt: "ia18" },
    { src: "/media/internationalacc/19.png", alt: "ia19" },
    { src: "/media/internationalacc/20.png", alt: "ia20" },
    { src: "/media/internationalacc/21.png", alt: "ia21" },
    { src: "/media/internationalacc/22.jpg", alt: "ia22" },
  ];

  return (
    <section className="parallax-section py-5 d-flex align-items-center">
      <div className="overlay"></div>
      <div className="container text-center">
        <h6 className="subtitle text-warning mb-2">Our Associations</h6>
        <h2 className="section-title mb-4 text-white">
          INTERNATIONAL ASSOCIATION
        </h2>
        <p className="mb-5 text-warning">
          We are proud to be recognized and accredited by leading organizations.
        </p>

        {/* EMBLA CAROUSEL */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {logos.map((logo, idx) => (
              <div key={idx} className="embla__slide px-2">
                <div className="item bg-white p-3 rounded d-flex align-items-center justify-content-center">
                  <div className="img-wrapper">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 200px"
                      style={{
                        objectFit: "contain",
                      }}
                      priority={idx < 3}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .parallax-section {
          position: relative;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
        }
        .container > * {
          position: relative;
          z-index: 1;
        }

        .embla {
          overflow: hidden;
          width: 100%;
        }
        .embla__container {
          display: flex;
          touch-action: pan-y;
        }
        .embla__slide {
          flex: 0 0 25%; /* 4 slides per view */
          min-width: 0;
          padding: 0 8px;
          box-sizing: border-box;
        }

        .item {
          height: 130px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }

        .img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 180px;
          max-height: 100px;
        }

        .item:hover {
          transform: translateY(-5px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .embla__slide {
            flex: 0 0 33.333%;
          }
        }
        @media (max-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
        @media (max-width: 480px) {
          .embla__slide {
            flex: 0 0 100%;
          }
          .item {
            height: 100px;
          }
          .img-wrapper {
            max-width: 140px;
            max-height: 80px;
          }
        }
      `}</style>
    </section>
  );
}
