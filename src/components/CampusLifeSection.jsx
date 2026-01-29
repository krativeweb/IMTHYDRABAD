"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function CampusLifeSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const slides = [
    "/admission/media/l1.png",
    "/admission/media/l2.png",
    "/admission/media/l3.png",
    "/admission/media/l4.png",
    "/admission/media/l5.png",
    "/admission/media/l6.png",
  ];

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="ttm-row broken-section bg-layer clearfix mt-5">
      <div className="container">
        <div className="row g-0">
          {/* Left carousel */}
          <div className="col-lg-5 col-md-12">
            <div
              className="col-bg-img-seven ttm-col-bgimage-yes ttm-left-span ttm-bg position-relative overflow-hidden"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#131d3b",
              }}
            >
              <div
                className="embla"
                ref={emblaRef}
                style={{ overflow: "hidden" }}
              >
                <div className="embla__container d-flex">
                  {slides.map((src, index) => (
                    <div
                      key={index}
                      className="embla__slide flex-shrink-0"
                      style={{
                        minWidth: "100%", // 1 slide per view, adjust as needed
                        padding: "10px",
                        boxSizing: "border-box",
                      }}
                    >
                      <img
                        src={src}
                        alt={`Campus Life ${index + 1}`}
                        className="d-block w-100"
                        style={{
                          borderRadius: "30px",
                          objectFit: "cover",
                          height: "400px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="col-lg-7 col-md-12">
            <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span ttm-bgcolor-grey spacing-10">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                <div className="ttm-col-wrapper-bg-layer-inner" />
              </div>
              <div className="layer-content">
                <div className="section-title">
                  <div className="title-header">
                    <h2 className="title">Life @ IMT HYDERABAD Campus</h2>
                    <h5 className="mt-3">CAMPUS OF IMT HYDERABAD</h5>
                  </div>
                  <div className="heading-seperator">
                    <span />
                  </div>
                </div>
                <p>
                  The institute is built on a sprawling and lush green 30 acres’
                  land. IMT Hyderabad state-of-the-art campus is located 15
                  minutes away from Rajiv Gandhi International Airport. The
                  beautifully landscaped campus has an academic block, a library
                  building, dining halls, hostels and entire campus is well
                  paved, well lit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
