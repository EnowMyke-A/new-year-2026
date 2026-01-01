import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Countdown.css";

export default function Countdown() {
    const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const [countdownInterval, setCountdownInterval] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Set isClient to true on component mount (client-side only)
    setIsClient(true);

    // Set the target date to January 1, 2026
    const targetDate = new Date("2026-01-01T02:15:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setIsCountdownComplete(true);
        if (countdownInterval) {
          clearInterval(countdownInterval);
        }
        return;
      }
    };

    // Initial call
    updateCountdown();

    // Only set interval if countdown is not complete
    if (!isCountdownComplete) {
      const interval = setInterval(updateCountdown, 1000);
      setCountdownInterval(interval);

      // Cleanup interval on component unmount
      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [isCountdownComplete]);

  // Format numbers to always show 2 digits
  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  const handleNextAction = () => {
      setIsExiting(true);
      // Wait for the animation duration (600ms) before changing page
      setTimeout(() => {
        navigate("/welcome"); // Ensure this matches your route path
      }, 600);
  };

  // Only render on client to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div className={`countdown-container ${isExiting ? 'page-exit-active' : ''}`}>
      {/* Background Decor */}
      <div className="background-decor">
        <div className="decor-circle top-right"></div>
        <div className="decor-circle center"></div>
        <div className="decor-circle bottom-left"></div>
        <div className="grain-overlay"></div>
      </div>

      {/* Header */}
      <header className="countdown-header">
        <div className="header-content">
          <span className="material-symbols-outlined">favorite</span>
          <h2>Happy New Year 2026</h2>
          <span className="material-symbols-outlined">favorite</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="countdown-main">
        {/* Status Text */}
        <div className="status-text">
          <h2>Some moments shouldn’t be rushed. Few minutes left.</h2>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-timer">
          {/* Days */}
          <div className="time-block">
            <div className="time-value">{formatNumber(timeLeft.days)}</div>
            <span className="time-label">Days</span>
          </div>

          {/* Separator */}
          <div className="time-separator">:</div>

          {/* Hours */}
          <div className="time-block">
            <div className="time-value">{formatNumber(timeLeft.hours)}</div>
            <span className="time-label">Hours</span>
          </div>

          {/* Separator */}
          <div className="time-separator">:</div>

          {/* Minutes */}
          <div className="time-block">
            <div className="time-value">{formatNumber(timeLeft.minutes)}</div>
            <span className="time-label">Mins</span>
          </div>

          {/* Separator */}
          <div className="time-separator">:</div>

          {/* Seconds */}
          <div className="time-block">
            <div className="time-value">{formatNumber(timeLeft.seconds)}</div>
            <span className="time-label">Secs</span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="decorative-line"></div>
      </main>

      {/* Footer */}
      {isCountdownComplete && (
        <footer className="countdown-footer">
          <p>Take you're time, this is meant for you alone</p>
          <button className="enter-button" onClick={handleNextAction}>
            <span>Come in</span>
            <span className="material-symbols-outlined arrow-icon">
              arrow_forward
            </span>
          </button>
        </footer>
      )}
    </div>
  );
}
