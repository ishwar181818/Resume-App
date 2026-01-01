import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import JobDetails from "./components/JobDetails";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Hobbies from "./components/Hobbies";

import backgroundVideo from "./assets/background.mp4";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="content-overlay">
        <Navbar />

        <div className="container main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/job/:company" element={<JobDetails />} />
            <Route path="/education" element={<Education />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
