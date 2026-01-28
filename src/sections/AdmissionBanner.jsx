"use client";

import { useEffect } from "react";

export default function BannerSlider({ bannerData }) {
  useEffect(() => {
    if (!document.getElementById("__formWidgetCss")) {
      const css = document.createElement("link");
      css.id = "__formWidgetCss";
      css.rel = "stylesheet";
      css.href =
        "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/css/stylesheet.min.css";
      document.head.appendChild(css);
    }

    const script = document.createElement("script");
    script.src =
      "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/js/eeFormWidget.min.js";
    script.async = true;

    script.onload = async () => {
      if (typeof eeFormWidget !== "undefined") {
        const widget = new eeFormWidget();
        await widget.init("imthyderabad", "form-1", "ee-form-1");
      }
    };

    document.head.appendChild(script);
  }, []);

  if (!bannerData) return null;

  const { banner_image, banner_text } = bannerData;

  // ✅ ENV BASE URL
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ✅ Final image URL
  const bannerImageUrl = banner_image
    ? `${API_URL}${banner_image}`
    : "/admission/images/hero.jpg"; // fallback

  return (
    <div className="banner-slider slick-arrows-style1" id="admission">
      <div className="banner-slide">
        {/* ✅ ENV-based Dynamic Banner Image */}
        <img
          src={bannerImageUrl}
          alt="IMT Hyderabad Admission Banner"
          className="img-fluid"
          style={{ objectFit: "cover", height: "140vh", width: "100%" }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(1, 3, 28, 0.53)",
            zIndex: 0,
          }}
        />

        <div className="banner-caption">
          <div className="info mb-4 custom-margin">
            <style jsx>{`
              .custom-margin {
                margin-top: 0%;
              }
              @media (max-width: 576px) {
                .custom-margin {
                  margin-top: 105px !important;
                }
              }
            `}</style>

            <div className="container">
              <div className="row align-items-center">
                {/* LEFT CONTENT */}
                <div className="col-lg-8 col-md-12">
                  <div className="banner-text_1 ttm-textcolor-white text-start pt-4">
                    <div
                      dangerouslySetInnerHTML={{ __html: banner_text }}
                    />
                  </div>
                </div>

                {/* RIGHT FORM */}
                <div className="col-lg-4 col-md-12" id="form">
                  <div className="bg-white rounded shadow">
                    <div id="ee-form-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
