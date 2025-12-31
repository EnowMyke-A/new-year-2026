import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './BeginScreen.css';

export default function BeginScreen() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleBeginClick = () => {
     setIsExiting(true);
      // Wait for the animation duration (600ms) before changing page
      setTimeout(() => {
        navigate("/message"); // Ensure this matches your route path
      }, 600);
  };

  return (
    <div className={`begin-screen ${isExiting ? 'page-exit-active' : ''}`}>
      {/* Particle Emitter Layer */}
      <div className="particles">
        <span className="material-symbols-outlined particle-1">favorite</span>
        <span className="material-symbols-outlined particle-2">favorite</span>
        <span className="material-symbols-outlined particle-3">favorite</span>
        <span className="material-symbols-outlined particle-4">favorite</span>
        <span className="material-symbols-outlined particle-5">favorite</span>
        <span className="material-symbols-outlined particle-6">favorite</span>
        <span className="material-symbols-outlined particle-7">favorite</span>
        <div className="blob"></div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Spacer */}
        <div className="spacer"></div>
        
        {/* Central Typography */}
        <div className="typography-container">
          <h1>Hey Choupi❣.</h1>
          <div className="decorative-line"></div>
        </div>

        {/* Action Area */}
        <div className="action-area">
          <p className="date">01.01.2026</p>
          <button 
            className="begin-button"
            onClick={handleBeginClick}
          >
            <span className="button-text">I have something 4 U</span>
            <span className="material-symbols-outlined arrow-icon">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
