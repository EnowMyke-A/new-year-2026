import React from "react";
import "./Wish.css";

export default function Wish() {
  return (
    <div className="wish-container light page-enter-active" lang="en">
      {/* Background Decorative Elements */}
      <div className="floating-elements">
        {/* Large faint heart top left */}
        <span 
          className="material-symbols-outlined filled heart-1" 
          style={{ '--tw-text-opacity': '0.1' }}
        >
          favorite
        </span>
        
        {/* Small distinct heart mid right */}
        <span 
          className="material-symbols-outlined filled heart-2" 
          style={{ '--tw-text-opacity': '0.2' }}
        >
          favorite
        </span>
        
        {/* Tiny heart near center */}
        <span 
          className="material-symbols-outlined filled heart-3" 
          style={{ '--tw-text-opacity': '0.15' }}
        >
          favorite
        </span>
        
        {/* Large fading heart bottom right */}
        <span 
          className="material-symbols-outlined filled heart-4" 
          style={{ '--tw-text-opacity': '0.05' }}
        >
          favorite
        </span>
        
        {/* Medium heart bottom left */}
        <span 
          className="material-symbols-outlined filled heart-5" 
          style={{ '--tw-text-opacity': '0.05' }}
        >
          favorite
        </span>
        
        {/* Extra tiny specks */}
        <div className="speck speck-1"></div>
        <div className="speck speck-2"></div>
        <div className="speck speck-3"></div>
      </div>

      {/* Main Content */}
      <main className="wish-main">
        <div className="wish-content">
          <h1 className="wish-title">
            Happy New Year<br/>
            Baby — Finally. <span className="heart-emoji">🤍</span>
          </h1>
          <div className="wish-divider"></div>
          <div className="peak-card">
            <div className="card-bg"></div>
            <div className="card-content">
              <span className="material-symbols-outlined heart-icon">favorite</span>
              <p className="quote">
                My wish for 2026 is simply more of us.
              </p>
              <div className="divider">
                <div className="line"></div>
                <p className="caption">Yours Always</p>
                <div className="line"></div>
              </div>
            </div>
            </div>
        </div>
      </main>

      {/* Footer Spacer */}
      <div className="wish-footer-spacer"></div>
    </div>
  );
}