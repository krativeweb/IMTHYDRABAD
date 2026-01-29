'use client';

export default function ApplyNowButton() {
  return (
    <>
   
      {/* Apply Now Button */}
      <a href="/admissions/pgdm" className="apply-now-btn">
        Apply for PGDM
      </a>

      {/* CSS */}
      <style jsx>{`
      (body) {
          overflow-x: hidden !important;
        }

        /* Apply Now Button */
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

        /* Desktop view */
        @media (min-width: 768px) {
          .apply-now-btn {
            right: -3px;
            top: 40%;
            padding: 12px;
            transform: translateY(-50%) rotate(180deg);
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        }

        /* Mobile view */
        @media (max-width: 767.98px) {
          .apply-now-btn {
            left: 50%;
            bottom: 10px;
            transform: translateX(-50%);
            width: 60%;
            text-align: center;
            text-transform: capitalize;
            border-radius: 10px;
            writing-mode: horizontal-tb;
          }
        }

      `}</style>
    </>
  );
}
