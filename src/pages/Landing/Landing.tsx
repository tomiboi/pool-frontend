import "./Landing.css";
import { useState, useEffect} from "react";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://getlaunchlist.com/js/widget-diy.js";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
    }, []);


  return (
    <main className="phone" role="region" aria-label="Pool – Spain 2025">
      <header className="container nav" aria-label="Primary">
        <div className="brand" aria-label="Pool logo">
          <div className="logo" aria-hidden="true"><span>p</span></div>
          <div className="brand-name">pool</div>
        </div>
        <div className="nav-cta">
          <button onClick={() => setIsOpen(true)} className="btn btn-outline" data-open-modal>Join waitlist</button>
          <a className="btn btn-primary" href="#download" aria-label="Get the app">Get the app</a>
        </div>
      </header>

      <main className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <span className="badge">Save together</span>
            <h1 id="hero-title" className="headline">Pool money with friends for the stuff that matters.</h1>
            <p className="sub">Create a shared jar, invite your crew, and watch the progress fill up in real time. Pool makes group saving simple, transparent, and actually fun.</p>
            <div className="pill-row" aria-hidden="true">
              <span className="pill">No spreadsheets</span>
              <span className="pill">Instant updates</span>
              <span className="pill">iOS + Android</span>
            </div>
            <div className="hero-cta">
              <button onClick={() => setIsOpen(true)} className="btn btn-primary" data-open-modal>Join the waitlist</button>
              <a className="btn btn-outline" href="#how-it-works">See how it works</a>
            </div>
            <ul className="bullets">
              <li><div className="dot"></div><span>Transparent totals and contributions</span></li>
              <li><div className="dot"></div><span>One-tap add funds with smart receipts</span></li>
              <li><div className="dot"></div><span>Set goals, track progress, celebrate milestones</span></li>
            </ul>
          </div>

          <div className="hero-card" aria-label="Preview of jar progress">
            <svg className="jar" viewBox="0 0 420 420" role="img" aria-label="Savings jar illustration">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9fe1e0" />
                  <stop offset="100%" stopColor="#eaffff" />
                </linearGradient>
              </defs>
              <path d="M120 70h180c8 0 12 11 6 16-14 12-22 26-22 40v8c58 22 92 69 92 127 0 87-65 142-175 142S23 348 23 261c0-58 33-105 90-127v-8c0-14-8-28-21-40-6-5-1-16 6-16z" fill="#eaf6f7" stroke="#cfeaec" strokeWidth="8"/>
              <g transform="translate(40,100)">
                <rect x="10" y="170" width="320" height="90" rx="18" fill="#2bc0bf"/>
                <rect x="10" y="115" width="320" height="70" rx="18" fill="#1797a0"/>
                <rect x="10" y="70" width="320" height="55" rx="16" fill="#155c69"/>
                <rect x="10" y="50" width="320" height="22" rx="10" fill="#0e3b45"/>
              </g>
            </svg>
            <div className="pill-row" style={{ justifyContent: "center" }}>
              <span className="pill"><strong>Goal:</strong> $300</span>
              <span className="pill"><strong>Current:</strong> $225</span>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="features" aria-labelledby="features-title">
          <div className="card">
            <h3>Start a jar</h3>
            <p>Name your goal, set a target amount, and invite friends by contact or link.</p>
          </div>
          <div className="card">
            <h3>See progress fill</h3>
            <p>Every contribution updates the jar instantly—no math, no guessing.</p>
          </div>
          <div className="card">
            <h3>Celebrate together</h3>
            <p>Hit milestones, post updates, and keep everyone motivated along the way.</p>
          </div>
        </section>

        <section className="showcase" aria-label="App screens">
          <article className="shot">
            <h4>Track who’s in and how much</h4>
            <div className="img">
              <svg viewBox="0 0 640 380">
                <rect width="640" height="380" rx="20" fill="#ffffff" stroke="#dceff1"/>
                <rect x="24" y="24" width="110" height="28" rx="14" fill="#daf3f2"/>
                <rect x="144" y="24" width="140" height="28" rx="14" fill="#c8eceb"/>
                <rect x="24" y="90" width="180" height="18" rx="9" fill="#167f86" opacity=".7"/>
                <rect x="24" y="120" width="120" height="10" rx="5" fill="#dceff1"/>
                <rect x="520" y="100" width="80" height="26" rx="13" fill="#daf3f2"/>

                <rect x="24" y="170" width="180" height="18" rx="9" fill="#1797a0" opacity=".8"/>
                <rect x="24" y="200" width="120" height="10" rx="5" fill="#dceff1"/>
                <rect x="520" y="180" width="80" height="26" rx="13" fill="#daf3f2"/>

                <rect x="24" y="250" width="180" height="18" rx="9" fill="#2bc0bf"/>
                <rect x="24" y="280" width="120" height="10" rx="5" fill="#dceff1"/>
                <rect x="520" y="260" width="80" height="26" rx="13" fill="#daf3f2"/>
              </svg>
            </div>
          </article>
          <article className="shot">
            <h4>Fast, friendly contributions</h4>
            <div className="img">
              <svg viewBox="0 0 640 380">
                <rect width="640" height="380" rx="20" fill="#ffffff" stroke="#dceff1"/>
                <rect x="200" y="80" width="240" height="20" rx="10" fill="#167f86" opacity=".9"/>
                <rect x="120" y="128" width="400" height="46" rx="12" fill="#f4fbfc" stroke="#d6ecef"/>
                <rect x="250" y="200" width="140" height="44" rx="22" fill="#149296"/>
              </svg>
            </div>
          </article>
        </section>

        <section className="cta" aria-label="Join our waitlist">
          <div>
            <h3>Be first in line.</h3>
            <p className="sub" style={{ margin: "6px 0 0" }}>We’re rolling out invites soon. Add your name to grab early access and help us shape Pool.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setIsOpen(true)} data-open-modal>Join the waitlist</button>
        </section>
      </main>

      <footer className="container">
        <div>&copy; <span id="y"></span> Pool. All rights reserved.</div>
      </footer>

      <div
        className="modal-overlay"
        id="waitlist"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        style={isOpen ? {display: "flex"} : {display:"none"}}
        // aria-hidden="true"
      >
        <div className="modal">
          <header>
            <h3 id="waitlist-title">Join the Pool waitlist</h3>
            <button onClick={() => setIsOpen(false)} className="close" type="button" aria-label="Close" data-close-modal>&times;</button>
          </header>
          <div className="content">
            <form id="waitlist-form" action="https://getlaunchlist.com/s/nl9BG7" method="POST">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Alex Johnson" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="alex@email.com" autoComplete="email" required />
                <div className="helper">No spam. We’ll only email you with an invite and important updates.</div>
              </div>
              <div className="actions">
                <button className="btn btn-outline" type="button" data-close-modal>Cancel</button>
                <button className="btn btn-primary" type="submit">Join waitlist</button>
              </div>
              <p className="helper" id="form-status" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
        {/* <div class="launchlist-widget" data-key-id="nl9BG7" data-height="180px"></div> */}


      </div>
    </main>
  );
}
