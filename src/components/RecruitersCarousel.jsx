"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function PlacementAlliances() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const logos = [
    "https://www.imthyderabad.edu.in/imt/images/placements-logo30.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo32.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo33.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo37.png",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo35.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo14.png",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo15.png",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo36.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo26.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo27.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo29.jpg",
    "https://www.imthyderabad.edu.in/imt/images/placements-logo27.jpg",
  ];

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000); // change slide every 2 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="ttm-row course-section_1 clearfix">
      <div className="container">
        {/* Section title */}
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

        {/* Embla Slider */}
        <div className="embla" ref={emblaRef} style={{ overflow: "hidden" }}>
          <div className="embla__container d-flex">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="embla__slide p-3 flex-shrink-0"
                style={{ minWidth: "25%", boxSizing: "border-box" }}
              >
                <div className="featured-imagebox featured-imagebox-course style1">
                  <div className="ttm-post-thumbnail featured-thumbnail text-center">
                    <img
                      src={logo}
                      alt={`Placement Logo ${index + 1}`}
                      className="img-fluid"
                      style={{ maxHeight: "100px", margin: "0 auto" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     <style
  dangerouslySetInnerHTML={{
    __html: `
      @media (max-width: 1100px) {
        .embla__slide {
          min-width: 33.3333% !important;
        }
      }
      @media (max-width: 777px) {
        .embla__slide {
          min-width: 50% !important;
        }
      }
      @media (max-width: 590px) {
        .embla__slide {
          min-width: 100% !important;
        }
      }
    `,
  }}
/>

    </section>
  );
}
