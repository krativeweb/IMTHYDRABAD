"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function PlacementAlliances() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const logos = [
    { src: "/media/placementimg/1.webp", alt: "Logo 1" },
    { src: "/media/placementimg/2.webp", alt: "Logo 2" },
    { src: "/media/placementimg/3.webp", alt: "Logo 3" },
    { src: "/media/placementimg/4.webp", alt: "Logo 4" },
    { src: "/media/placementimg/5.webp", alt: "Logo 5" },
    { src: "/media/placementimg/6.webp", alt: "Logo 6" },
    { src: "/media/placementimg/7.webp", alt: "Logo 7" },
    { src: "/media/placementimg/8.webp", alt: "Logo 8" },
    { src: "/media/placementimg/9.webp", alt: "Logo 9" },
    { src: "/media/placementimg/10.webp", alt: "Logo 10" },
    { src: "/media/placementimg/11.webp", alt: "Logo 11" },
    { src: "/media/placementimg/12.webp", alt: "Logo 12" },
    { src: "/media/placementimg/13.webp", alt: "Logo 13" },
    { src: "/media/placementimg/14.webp", alt: "Logo 14" },
    { src: "/media/placementimg/15.webp", alt: "Logo 15" },
    { src: "/media/placementimg/16.webp", alt: "Logo 16" },
    { src: "/media/placementimg/17.webp", alt: "Logo 17" },
    { src: "/media/placementimg/18.webp", alt: "Logo 18" },
    { src: "/media/placementimg/19.webp", alt: "Logo 19" },
    { src: "/media/placementimg/20.webp", alt: "Logo 20" },
    { src: "/media/placementimg/21.webp", alt: "Logo 21" },
    { src: "/media/placementimg/22.webp", alt: "Logo 22" },
    { src: "/media/placementimg/23.webp", alt: "Logo 23" },
    { src: "/media/placementimg/24.webp", alt: "Logo 24" },
    { src: "/media/placementimg/25.webp", alt: "Logo 25" },
    { src: "/media/placementimg/26.webp", alt: "Logo 26" },
    { src: "/media/placementimg/27.webp", alt: "Logo 27" },
    { src: "/media/placementimg/28.webp", alt: "Logo 28" },
    { src: "/media/placementimg/29.webp", alt: "Logo 29" },
    { src: "/media/placementimg/30.webp", alt: "Logo 30" },
    { src: "/media/placementimg/31.webp", alt: "Logo 31" },
    { src: "/media/placementimg/32.webp", alt: "Logo 32" },
    { src: "/media/placementimg/33.webp", alt: "Logo 33" },
    { src: "/media/placementimg/34.webp", alt: "Logo 34" },
    { src: "/media/placementimg/35.webp", alt: "Logo 35" },
    { src: "/media/placementimg/36.webp", alt: "Logo 36" },
    { src: "/media/placementimg/37.webp", alt: "Logo 37" },
    { src: "/media/placementimg/38.webp", alt: "Logo 38" },
    { src: "/media/placementimg/39.webp", alt: "Logo 39" },
    { src: "/media/placementimg/40.webp", alt: "Logo 40" },
    { src: "/media/placementimg/41.webp", alt: "Logo 41" },
    { src: "/media/placementimg/42.webp", alt: "Logo 42" },
    { src: "/media/placementimg/43.webp", alt: "Logo 43" },
    { src: "/media/placementimg/44.webp", alt: "Logo 44" },
    { src: "/media/placementimg/45.webp", alt: "Logo 45" },
    { src: "/media/placementimg/46.webp", alt: "Logo 46" },
    { src: "/media/placementimg/47.webp", alt: "Logo 47" },
    { src: "/media/placementimg/48.webp", alt: "Logo 48" },
    { src: "/media/placementimg/49.webp", alt: "Logo 49" },
    { src: "/media/placementimg/50.webp", alt: "Logo 50" },
    { src: "/media/placementimg/51.webp", alt: "Logo 51" },
    { src: "/media/placementimg/52.webp", alt: "Logo 52" },
    { src: "/media/placementimg/53.webp", alt: "Logo 53" },
    { src: "/media/placementimg/54.webp", alt: "Logo 54" },
    { src: "/media/placementimg/55.webp", alt: "Logo 55" },
    { src: "/media/placementimg/56.webp", alt: "Logo 56" },
    { src: "/media/placementimg/57.webp", alt: "Logo 57" },
    { src: "/media/placementimg/58.webp", alt: "Logo 58" },
    { src: "/media/placementimg/59.webp", alt: "Logo 59" },
    { src: "/media/placementimg/60.webp", alt: "Logo 60" },
    { src: "/media/placementimg/61.webp", alt: "Logo 61" },
    { src: "/media/placementimg/62.webp", alt: "Logo 62" },
    { src: "/media/placementimg/63.webp", alt: "Logo 63" },
    { src: "/media/placementimg/64.webp", alt: "Logo 64" },
    { src: "/media/placementimg/65.webp", alt: "Logo 65" },
    { src: "/media/placementimg/66.webp", alt: "Logo 66" },
  ];

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="ttm-row course-section_1 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h2 className="title">Placement Alliances & Recruiters</h2>
                <h5 className="mt-3">
                  Our network, your gateway to a dream career.
                </h5>
              </div>
              <div className="heading-seperator">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {logos.map((logo, index) => (
              <div className="embla__slide" key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={90}
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
          width: 100%;
          padding: 20px 0;
        }

        .embla__container {
          display: flex;
          gap: 30px;
        }

        .embla__slide {
          flex: 0 0 20%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .embla__slide img {
          object-fit: contain;
          width: auto;
          height: 80px;
        }

        @media (max-width: 1100px) {
          .embla__slide {
            flex: 0 0 25%;
          }
        }

        @media (max-width: 777px) {
          .embla__slide {
            flex: 0 0 33.33%;
          }
        }

        @media (max-width: 590px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }

        @media (max-width: 400px) {
          .embla__slide {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </section>
  );
}
