import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Side: Brand Title */}
        <Link className="navbar-brand fw-bold" to="/">
          Ishwar Harbade – Resume
        </Link>

        {/* Right Side: Navigation Buttons */}
        <div className="d-flex gap-2">
          {/* Back to Home Button - Only shows if NOT on the home page */}
          {location.pathname !== "/" && (
            <Link to="/" className="btn btn-outline-info btn-sm rounded-pill px-3">
              🏠 Back to Home
            </Link>
          )}

          {/* Resume Download Button */}
          <a 
            href="/Ishwar_Harbade_Resume.pdf" 
            download 
            className="btn btn-primary btn-sm fw-bold px-3 rounded-pill"
          >
            Download Resume ⬇️
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;