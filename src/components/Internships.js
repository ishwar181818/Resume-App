import React from "react";

function Internships() {
  return (
    <div className="card shadow p-4">
      {/* Freelancing Section */}
      <h3 className="mb-3">💼 Freelancing Technical Work</h3>
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Freelance Java Trainer</h5>
          <span className="badge bg-primary">Aug 2024 – Jul 2025</span>
        </div>
        <p className="text-muted mb-2">Self Employed | Remote</p>
        <ul className="small">
          <li>Conducted interactive training sessions on Core Java and Advanced Java concepts for students.</li>
          <li>Explained key topics such as OOPs, Collections, and Spring Boot with hands-on examples.</li>
          <li>Guided students in developing real-world Java projects to build practical coding experience.</li>
          <li>
            Developed and managed a professional training website: 
            <a href="https://onlinetrainingapp.netlify.app" target="_blank" rel="noopener noreferrer" className="ms-1">
              https://onlinetrainingapp.netlify.app
            </a>.
          </li>
          <li>Handled and processed specific training queries from learners through the online platform.</li>
          <li><strong>Skills:</strong> Java.</li>
        </ul>
      </div>

      <hr />

      {/* SAP Internship Section */}
      <h3 className="mt-3 mb-3">🧑‍💻 Internships</h3>
      <div className="mb-4">
        <div className="d-flex justify-content-between">
          <h5 className="mb-0">Internship Trainee</h5>
          <span className="badge bg-secondary">Feb 2022 – Jun 2022</span>
        </div>
        <p className="text-muted mb-2">Automatic Infotech | Pune, Maharashtra</p>
        <ul className="small">
          <li>Completed a comprehensive SAP internship gaining practical knowledge of different SAP modules.</li>
          <li>Focused specialized training and practical application on <strong>SAP MM (Material Management)</strong>.</li>
          <li><strong>Skills:</strong> SAP MM.</li>
        </ul>
      </div>

      <hr />

      {/* Diploma/Tool Design Section */}
      <h3 className="mt-3 mb-3">🛠️ Technical Training & Diploma</h3>
      <div className="mb-2">
        <div className="d-flex justify-content-between">
          <h5 className="mb-0">Indo-German Tool Room</h5>
          <span className="badge bg-success">Jul 2018 – Jun 2019</span>
        </div>
        <p className="text-muted mb-2">Aurangabad, Maharashtra</p>
        <ul className="small">
          <li>Completed a <strong>Diploma in Tool Design and CAD/CAM</strong>.</li>
          <li>Specialized in Mechanical Design Engineering with a focus on precision tool development.</li>
          <li><strong>Grade:</strong> A (Passed with 73 Percentile).</li>
        </ul>
      </div>
    </div>
  );
}

export default Internships;