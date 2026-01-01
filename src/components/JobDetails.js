import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate

const jobData = {
  WNS: [
    "Professional Experience: Commercial Auto Specialist (Amerisure Account)",
    "Platform Expertise: Efficiently utilized Guidewire PolicyCenter and Impact systems to process high-volume Commercial Auto new business, ensuring seamless policy issuance and data integrity.",
    "Document Management: Leveraged ImageRight to retrieve and review critical submission documents, maintaining a paperless and organized workflow for all client files.",
    "ACORD Form Analysis: Expertly analyzed ACORD 125 and 137 forms, extracting key risk data and interpreting specific Commercial Auto Symbols (1-9) to ensure coverage was applied correctly per the client's needs.",
    "Precision Quoting: Generated accurate premium quotations for Amerisure accounts by cross-referencing risk details, vehicle schedules, and state-mandated rating factors.",
    "Underwriter Synergy: Maintained proactive communication with Underwriters, interpreting complex technical instructions and providing the necessary support to move files from submission to bound status.",
    "Symbol & Coverage Verification: Demonstrated a deep understanding of Commercial Auto symbols to verify that liability, physical damage, and specialized coverages were correctly coded within the system.",
    "Submission Scrubbing: Conducted thorough \"scrubs\" of incoming applications via ImageRight to identify missing information or discrepancies before the quoting stage, reducing turnaround time.",
    "Adherence to Guidelines: Executed all processing tasks in strict accordance with Amerisure’s specific underwriting appetite and corporate compliance standards."
  ],
  Gallagher: [
    "Professional Experience: Part of New Submission Team ",
    "ACORD Data Extraction: Carefully reviewed ACORD forms to identify and pull the correct Insured Information for entry into company systems.",
    "AIM Database Updates: Updated the AIM database with accurate Insured details, including names, addresses, and contact info, to ensure the policy record was set up correctly.",
    "ImageRight Documentation: Managed the digital filing process by uploading and organizing ACORD forms in ImageRight for easy access by the underwriting team.",
    "Multi-Line Submission Handling: Processed new business requests for various lines of insurance, including General Liability, Workers Compensation, and Commercial Property.",
    "Underwriter Communication: Maintained constant contact with Underwriters to clarify instructions and provide status updates on pending submissions.",
    "Workflow Efficiency: Focused on meeting strict deadlines to ensure that new business requests moved quickly through the AIM and ImageRight systems."
  ],
  Amazon: [
    "Professional Experience: Amazon Marketplace Operations",
    "Product Mapping Expertise: Successfully executed product mapping by matching internal inventory with existing Amazon UAE listings to improve catalog consistency.",
    "Competitor Platform Research: Performed detailed product research on leading UAE e-commerce platforms, including Sharaf DG and Mumzworld AE, to track market trends.",
    "Listing Identification: Identified matching competitor listings across multiple platforms to ensure our product range remained competitive in the UAE market.",
    "Data Comparison & Analysis: Compiled comprehensive comparison reports, highlighting differences in product features, availability, and customer ratings.",
    "Pricing Strategy Support: Shared real-time competitor data with the pricing team to help them make informed decisions on strategic price adjustments.",
    "Listing Optimization: Used research insights to suggest improvements for product titles, descriptions, and keywords to outperform competitor listings.",
    "Market Trend Monitoring: Monitored the UAE e-commerce landscape to identify new product entries and pricing shifts on rival platforms."
  ]
};

const jobYears = {
  WNS: "Aug 2025 – Present",
  Gallagher: "Sep 2022 – Sep 2024",
  Amazon: "Jan 2021 – Sep 2021"
};

function JobDetails() {
  const { company } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="container mt-4">
      {/* BACK BUTTON */}
      <button 
        className="btn btn-outline-light mb-4 shadow-sm" 
        onClick={() => navigate("/experience")} // Navigates back to the experience list
      >
        ⬅ Back to Experience
      </button>

      <div className="card shadow-lg border-0 rounded-4 p-4 overflow-hidden">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
          <div>
            <h2 className="fw-bold text-primary mb-0">{company}</h2>
            <h6 className="text-secondary mt-1">Experience Record</h6>
          </div>
          <div className="text-end">
            <span className="badge bg-light text-primary border px-3 py-2 rounded-pill fw-semibold">
              {jobYears[company]}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-2">
          <h5 className="fw-bold text-dark mb-3">
            <i className="bi bi-briefcase-fill me-2"></i>Roles & Responsibilities
          </h5>
          
          <ul className="list-group list-group-flush">
            {jobData[company]?.map((item, index) => {
              const [title, description] = item.split(": ");
              return (
                <li key={index} className="list-group-item border-0 px-0 py-2 d-flex align-items-start">
                  <span className="text-primary me-2">•</span>
                  <span>
                    {description ? (
                      <>
                        <strong className="text-dark">{title}:</strong> 
                        <span className="text-muted ms-1">{description}</span>
                      </>
                    ) : (
                      <strong className="text-primary">{title}</strong>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;