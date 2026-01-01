import React from "react";
import { useNavigate } from "react-router-dom";

function SectionCard({ title, text, route }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-6 mb-4">
      <div
        className="card h-100 shadow section-card"
        onClick={() => navigate(route)}
      >
        <div className="card-body text-center">
          <h4 className="fw-bold">{title}</h4>
          <p className="text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
