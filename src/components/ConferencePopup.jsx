"use client";

export default function ConferenceBanner() {
  return ( 
    <div className="conference-banner">
      <a href="https://isdsiglobal.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="/imt-global.png"
          alt="ISDSI Global Conference"
          className="banner-img"
        />
      </a>

      <style jsx>{`
        .conference-banner {
          width: 100%;
          background: #d6f0e0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .banner-img {
          width: 100%;
          max-width: 1400px;
          height: auto;
          display: block;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .banner-img {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
