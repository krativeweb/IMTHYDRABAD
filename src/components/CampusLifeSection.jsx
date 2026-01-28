"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function CampusLifeSection({ contentHtml, images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  if (!contentHtml ) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <section className="ttm-row broken-section bg-layer clearfix mt-5">
      <div className="container">
        <div className="row g-0">
          {/* LEFT: Dynamic Carousel */}
          <div className="col-lg-5 col-md-12">
            <div
              className="col-bg-img-seven ttm-col-bgimage-yes ttm-left-span ttm-bg position-relative overflow-hidden"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#131d3b",
              }}
            >
              <div className="embla" ref={emblaRef} style={{ overflow: "hidden" }}>
                <div className="embla__container d-flex">
                  {images.map((img, index) => {
                    const imgUrl = img.startsWith("http")
                      ? img
                      : `${API_URL}${img}`;

                    return (
                      <div
                        key={index}
                        className="embla__slide flex-shrink-0"
                        style={{
                          minWidth: "100%",
                          padding: "10px",
                          boxSizing: "border-box",
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={`Campus Life ${index + 1}`}
                          className="d-block w-100"
                          style={{
                            borderRadius: "30px",
                            objectFit: "cover",
                            height: "400px",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CMS-controlled content */}
          <div className="col-lg-7 col-md-12">
            <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span ttm-bgcolor-grey spacing-10">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                <div className="ttm-col-wrapper-bg-layer-inner" />
              </div>

              {/* ✅ Render CMS HTML */}
              <div
                className="layer-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
