"use client";
import { useState } from "react";

export default function ConferencePopup() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        <button className="close-btn" onClick={() => setShow(false)}>
          ✕
        </button>

        <a href="https://isdsiglobal.com/" target="_blank">
          <img
            src="/images/imt-global.jpeg"
            alt="ISDSI Conference"
            className="popup-img"
          />
        </a>

      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;

          backdrop-filter: blur(8px);
          background: rgba(0,0,0,0.4);

          z-index: 9999;
          animation: fadeIn 0.4s ease;
        }

        .popup-box {
          position: relative;
          width: 90%;
          max-width: 700px;
          animation: zoomIn 0.35s ease;
        }

        .popup-img {
          width: 100%;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }

        .close-btn {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: white;
          font-size: 18px;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from {opacity:0;}
          to {opacity:1;}
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity:0;
          }
          to {
            transform: scale(1);
            opacity:1;
          }
        }

        @media (max-width: 768px) {
          .popup-box {
            max-width: 95%;
          }
        }
      `}</style>
    </div>
  );
}
