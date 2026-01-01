import React from "react";
import SectionCard from "./SectionCard";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <>
      <div className="text-center mb-4">
        <img
          src={profile}
          alt="Profile"
          className="rounded-circle shadow mb-3"
          width="150"
        />
        <h1 className="fw-bold">Ishwar Harbade</h1>
        <p className="lead text-white">
          Operations-Associate @WNS| Ex-Gallagher |US Insurance Operations| US-Property & Casualty (P&C) Insurance
        </p>
      </div>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h4>🎯 Objective</h4>
          <p>
           Insurance Specialist with 2 years of expertise in U.S. P&C New Business submissions. 
           Committed to delivering high-quality quotes and managing high-volume workloads. 
           Looking for a role that offers the opportunity to enhance 
           my technical skills in risk evaluation and policy management 
           within a professional environment 

          </p>
        </div>
      </div>

      <div className="row">
        <SectionCard
          title="Work Experience"
          text="Professional roles and responsibilities"
          route="/experience"
        />
        <SectionCard
          title="Education"
          text="Academic qualifications"
          route="/education"
        />
        <SectionCard
          title="Freelancing Work , Internships and Certificates"
          text="Training & internship experience"
          route="/internships"
        />
        <SectionCard
          title="Hobbies"
          text="Personal interests"
          route="/hobbies"
        />
      </div>
    </>
  );
}

export default Home;
