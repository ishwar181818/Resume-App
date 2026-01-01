import React from "react";

function Education() {
  return (
    <div className="card shadow-lg border-0 rounded-4 p-4">
      <h3 className="fw-bold mb-4 text-primary">
        <span className="me-2">🎓</span> Education
      </h3>

      <div className="timeline">
        {/* Bachelor of Engineering */}
        <div className="mb-4 border-start border-primary border-4 ps-3">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="fw-bold text-dark mb-1">Bachelor of Engineering (B.E.)</h5>
            <span className="badge bg-primary rounded-pill">2014 – 2018</span>
          </div>
          <p className="mb-1 fw-semibold text-secondary">KDK College of Engineering, Umrer</p>
          <p className="text-muted small mb-0">
            Passed with <strong className="text-dark">8.53 CGPA</strong>
          </p>
        </div>

        {/* 12th HSC */}
        <div className="mb-4 border-start border-info border-4 ps-3">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="fw-bold text-dark mb-1">12th HSC (Electronics & Science)</h5>
            <span className="badge bg-info text-dark rounded-pill">2013 – 2014</span>
          </div>
          <p className="mb-1 fw-semibold text-secondary">Prerna Junior College</p>
          <p className="text-muted small mb-0">
            Passed with <strong className="text-dark">78.64%</strong>
          </p>
        </div>

        {/* 10th SSC */}
        <div className="border-start border-secondary border-4 ps-3">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="fw-bold text-dark mb-1">10th SSC</h5>
            <span className="badge bg-secondary rounded-pill">2011 – 2012</span>
          </div>
          <p className="mb-1 fw-semibold text-secondary">Shree Gajanan Vidyalaya</p>
          <p className="text-muted small mb-0">
            Passed with <strong className="text-dark">85.64%</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;