"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function BannerSlider() {
 useEffect(() => {
   // Load CSS
   if (!document.getElementById("__formWidgetCss")) {
     const css = document.createElement("link");
     css.id = "__formWidgetCss";
     css.rel = "stylesheet";
     css.href =
       "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/css/stylesheet.min.css";
     document.head.appendChild(css);
   }
 
   // Load JS
   const script = document.createElement("script");
   script.src =
     "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/js/eeFormWidget.min.js";
   script.async = true;

   script.onload = async () => {
     console.log("Widget script loaded");

     if (typeof eeFormWidget !== "undefined") {
       const widget = new eeFormWidget();
       await widget.init("imthyderabad", "form-1", "ee-form-1");
     } else {
       console.error("eeFormWidget not found!");
     }
   };

   document.head.appendChild(script);

   return () => {
     // Cleanup if needed
   };
 }, []);

  return (
    <div className="banner-slider slick-arrows-style1" id="admission">
      <div className="banner-slide">
        <img
          src="/admission/images/hero.jpg"
          alt=""
          width="100%"
          height={966}
          className="img-fluid"
          style={{ objectFit: "cover", height: "140vh" }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(1, 3, 28, 0.53)",
            zIndex: 0,
          }}
        ></div>

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
                {/* Left Column */}
                <div className="col-lg-8 col-md-12 d-block">
                  <div className="banner-text_1 ttm-textcolor-white text-start res-1199-mt-0 pt-4">
                    <div className="mb-15">
                      <h1
                        className="slideInUp animated"
                        style={{ fontSize: "3rem" }}
                      >
                        <span className="text-warning">
                          IMT Hyderabad Admissions 2026
                        </span>
                      </h1>
                      <p style={{ fontSize: "1.6rem" }}>
                        Applications Open for Two-Year PGDM Program
                      </p>
                     
                    </div>
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="col-lg-4 col-md-12" id="form">
                  <div className="bg-white rounded shadow">
                    {/* <script src="https://eequeuestorage.blob.core.windows.net/staticfiles/imthyderabad/ee-form-widget/form-1/widget.js"></script> */}
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
