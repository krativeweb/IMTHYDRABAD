"use client";

export default function Loader({ fullScreen = false }) {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${
        fullScreen ? "vh-100" : ""
      }`}
    >
      <div
        className="spinner-border custom-spinner"
        role="status"
        aria-label="Loading"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      <style jsx>{`
        .custom-spinner {
          width: 3rem;
          height: 3rem;
          border-width: 0.35em;
          border-color: #d1a010 transparent #d1a010 transparent;
        }
      `}</style>
    </div>
  );
}
