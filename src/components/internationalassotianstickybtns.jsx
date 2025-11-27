"use client";

import React from "react";

export default function InternationalAssociationStickyBtns() {
  return (
    <>
      <div className="sticky-buttons">
        <a
          href="https://drive.google.com/file/d/1a49h2OrDAHU8lURgHumBuQfBaQA5oVER/view"
          target="_blank"
          rel="noreferrer"
          className="sticky-btn"
        >
          Fact Sheet
        </a>

        <a
          href="https://drive.google.com/file/d/1RqrKCH3dfFGyBW8qQlhsvAzB5pGwK3l2/view"
          target="_blank"
          rel="noreferrer"
          className="sticky-btn"
        >
          Application Form
        </a>

        <a
          href="https://www.imthyderabad.edu.in/images/Directions-to-IMT-Hyderabad.jpg" // Replace with actual Google Maps link
          target="_blank"
          rel="noreferrer"
          className="sticky-btn"
        >
          Directions
        </a>
      </div>

      <style jsx>{`
        .sticky-buttons {
          position: fixed;
          top: 40%;
          right: 0;
          z-index: 1050;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sticky-btn {
          background-color: #ffcc00;
          color: #000;
          text-decoration: none;
          padding: 10px 20px;
          font-weight: 600;
          border-radius: 30px 0 0 30px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        }

        .sticky-btn:hover {
          background-color: #ffc107;
          transform: translateX(-5px);
        }

        @media (max-width: 768px) {
          .sticky-buttons {
            top: auto;
            bottom: 10%;
            right: 10px;
          }
          .sticky-btn {
            border-radius: 25px;
            padding: 8px 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}


