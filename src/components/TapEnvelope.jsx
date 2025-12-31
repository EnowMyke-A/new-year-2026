import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TapEnvelope.css";
import Message from "./Message";

export default function TapEnvelope() {
  const navigate = useNavigate();
  const [stage, setStage] = useState("closed"); // stages: closed, open, expanded
  const [showMessage, setShowMessage] = useState(false);

  const handleEnvelopeClick = () => {
    if (stage === "closed") {
      setStage("open");

      // 1. Wait for flap animation (approx 0.5s - 1s)
      // 2. Transition to expanded (letter coming out)
      setTimeout(() => {
        setStage("expanded");
      }, 3500); 

      // 3. Final transition to the Message component
      // Adjust this timing to match your "slide out" CSS duration
      setTimeout(() => {
        setShowMessage(true);
      }, 3900); 
    }
  };

  // If the message is ready, we render it with a wrapper for a fade-in effect
  if (showMessage) {
    return (
      <div className="message-container-fade">
        <Message />
      </div>
    );
  }

  return (
    <div className={`envelope-screen stage-${stage} ${showMessage ? "fade-out" : "page-enter-active"}`}>
      <div className="envelope-content">
        <div
          className={`envelope-container ${stage !== "closed" ? "envelope-open" : ""}`}
          onClick={handleEnvelopeClick}
        >
          <div className="envelope-body">
            <div className="envelope-pattern"></div>

            <div className="letter-wrapper">
              <div className="inner-component">
                <p>A little reminder… I’m still very crazy about you.</p>
              </div>
            </div>

            <div className="envelope-fold-bottom"></div>
            <div className="envelope-fold-left"></div>
            <div className="envelope-fold-right"></div>

            <div className="envelope-flap">
              <div className="envelope-seal">
                <div className="line-round-heart">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {stage === "closed" && (
          <div className="interaction-prompt">
            <h3>To Angel (My Baby)</h3>
            <button className="tap-button">
              <span className="material-symbols-outlined">touch_app</span>
              <span>Go on, tap on the envelope</span>
            </button>
          </div>
        )}
      </div>

      <div className="envelope-footer">
        <p>From Enow Myke-Austine</p>
      </div>
    </div>
  );
}