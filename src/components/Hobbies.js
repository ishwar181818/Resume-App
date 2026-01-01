import React from "react";

function Hobbies() {
  const hobbies = [
    { name: "Singing", icon: "🎤", color: "text-primary", desc: "Passionate about vocal music and performance." },
    { name: "Watching Movies", icon: "🎬", color: "text-danger", desc: "Interested in world cinema and storytelling." },
    { name: "Food Exploration", icon: "🍲", color: "text-warning", desc: "Enjoying diverse cuisines and local food culture." },
    { name: "React Projects", icon: "⚛️", color: "text-info", desc: "Building interactive web apps" },
    { name: "Gaming", icon: "🎮", color: "text-success", desc: "Engaging in strategic and competitive gaming." },
    { name: "Continuous Learning", icon: "📚", color: "text-secondary", desc: "Keeping up with the latest trends in Java and P&C Insurance." }
  ];

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4">
      <h3 className="fw-bold mb-4">
        <span className="me-2 text-primary">🎯</span> Hobbies & Interests
      </h3>
      
      <div className="list-group list-group-flush">
        {hobbies.map((hobby, index) => (
          <div key={index} className="list-group-item border-0 px-0 py-3 d-flex align-items-center">
            {/* Icon Circle */}
            <div className={`rounded-circle bg-light d-flex align-items-center justify-content-center me-3 shadow-sm`} style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}>
              {hobby.icon}
            </div>
            
            {/* Text Content */}
            <div>
              <h6 className={`fw-bold mb-0 ${hobby.color}`}>{hobby.name}</h6>
              <small className="text-muted">{hobby.desc}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;