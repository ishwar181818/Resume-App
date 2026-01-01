import React from "react";
import { useNavigate } from "react-router-dom";

function Experience() {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      {/* Internal Style for Hover Effect */}
      <style>
        {`
          .job-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
            border: 1px solid rgba(0,0,0,0.1);
          }
          .job-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
            border-color: #0d6efd;
          }
          .click-hint {
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .job-card:hover .click-hint {
            opacity: 1;
          }
        `}
      </style>

      <h2 className="mb-3 fw-bold">💼 Work Experience</h2>
      
      {/* UPDATED: Bold and Darker color for visibility */}
      <p className="text-dark fw-bold mb-4 bg-light p-2 rounded border-start border-primary border-4">
        👉 Click on a company card below to view detailed roles and responsibilities.
      </p>

      {/* WNS CARD */}
      <div className="card mb-3 shadow-sm job-card rounded-3" onClick={() => navigate("/job/WNS")}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-1">WNS</h5>
            <p className="text-muted mb-0">Operations Associate</p>
          </div>
          <div className="text-end">
            <span className="click-hint text-primary fw-semibold me-2">View Details</span>
            <span className="text-primary">→</span>
          </div>
        </div>
      </div>

      {/* GALLAGHER CARD */}
      <div className="card mb-3 shadow-sm job-card rounded-3" onClick={() => navigate("/job/Gallagher")}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-1">Gallagher</h5>
            <p className="text-muted mb-0">Process Analyst</p>
          </div>
          <div className="text-end">
            <span className="click-hint text-primary fw-semibold me-2">View Details</span>
            <span className="text-primary">→</span>
          </div>
        </div>
      </div>

      {/* AMAZON CARD */}
      <div className="card mb-3 shadow-sm job-card rounded-3" onClick={() => navigate("/job/Amazon")}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-1">Amazon</h5>
            <p className="text-muted mb-0">Process Associate</p>
          </div>
          <div className="text-end">
            <span className="click-hint text-primary fw-semibold me-2">View Details</span>
            <span className="text-primary">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;