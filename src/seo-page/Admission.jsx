"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import AdmissionBanner from "@/sections/AdmissionBanner";
import Image from "next/image";
import NavbarFour from "@/components/NavbarFour";
import RankingsSection from "@/components/RankingsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import DiversitySection from "@/components/DiversitySection";
import ProgramsSection from "@/components/ProgramsSection";
import PlacementsSection from "@/components/PlacementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AccreditationsSection from "@/components/AccreditationsSection";
import RecruitersCarousel from "@/components/RecruitersCarousel";
import EligibilitySection from "@/components/EligibilitySection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import AdmissionProcessSection from "@/components/AdmissionProcessSection";
import AdmissionInfoSection from "@/components/AdmissionInfoSection";
import ProgramHighlightsSection from "@/components/ProgramHighlightsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import FooterTwo from "@/components/FooterTwo";

export default function IMTHyderabad() {
  useEffect(() => {
    // UTM & Referrer Capture Script
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const fields = [
      "utm_campaign",
      "utm_keyword",
      "utm_source",
      "utm_network",
      "utm_medium",
    ];
    fields.forEach((field) => {
      const value = params.get(field);
      const idMap = {
        utm_campaign: "campaign_name",
        utm_keyword: "keyword",
        utm_source: "sourceId",
        utm_network: "network",
        utm_medium: "utm_medium",
      };
      if (value && document.getElementById(idMap[field])) {
        document.getElementById(idMap[field]).value = value;
      }
    });
    if (document.getElementById("campaign_url")) {
      document.getElementById("campaign_url").value = window.location.href;
    }
    if (document.getElementById("referrerid")) {
      document.getElementById("referrerid").value = document.referrer || "None";
    }
  }, []);

  return (
    <>
      {/* <link rel="shortcut icon" href="/images/favicon.jpeg" /> */}

      <style
        dangerouslySetInnerHTML={{
          __html: `

           body{
      overflow-x:hidden !important;
      }
      .ttm-bg-layer, .ttm-col-wrapper-bg-layer-inner, .ttm-titlebar-wrapper .ttm-titlebar-wrapper-bg-layer {
    position: absolute;
    height: 100%;
    width: 100% !important;
    top: 0;
    left: 0;
}
      .apply-now-btn {
        position: fixed;
        z-index: 9999;
        display: inline-block;
        padding: 12px 20px;
        background-color: #ffc107;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        border-radius: 6px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }

      .apply-now-btn:hover {
        background-color: #070e23;
        color: #fff;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
      }

      @media (min-width: 768px) {
        .apply-now-btn {
          right: -3px;
          padding: 12px;
          top: 40%;
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      }

      @media (max-width: 767.98px) {
        .apply-now-btn {
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
          width: 90%;
          text-align: center;
          text-transform: capitalize;
          border-radius: 10px;
          writing-mode: horizontal-tb;
        }
      }

      .adv-box {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        background: #fff;
      }
      .adv-box:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
      }

      .accreditation-logo img {
        max-height: 100px;
        width: auto;
        transition: all 0.3s ease;
      }
      .accreditation-logo img:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
      }

      .icon-box {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      .icon-box img {
        width: 45px;
        height: 45px;
      }

      .nav-tabs {
        margin: 20px;
      }
      .nav-tabs .nav-link.active {
        background-color: #ffc107 !important;
        color: #fff !important;
        border-color: #ffc107 #ffc107 #fff !important;
      }
      .nav-tabs .nav-link {
        color: #333;
      }
    `,
        }}
      />

      {/* bootstrap */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/bootstrap.min.css"
      />

      {/* fontawesome */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/font-awesome.css"
      />

      {/* themify */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/themify-icons.css"
      />

      {/* flaticon */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/flaticon.css"
      />

      {/* slick */}
      <link rel="stylesheet" type="text/css" href="/admission/css/slick.css" />

      {/* prettyphoto */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/prettyPhoto.css"
      />

      {/* shortcodes */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/shortcodes.css"
      />

      {/* main */}
      <link rel="stylesheet" type="text/css" href="/admission/css/main.css" />

      {/* megamenu */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/megamenu.css"
      />

      {/* responsive */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admission/css/responsive.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <NavbarFour />
      <AdmissionBanner />

      <div className="site-main">
        <RankingsSection />
        <AdvantagesSection />
        <DiversitySection />
        <ProgramsSection />
        <PlacementsSection />
        <TestimonialsSection />
        <AccreditationsSection />
        <RecruitersCarousel />
        <EligibilitySection />
        <ImportantDatesSection />
        <AdmissionProcessSection />
        <AdmissionInfoSection />
        <ProgramHighlightsSection />
        <CampusLifeSection />
      </div>
      <FooterTwo />

      <a id="totop" href="#top">
        <i className="fa fa-angle-up" />
      </a>
      {/*back-to-top end*/}
      {/* page end */}
      <a href="#form" className="apply-now-btn text-light">
        {" "}
        APPLY NOW{" "}
      </a>

      <Script
        src="/admission/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/admission/js/jquery-migrate-3.4.1.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/admission/js/tether.min.js" strategy="beforeInteractive" />
      <Script
        src="/admission/js/bootstrap.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/admission/js/jquery.easing.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery-waypoints.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery-validate.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery.prettyPhoto.js"
        strategy="afterInteractive"
      />
      <Script src="/admission/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/admission/js/numinate.min.js" strategy="afterInteractive" />
      <Script
        src="/admission/js/imagesloaded.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/jquery-isotope.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/lazysizes.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/admission/js/circle-progress.min.js"
        strategy="afterInteractive"
      />
      <Script src="/admission/js/main.js" strategy="afterInteractive" />
    </>
  );
}
