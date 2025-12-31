import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you use react-router
import "./Message.css";

export default function Message() {
  const navigate = useNavigate();
  const [step, setStep] = useState(-1);
  const [isExiting, setIsExiting] = useState(false); // New state for transition
  const scrollRef = useRef(null);
  const lastRevealRef = useRef(null);

  const TOTAL_STEPS = 10;

  useEffect(() => {
    if (step === -1) {
      const startTimer = setTimeout(() => setStep(0), 800);
      return () => clearTimeout(startTimer);
    }
    if (step === 8) {
      const timer = setTimeout(() => setStep(9), 3000); 
      return () => clearTimeout(timer);
    }
    if (lastRevealRef.current) {
      lastRevealRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [step]);

  // Handle Transition logic
  const handleNextAction = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(prev => prev + 1);
    } else {
      // Trigger the exit transition
      setIsExiting(true);
      // Wait for the animation duration (600ms) before changing page
      setTimeout(() => {
        navigate("/wish"); // Ensure this matches your route path
      }, 600);
    }
  };

  return (
   <div className={`message-container light ${isExiting ? 'page-exit-active' : ''}`} lang="en">
      <div className="floating-hearts">
        <span className="material-symbols-outlined heart heart-1">favorite</span>
        <span className="material-symbols-outlined heart heart-2">favorite</span>
        <span className="material-symbols-outlined heart heart-3">favorite_border</span>
        <span className="material-symbols-outlined heart heart-4">volunteer_activism</span>
        <span className="material-symbols-outlined heart heart-5">favorite</span>
        <span className="material-symbols-outlined heart heart-6">favorite</span>
      </div>

      <div className="app-bar">
        <h2>New Year 2026</h2>
        <button className="music-button" aria-label="Toggle music">
          <span className="material-symbols-outlined">music_note</span>
        </button>
      </div>

      <main className="main-content" ref={scrollRef}>
        <div className="hero">
          <div className="icon-wrapper">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <h1>My Forever...</h1>
          <div className="divider"></div>
        </div>

        <div className="message-body">
          {step >= 0 && (
            <article className="group individual-reveal" ref={step === 0 ? lastRevealRef : null}>
              <p>
                If there’s one thing I learned from <span className="highlight-text">2025</span>, it’s how much love can stretch — and still not break.
              </p>
            </article>
          )}

          {step >= 1 && (
            <article className="group individual-reveal" ref={step === 1 ? lastRevealRef : null}>
              <p>
                The past year wasn’t mostly easy for us. Distance tested us. Silence tested us. Some days felt heavier than others. 
                But even in those moments, <span className="highlight-text">you never stopped being you</span> — steady, thoughtful, quietly strong in ways you probably don’t even notice.
              </p>
            </article>
          )}

          {step >= 2 && (
            <article className="group individual-reveal" ref={step === 2 ? lastRevealRef : null}>
              <p>
                I’ve watched you carry more than you should have to, and still show up with <span className="highlight-text">grace</span> like your name says. 
                I’ve watched you choose patience when things were unclearand, softness when it would have been easier to shut down. That stays with me.
              </p>
            </article>
          )}

          {step >= 3 && (
            <article className="group individual-reveal" ref={step === 3 ? lastRevealRef : null}>
              <p>
                You have this calm way of existing that makes space feel safer. And when you open up — when you laugh, talk endlessly, or just let yourself be <span className="highlight-text">playful</span> — it reminds me why loving you has never felt like work, even when life made things complicated.
              </p>
            </article>
          )}

          {step >= 4 && (
            <article className="group individual-reveal" ref={step === 4 ? lastRevealRef : null}>
              <p>
                These two and a half years haven’t been perfect. But they’ve been <span className="highlight-text">real</span>. And worth choosing, again and again.
              </p>
            </article>
          )}

          {step >= 5 && (
            <article className="group individual-reveal" ref={step === 5 ? lastRevealRef : null}>
              <p>
                As <span className="highlight-text">2026</span> begins, I don’t promise perfection. I promise presence and intention. 
                I promise to keep learning how to <span className="highlight-text">love you better</span> — quietly, consistently, honestly.
              </p>
            </article>
          )}

          {step >= 6 && (
            <article className="group individual-reveal" ref={step === 6 ? lastRevealRef : null}>
              <p>
                Thank you for being <span className="highlight-text">my person</span> in the ways that matter most. 
                Thank you for staying soft in a world that hasn’t always been gentle.
              </p>
            </article>
          )}

          {step >= 7 && (
            <>
              <article className="group individual-reveal" ref={step === 7 ? lastRevealRef : null}>
                <p>
                  You're my favorite human being in the world. <br />
                  And <span className="highlight-text">I love you</span> so very much. Always.
                </p>
              </article>
              <div className="sign-off-container individual-reveal">
                <p className="signature-text">Forever yours,</p>
                <div className="signature">
                  <span className="material-symbols-outlined">signature</span>
                  <span>Enow Myke-Austine</span>
                </div>
              </div>
            </>
          )}

         {step === 8 && (
            <div className="loading-section individual-reveal" ref={lastRevealRef}>
              <div className="spinner"></div>
              <p className="loading-text">Just a moment...</p>
            </div>
          )}

          {step >= 9 && (
            <article className="group flirt individual-reveal" ref={lastRevealRef}>
              <p>
                I know this feels like the kind of letter that should end softly... 
                But you didn’t really think I’d stop here… did you?
                <br /><br />
                I still crave you... And no, not in an innocent way 😈.
              </p>
            </article>
          )}
        </div>
      </main>

      {/* Hide footer button during the "loading" phase (step 8) to sell the effect */}
      <footer className="message-footer">
        {step !== 8 && (
          <button
            className="action-button"
            onClick={handleNextAction}
          >
            {step < 7 ? "Continue Reading" : step < 9 ? "Seal this moment" : "Now we seal it"}
          </button>
        )}
        <p className="save-text">{step === 8 ? "Please wait..." : "Every word is for you"}</p>
      </footer>
    </div>
  );
}