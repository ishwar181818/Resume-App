import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5 border-top border-secondary w-100">
      <div className="container">
        <div className="row">
          {/* Left Column: Vertical Links 1 to 5 */}
          <div className="col-md-7 mb-4 mb-md-0">
            <h5 className="fw-bold text-primary mb-4">Quick Links & Contact</h5>
            <ul className="list-unstyled">
              {/* 1. LinkedIn */}
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fw-bold text-primary">1.</span>
                <a 
                  href="https://www.linkedin.com/in/eshwar-h-297377147/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-decoration-none text-white transition-link"
                >
                  LinkedIn Profile
                </a>
              </li>

              {/* 2. Resume Download */}
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fw-bold text-primary">2.</span>
                <a 
                  href="/Ishwar_Harbade_Resume.pdf" 
                  download 
                  className="text-decoration-none text-white transition-link"
                >
                  Download Resume (PDF)
                </a>
              </li>

              {/* 3. Email ID */}
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fw-bold text-primary">3.</span>
                <div>
                  <span className="text-secondary small d-block">Email ID:</span>
                  <a href="mailto:ishwarharbade55@gmail.com" className="text-decoration-none text-white">
                    ishwarharbade55@gmail.com
                  </a>
                </div>
              </li>

              {/* 4. Addresses */}
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fw-bold text-primary">4.</span>
                <div>
                  <span className="text-secondary small d-block">Addresses:</span>
                  <p className="mb-1 text-white small">
                    <strong>Pune:</strong> Upper Indira Nagar, Bibwewadi, Pune - 411037
                  </p>
                  <p className="mb-0 text-white small">
                    <strong>Nagpur:</strong> Plot No 14, Datta Nagar, Besa, Nagpur - 440037
                  </p>
                </div>
              </li>

              {/* 5. Additional Services */}
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fw-bold text-primary">5.</span>
                <div>
                  <span className="text-secondary small d-block">Additional Services:</span>
                  <a 
                    href="https://onlinetrainingapp.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-decoration-none text-white"
                  >
                    My Freelancing Java Training Website (Click On This ..)
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Branding */}
          <div className="col-md-5 text-md-end text-center mt-auto">
            <h4 className="fw-bold mb-1">Ishwar Harbade</h4>
            <p className="text-primary small mb-2">US Insurance Operations Expert & Java Expert    </p>
            <hr className="border-secondary d-md-none" />
            <p className="small text-muted mb-0">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Simple Hover Effect CSS */}
      <style>{`
        .transition-link:hover {
          color: #0d6efd !important;
          padding-left: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
}

export default Footer;