import React from 'react';

const MandalaPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap');

        .mandala-base {
          background: #F4F4F4;
          color: #1A1A1A;
          font-family: 'Space Mono', monospace;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .mandala-base .lp-nav {
          position: absolute;
          top: 0; right: 0;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          z-index: 10;
        }

        .mandala-base .lp-nav a {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: #1A1A1A;
          writing-mode: horizontal-tb;
        }

        .mandala-base .lp-nav-line {
          width: 40px;
          height: 1px;
          background: #1A1A1A;
        }

        .mandala-base .lp-hero {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .mandala-base .mandala-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 480px;
          height: 480px;
          opacity: 0.12;
          animation: mandala-rotate 120s linear infinite;
        }

        @keyframes mandala-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .mandala-base .brutalist-block {
          position: relative;
          z-index: 2;
          background: #1A1A1A;
          padding: 32px 40px 32px 32px;
          max-width: 520px;
          margin-left: 0;
          border-right: 6px solid #C8C8C8;
        }

        .mandala-base .hero-label {
          font-size: 9px;
          letter-spacing: 0.25em;
          color: #C8C8C8;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .mandala-base .hero-title {
          font-family: 'Bebas Neue', 'Impact', sans-serif;
          font-size: clamp(42px, 7vw, 80px);
          line-height: 0.92;
          color: #F4F4F4;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
        }

        .mandala-base .hero-title em {
          font-style: normal;
          color: #C8C8C8;
          display: block;
          font-size: 0.6em;
        }

        .mandala-base .hero-meta {
          font-size: 9px;
          color: #888;
          letter-spacing: 0.15em;
          line-height: 2;
          border-top: 0.5px solid #333;
          padding-top: 16px;
          margin-top: 4px;
        }

        .mandala-base .cta-btn {
          display: inline-block;
          margin-top: 24px;
          padding: 12px 24px;
          border: 1.5px solid #F4F4F4;
          color: #F4F4F4;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          background: transparent;
          transition: background 0.15s, color 0.15s;
        }

        .mandala-base .cta-btn:hover {
          background: #F4F4F4;
          color: #1A1A1A;
        }

        .mandala-base .section-divider {
          height: 4px;
          background: #1A1A1A;
          width: 100%;
        }

        .mandala-base .product-section {
          padding: 48px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-bottom: 2px solid #1A1A1A;
        }

        @media (max-width: 768px) {
          .mandala-base .product-section {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .mandala-base .product-left { border-right: none; padding-right: 0; }
          .mandala-base .product-right { padding-left: 0; }
          .mandala-base .mandala-showcase { grid-template-columns: 1fr !important; }
        }

        .mandala-base .product-left {
          border-right: 2px solid #1A1A1A;
          padding-right: 32px;
        }

        .mandala-base .product-right {
          padding-left: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mandala-base .section-num {
          font-size: 9px;
          letter-spacing: 0.2em;
          color: #C8C8C8;
          display: block;
          margin-bottom: 8px;
        }

        .mandala-base .section-heading {
          font-family: 'Bebas Neue', 'Impact', sans-serif;
          font-size: 36px;
          line-height: 1;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .mandala-base .section-body {
          font-size: 11px;
          line-height: 1.8;
          color: #555;
          max-width: 360px;
        }

        .mandala-base .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #1A1A1A;
          border: 1px solid #1A1A1A;
          margin-top: 24px;
        }

        .mandala-base .spec-cell {
          background: #F4F4F4;
          padding: 16px;
        }

        .mandala-base .spec-label {
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C8C8C8;
          display: block;
          margin-bottom: 4px;
        }

        .mandala-base .spec-val {
          font-size: 13px;
          font-weight: 700;
          color: #1A1A1A;
        }

        .mandala-base .mandala-showcase {
          padding: 48px 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: #C8C8C8;
          border-bottom: 2px solid #1A1A1A;
        }

        .mandala-base .mandala-card {
          background: #F4F4F4;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .mandala-base .mandala-card svg {
          opacity: 0.7;
        }

        .mandala-base .card-label {
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          text-align: center;
        }

        .mandala-base .ticker-wrap {
          background: #1A1A1A;
          overflow: hidden;
          white-space: nowrap;
          padding: 12px 0;
          border-top: 2px solid #C8C8C8;
        }

        .mandala-base .ticker-inner {
          display: inline-block;
          animation: mandala-ticker 30s linear infinite;
        }

        @keyframes mandala-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .mandala-base .ticker-text {
          font-size: 9px;
          letter-spacing: 0.25em;
          color: #C8C8C8;
          text-transform: uppercase;
          padding: 0 32px;
        }

        .mandala-base .ticker-dot {
          color: #555;
        }

        .mandala-base .footer-bar {
          background: #F4F4F4;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 0.5px solid #C8C8C8;
        }

        .mandala-base .footer-text {
          font-size: 8px;
          letter-spacing: 0.15em;
          color: #C8C8C8;
          text-transform: uppercase;
        }

        .mandala-base .redacted {
          background: #1A1A1A;
          color: #1A1A1A;
          padding: 0 4px;
          user-select: none;
        }
      `}</style>

      <div className="mandala-base">
        <nav className="lp-nav">
          <a href="#">About</a>
          <div className="lp-nav-line"></div>
          <a href="#">Download</a>
          <div className="lp-nav-line"></div>
          <a href="#">Contact</a>
        </nav>

        <section className="lp-hero">
          <svg className="mandala-bg" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(240,240)" stroke="#1A1A1A" fill="none" strokeWidth="0.5">
              <circle r="220"/><circle r="180"/><circle r="140"/><circle r="100"/><circle r="60"/><circle r="20"/>
              <g id="petals">
                <ellipse rx="30" ry="100" transform="rotate(0)"/>
                <ellipse rx="30" ry="100" transform="rotate(30)"/>
                <ellipse rx="30" ry="100" transform="rotate(60)"/>
                <ellipse rx="30" ry="100" transform="rotate(90)"/>
                <ellipse rx="30" ry="100" transform="rotate(120)"/>
                <ellipse rx="30" ry="100" transform="rotate(150)"/>
                <ellipse rx="30" ry="100" transform="rotate(180)"/>
                <ellipse rx="30" ry="100" transform="rotate(210)"/>
                <ellipse rx="30" ry="100" transform="rotate(240)"/>
                <ellipse rx="30" ry="100" transform="rotate(270)"/>
                <ellipse rx="30" ry="100" transform="rotate(300)"/>
                <ellipse rx="30" ry="100" transform="rotate(330)"/>
              </g>
              <line x1="-220" y1="0" x2="220" y2="0" strokeWidth="0.3"/>
              <line x1="0" y1="-220" x2="0" y2="220" strokeWidth="0.3"/>
              <line x1="-155" y1="-155" x2="155" y2="155" strokeWidth="0.3"/>
              <line x1="155" y1="-155" x2="-155" y2="155" strokeWidth="0.3"/>
              <polygon points="0,-180 156,90 -156,90" strokeWidth="0.7"/>
              <polygon points="0,180 156,-90 -156,-90" strokeWidth="0.7"/>
              <polygon points="0,-120 104,60 -104,60" strokeWidth="0.5"/>
              <polygon points="0,120 104,-60 -104,-60" strokeWidth="0.5"/>
              <circle r="8" cx="0" cy="-140"/><circle r="8" cx="121" cy="70"/><circle r="8" cx="-121" cy="70"/>
              <circle r="8" cx="0" cy="140"/><circle r="8" cx="-121" cy="-70"/><circle r="8" cx="121" cy="-70"/>
              <circle r="4" cx="0" cy="-180"/><circle r="4" cx="156" cy="90"/><circle r="4" cx="-156" cy="90"/>
              <circle r="4" cx="0" cy="180"/><circle r="4" cx="-156" cy="-90"/><circle r="4" cx="156" cy="-90"/>
            </g>
          </svg>

          <div className="brutalist-block">
            <span className="hero-label">— Object Class: OPEN / Edition 2024</span>
            <h1 className="hero-title">
              33 Hand-Drawn<br/>
              <em>Affirmation</em>
              Mandalas
            </h1>
            <div className="hero-meta">
              COORDINATES: 48.3794° N, 31.1656° E<br/>
              FORMAT: Digital Download / PDF + SVG<br/>
              STATUS: <span style={{color: '#F4F4F4'}}>ACTIVE</span>
            </div>
            <a className="cta-btn" href="#">↓ Digital Download</a>
          </div>
        </section>

        <div className="section-divider"></div>

        <section className="product-section">
          <div className="product-left">
            <span className="section-num">// 001</span>
            <h2 className="section-heading">Technical<br/>Specification</h2>
            <p className="section-body">
              Each mandala rendered as a precision blueprint — not spiritual artifact but cognitive instrument. Fine-line geometry at 0.5px weight. Laser-etched aesthetic. Sacred geometry meets engineering schematic.
            </p>
            <div className="spec-grid">
              <div className="spec-cell">
                <span className="spec-label">Quantity</span>
                <span className="spec-val">33 units</span>
              </div>
              <div className="spec-cell">
                <span className="spec-label">Format</span>
                <span className="spec-val">PDF / SVG</span>
              </div>
              <div className="spec-cell">
                <span className="spec-label">Resolution</span>
                <span className="spec-val">300 DPI</span>
              </div>
              <div className="spec-cell">
                <span className="spec-label">Delivery</span>
                <span className="spec-val">Instant</span>
              </div>
            </div>
          </div>
          <div className="product-right">
            <span className="section-num">// 002</span>
            <h2 className="section-heading">Function</h2>
            <p className="section-body" style={{marginBottom: '16px'}}>
              Designed as cognitive anchors. Each glyph corresponds to a specific affirmative state — rendered in geometry because the mind responds to structure, not sentiment.
            </p>
            <p className="section-body">
              Hand-drawn source material. Digitized with precision. The human trace preserved inside the technical frame.
            </p>
          </div>
        </section>

        <section className="mandala-showcase">
          <div className="mandala-card">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="0.6" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(50,50)">
                <circle r="45"/><circle r="30"/><circle r="15"/>
                <polygon points="0,-40 34.6,20 -34.6,20" strokeWidth="0.5"/>
                <polygon points="0,40 34.6,-20 -34.6,-20" strokeWidth="0.5"/>
                <line x1="-45" y1="0" x2="45" y2="0" strokeWidth="0.3"/>
                <line x1="0" y1="-45" x2="0" y2="45" strokeWidth="0.3"/>
              </g>
            </svg>
            <span className="card-label">Unit 001<br/>Clarity</span>
          </div>
          <div className="mandala-card">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="0.6" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(50,50)">
                <circle r="45"/><circle r="32"/><circle r="18"/><circle r="6"/>
                <ellipse rx="15" ry="40" transform="rotate(0)"/>
                <ellipse rx="15" ry="40" transform="rotate(45)"/>
                <ellipse rx="15" ry="40" transform="rotate(90)"/>
                <ellipse rx="15" ry="40" transform="rotate(135)"/>
              </g>
            </svg>
            <span className="card-label">Unit 017<br/>Expansion</span>
          </div>
          <div className="mandala-card">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="0.6" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(50,50)">
                <circle r="45"/><circle r="28"/>
                <polygon points="0,-45 39,22.5 -39,22.5" strokeWidth="0.8"/>
                <polygon points="0,45 39,-22.5 -39,-22.5" strokeWidth="0.8"/>
                <polygon points="0,-28 24.2,14 -24.2,14" strokeWidth="0.5"/>
                <polygon points="0,28 24.2,-14 -24.2,-14" strokeWidth="0.5"/>
                <circle r="4" cx="0" cy="-28"/>
                <circle r="4" cx="24.2" cy="14"/>
                <circle r="4" cx="-24.2" cy="14"/>
              </g>
            </svg>
            <span className="card-label">Unit 033<br/>Integration</span>
          </div>
        </section>

        <div className="ticker-wrap">
          <div className="ticker-inner">
            <span className="ticker-text">Coordinates: 48.3794° N, 31.1656° E</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Temporal Shift: UTC+2 / Epoch 2024.001</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Object: 33 Units / Hand-Drawn / Digitized</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Status: Digital Download Active</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Classification: <span className="redacted">REDACTED</span></span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Coordinates: 48.3794° N, 31.1656° E</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Temporal Shift: UTC+2 / Epoch 2024.001</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Object: 33 Units / Hand-Drawn / Digitized</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Status: Digital Download Active</span>
            <span className="ticker-text ticker-dot">◆</span>
            <span className="ticker-text">Classification: <span className="redacted">REDACTED</span></span>
            <span className="ticker-text ticker-dot">◆</span>
          </div>
        </div>

        <div className="footer-bar">
          <span className="footer-text">The Mandala Project / <span className="redacted">███</span> Dept.</span>
          <span className="footer-text">All geometry is intentional</span>
        </div>
      </div>
    </>
  );
};

export default MandalaPage;
