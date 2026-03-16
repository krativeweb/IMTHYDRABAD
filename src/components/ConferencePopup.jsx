"use client";

export default function ConferenceBanner() {
  return (
    <div className="conference-banner">
      <a
        href="https://isdsiglobal.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/neww.png"
          alt="ISDSI Global Conference"
          className="banner-img"
         
        />
      </a>

 <style jsx>{`
  .conference-banner {
    width: 100%;
    position: absolute;
    top: 158px;
    z-index: 1000; /* bring banner above video */
  }

  .banner-img {
    width: 100%;
    height: auto;
    display: block;
    cursor: pointer;
  }
     /* Mobile adjustment */
        @media (max-width: 768px) {
          .conference-banner {
            top: 170px; /* increase space for mobile navbar */
          }
        }
`}</style>
    </div>
  );
}