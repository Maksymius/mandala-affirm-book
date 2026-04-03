import React from 'react';

const MandalaLuxuryPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Cinzel+Decorative:wght@400;700&family=Noto+Sans+Devanagari:wght@300;400&display=swap');

        .mandala-luxury-base * { margin: 0; padding: 0; box-sizing: border-box; }

        .mandala-luxury-base {
          background: linear-gradient(135deg, #0a0008 0%, #1a0025 30%, #0d0018 60%, #120008 100%);
          min-height: 100vh;
          overflow-x: hidden;
          color: #f0e6d3;
          font-family: 'Cormorant Garamond', serif;
          position: relative;
        }

        .mandala-luxury-base .noise {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.3;
        }

        .mandala-luxury-base .orb1 {
          position: absolute; top: -200px; right: -200px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,100,200,0.15) 0%, rgba(150,0,255,0.08) 50%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: float1 8s ease-in-out infinite;
        }
        .mandala-luxury-base .orb2 {
          position: absolute; bottom: -150px; left: -150px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,160,50,0.12) 0%, rgba(255,50,100,0.06) 50%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: float2 10s ease-in-out infinite;
        }
        @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(-30px,40px) scale(1.1) } }
        @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(40px,-30px) scale(1.08) } }

        .mandala-luxury-base nav {
          position: relative; z-index: 10;
          padding: 24px 40px;
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid rgba(255,180,100,0.15);
        }
        .mandala-luxury-base .nav-logo {
          font-family: 'Cinzel Decorative', serif;
          font-size: 13px; letter-spacing: 0.3em;
          background: linear-gradient(90deg,#ffd700,#ff9500,#ff5080,#c060ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .mandala-luxury-base .nav-links { display: flex; gap: 32px; }
        .mandala-luxury-base .nav-links a {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px; letter-spacing: 0.15em; color: rgba(240,230,211,0.6);
          text-decoration: none; transition: color 0.3s;
        }
        .mandala-luxury-base .nav-links a:hover { color: #ffd700; }
        .mandala-luxury-base .nav-cta {
          padding: 10px 24px;
          background: linear-gradient(135deg,#ff6eb0,#c060ff,#6090ff);
          border: none; border-radius: 100px;
          font-family: 'Cinzel Decorative', serif; font-size: 10px; letter-spacing: 0.15em;
          color: #fff; cursor: pointer;
          box-shadow: 0 0 30px rgba(192,96,255,0.4);
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .mandala-luxury-base .nav-cta:hover { box-shadow: 0 0 50px rgba(192,96,255,0.7); transform: scale(1.03); }

        .mandala-luxury-base .hero {
          position: relative; z-index: 2;
          padding: 60px 40px 80px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
          overflow: hidden;
        }

        .mandala-luxury-base .devanagari-top {
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 13px; letter-spacing: 0.3em;
          color: rgba(255,215,0,0.5);
          margin-bottom: 20px;
        }

        .mandala-luxury-base .mandala-hero {
          position: relative;
          width: 340px; height: 340px;
          margin: 0 auto 40px;
        }

        .mandala-luxury-base .mandala-hero svg {
          width: 100%; height: 100%;
          animation: spin-slow 60s linear infinite;
          filter: drop-shadow(0 0 30px rgba(255,100,200,0.3)) drop-shadow(0 0 60px rgba(150,50,255,0.2));
        }

        .mandala-luxury-base .mandala-inner {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 200px; height: 200px;
        }
        .mandala-luxury-base .mandala-inner svg {
          animation: spin-slow 30s linear infinite reverse;
          filter: drop-shadow(0 0 15px rgba(255,200,50,0.5));
        }

        @keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }

        .mandala-luxury-base .hero h1 {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(28px, 5vw, 56px);
          line-height: 1.1;
          font-weight: 700;
          background: linear-gradient(135deg,#ffd700 0%,#ff9500 25%,#ff5080 50%,#c060ff 75%,#6090ff 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 8px;
          filter: drop-shadow(0 0 40px rgba(255,150,0,0.3));
        }

        .mandala-luxury-base .hero-sub-dev {
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 18px;
          color: rgba(255,180,100,0.7);
          letter-spacing: 0.2em;
          margin-bottom: 16px;
        }

        .mandala-luxury-base .hero p {
          font-size: 18px; font-style: italic; font-weight: 300;
          color: rgba(240,230,211,0.65);
          max-width: 520px; line-height: 1.7;
          margin-bottom: 40px;
        }

        .mandala-luxury-base .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }

        .mandala-luxury-base .btn-primary {
          padding: 16px 40px;
          background: linear-gradient(135deg,#ff6eb0,#c060ff,#6090ff);
          border: none; border-radius: 100px;
          font-family: 'Cinzel Decorative', serif; font-size: 11px; letter-spacing: 0.2em;
          color: #fff; cursor: pointer;
          box-shadow: 0 8px 40px rgba(192,96,255,0.5), 0 0 80px rgba(255,100,200,0.2);
          transition: all 0.3s;
        }
        .mandala-luxury-base .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 50px rgba(192,96,255,0.7), 0 0 100px rgba(255,100,200,0.3); }

        .mandala-luxury-base .btn-secondary {
          padding: 16px 40px;
          background: transparent;
          border: 1px solid rgba(255,180,100,0.4);
          border-radius: 100px;
          font-family: 'Cormorant Garamond', serif; font-size: 14px; letter-spacing: 0.15em;
          color: rgba(255,215,0,0.8); cursor: pointer;
          transition: all 0.3s;
        }
        .mandala-luxury-base .btn-secondary:hover { border-color: rgba(255,215,0,0.8); background: rgba(255,215,0,0.05); }

        .mandala-luxury-base .divider-dev {
          position: relative; z-index: 2;
          text-align: center; padding: 16px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 22px; letter-spacing: 0.4em;
          color: rgba(255,180,100,0.25);
          border-top: 1px solid rgba(255,180,100,0.08);
          border-bottom: 1px solid rgba(255,180,100,0.08);
        }

        .mandala-luxury-base .features {
          position: relative; z-index: 2;
          padding: 80px 40px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
          max-width: 1100px; margin: 0 auto;
        }

        @media (max-width: 768px) {
          .mandala-luxury-base .features { grid-template-columns: 1fr; }
          .mandala-luxury-base .mandala-grid { grid-template-columns: 1fr 1fr !important; }
        }

        .mandala-luxury-base .feat-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,180,100,0.15);
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
          transition: all 0.4s;
          position: relative; overflow: hidden;
        }
        .mandala-luxury-base .feat-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent);
        }
        .mandala-luxury-base .feat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,150,100,0.3);
          box-shadow: 0 20px 60px rgba(150,50,255,0.15);
        }

        .mandala-luxury-base .feat-symbol {
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 36px;
          background: linear-gradient(135deg,#ffd700,#ff9500,#ff5080);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 16px; display: block;
        }

        .mandala-luxury-base .feat-card h3 {
          font-family: 'Cinzel Decorative', serif;
          font-size: 13px; letter-spacing: 0.2em;
          color: rgba(255,215,0,0.9);
          margin-bottom: 12px;
        }

        .mandala-luxury-base .feat-card p {
          font-size: 14px; font-style: italic;
          color: rgba(240,230,211,0.5); line-height: 1.7;
        }

        .mandala-luxury-base .sticky-section {
          position: relative; z-index: 2;
          padding: 0 40px 80px;
          max-width: 1100px; margin: 0 auto;
        }

        .mandala-luxury-base .sticky-heading {
          position: sticky; top: 20px;
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(20px, 3vw, 36px);
          background: linear-gradient(90deg,#ffd700,#ff5080,#c060ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          padding: 20px 0;
          backdrop-filter: blur(10px);
          z-index: 5;
          letter-spacing: 0.05em;
        }

        .mandala-luxury-base .mandala-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
          margin-top: 20px;
        }

        .mandala-luxury-base .m-item {
          aspect-ratio: 1;
          background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,180,100,0.12);
          border-radius: 20px;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
          cursor: pointer; transition: all 0.4s; position: relative; overflow: hidden;
        }
        .mandala-luxury-base .m-item:hover {
          border-color: rgba(255,150,200,0.4);
          box-shadow: 0 0 40px rgba(192,96,255,0.2);
          transform: scale(1.03);
        }
        .mandala-luxury-base .m-item svg {
          animation: spin-slow 20s linear infinite;
          opacity: 0.8;
          filter: drop-shadow(0 0 10px rgba(255,180,100,0.4));
        }
        .mandala-luxury-base .m-item:hover svg { opacity: 1; }

        .mandala-luxury-base .m-label {
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 12px; color: rgba(255,215,0,0.5);
          letter-spacing: 0.1em;
        }
        .mandala-luxury-base .m-num {
          position: absolute; top: 12px; right: 14px;
          font-family: 'Cormorant Garamond', serif; font-size: 11px;
          color: rgba(255,180,100,0.3); letter-spacing: 0.1em;
        }

        .mandala-luxury-base .testimonial {
          position: relative; z-index: 2;
          padding: 80px 40px;
          text-align: center;
          border-top: 1px solid rgba(255,180,100,0.08);
        }

        .mandala-luxury-base .test-dev {
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 32px; letter-spacing: 0.3em;
          background: linear-gradient(90deg,#ffd700,#ff9500,#ff5080,#c060ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 24px; display: block;
        }

        .mandala-luxury-base .test-quote {
          font-size: 22px; font-style: italic; font-weight: 300;
          color: rgba(240,230,211,0.7);
          max-width: 600px; margin: 0 auto 16px; line-height: 1.6;
        }

        .mandala-luxury-base .test-author {
          font-family: 'Cinzel Decorative', serif;
          font-size: 10px; letter-spacing: 0.3em;
          color: rgba(255,150,100,0.5);
        }

        .mandala-luxury-base .cta-section {
          position: relative; z-index: 2;
          padding: 80px 40px;
          text-align: center;
          background: linear-gradient(180deg, transparent, rgba(150,0,255,0.05), transparent);
        }

        .mandala-luxury-base .cta-section h2 {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(20px, 4vw, 42px);
          background: linear-gradient(135deg,#ffd700,#ff9500,#ff5080,#c060ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 12px; letter-spacing: 0.05em;
        }
        .mandala-luxury-base .cta-dev {
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 16px; color: rgba(255,180,100,0.4);
          letter-spacing: 0.3em; margin-bottom: 40px; display: block;
        }

        .mandala-luxury-base .price-tag {
          display: inline-block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px; font-weight: 300;
          background: linear-gradient(135deg,#ffd700,#ff9500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 8px;
        }
        .mandala-luxury-base .price-old {
          font-size: 18px; color: rgba(255,255,255,0.25);
          text-decoration: line-through; margin-left: 8px;
          font-family: 'Cormorant Garamond', serif;
        }

        .mandala-luxury-base .price-note {
          font-size: 13px; font-style: italic;
          color: rgba(240,230,211,0.4); margin-bottom: 36px;
        }

        .mandala-luxury-base .ticker {
          position: relative; z-index: 2;
          overflow: hidden; white-space: nowrap;
          padding: 14px 0;
          background: linear-gradient(90deg, rgba(255,100,180,0.1), rgba(150,50,255,0.1), rgba(255,100,180,0.1));
          border-top: 1px solid rgba(255,100,200,0.2);
          border-bottom: 1px solid rgba(255,100,200,0.2);
        }
        .mandala-luxury-base .ticker-inner {
          display: inline-block;
          animation: luxury-ticker 25s linear infinite;
        }
        @keyframes luxury-ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .mandala-luxury-base .ticker span {
          font-family: 'Noto Sans Devanagari', sans-serif;
          font-size: 13px; letter-spacing: 0.3em;
          color: rgba(255,180,100,0.5);
          padding: 0 32px;
        }
        .mandala-luxury-base .ticker em {
          font-style: normal;
          background: linear-gradient(90deg,#ffd700,#ff9500,#ff5080,#c060ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          padding: 0 16px; font-size: 16px;
        }

        .mandala-luxury-base footer {
          position: relative; z-index: 2;
          padding: 24px 40px;
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px solid rgba(255,180,100,0.08);
        }
        .mandala-luxury-base footer span {
          font-size: 11px; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
        }
      `}</style>
      
      <div className="mandala-luxury-base">
        <div className="noise"></div>
        <div className="orb1"></div>
        <div className="orb2"></div>

        <nav>
          <div className="nav-logo">✦ Mandala Project</div>
          <div className="nav-links">
            <a href="#">Колекція</a>
            <a href="#">Про нас</a>
            <a href="#practice">Практика</a>
          </div>
          <button className="nav-cta">Завантажити ↓</button>
        </nav>

        <section className="hero">
          <div className="devanagari-top">ॐ मण्डल संग्रह ॐ</div>

          <div className="mandala-hero">
            <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" stopOpacity="0.8"/>
                  <stop offset="35%" stopColor="#ff9500" stopOpacity="0.7"/>
                  <stop offset="65%" stopColor="#ff5080" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#c060ff" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6090ff" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#c060ff" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#ffd700" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
              <g transform="translate(170,170)" stroke="url(#g1)" fill="none" strokeWidth="0.8">
                <circle r="160" strokeWidth="0.5" stroke="url(#g2)"/>
                <circle r="130"/>
                <circle r="100" stroke="url(#g2)"/>
                <circle r="70"/>
                <circle r="40" stroke="url(#g2)"/>
                <circle r="12"/>
                <g>
                  <ellipse rx="25" ry="80" transform="rotate(0)"/>
                  <ellipse rx="25" ry="80" transform="rotate(30)"/>
                  <ellipse rx="25" ry="80" transform="rotate(60)"/>
                  <ellipse rx="25" ry="80" transform="rotate(90)"/>
                  <ellipse rx="25" ry="80" transform="rotate(120)"/>
                  <ellipse rx="25" ry="80" transform="rotate(150)"/>
                </g>
                <g stroke="url(#g2)" strokeWidth="0.5">
                  <ellipse rx="15" ry="55" transform="rotate(15)"/>
                  <ellipse rx="15" ry="55" transform="rotate(45)"/>
                  <ellipse rx="15" ry="55" transform="rotate(75)"/>
                  <ellipse rx="15" ry="55" transform="rotate(105)"/>
                  <ellipse rx="15" ry="55" transform="rotate(135)"/>
                  <ellipse rx="15" ry="55" transform="rotate(165)"/>
                </g>
                <polygon points="0,-130 112.6,65 -112.6,65" strokeWidth="0.7"/>
                <polygon points="0,130 112.6,-65 -112.6,-65" strokeWidth="0.7" stroke="url(#g2)"/>
                <polygon points="0,-80 69.3,40 -69.3,40" strokeWidth="0.5"/>
                <polygon points="0,80 69.3,-40 -69.3,-40" strokeWidth="0.5" stroke="url(#g2)"/>
                <line x1="-160" y1="0" x2="160" y2="0" strokeWidth="0.3" stroke="url(#g2)"/>
                <line x1="0" y1="-160" x2="0" y2="160" strokeWidth="0.3"/>
                <line x1="-113" y1="-113" x2="113" y2="113" strokeWidth="0.3" stroke="url(#g2)"/>
                <line x1="113" y1="-113" x2="-113" y2="113" strokeWidth="0.3"/>
                <line x1="-160" y1="0" x2="160" y2="0" strokeWidth="0.2" stroke="url(#g2)" transform="rotate(30)"/>
                <line x1="-160" y1="0" x2="160" y2="0" strokeWidth="0.2" transform="rotate(60)"/>
                <circle r="5" cx="0" cy="-130" fill="url(#g1)"/>
                <circle r="5" cx="112.6" cy="65" fill="url(#g1)"/>
                <circle r="5" cx="-112.6" cy="65" fill="url(#g1)"/>
                <circle r="5" cx="0" cy="130" fill="url(#g2)"/>
                <circle r="5" cx="-112.6" cy="-65" fill="url(#g2)"/>
                <circle r="5" cx="112.6" cy="-65" fill="url(#g2)"/>
                <circle r="3" cx="0" cy="-100"/>
                <circle r="3" cx="86.6" cy="50"/>
                <circle r="3" cx="-86.6" cy="50"/>
                <circle r="3" cx="0" cy="100" stroke="url(#g2)"/>
                <circle r="3" cx="-86.6" cy="-50" stroke="url(#g2)"/>
                <circle r="3" cx="86.6" cy="-50" stroke="url(#g2)"/>
              </g>
            </svg>
            <div className="mandala-inner">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffd700"/>
                    <stop offset="50%" stopColor="#ff9500"/>
                    <stop offset="100%" stopColor="#ff5080"/>
                  </linearGradient>
                </defs>
                <g transform="translate(100,100)" stroke="url(#g3)" fill="none" strokeWidth="1">
                  <circle r="90"/><circle r="65"/><circle r="40"/><circle r="18"/>
                  <polygon points="0,-65 56.3,32.5 -56.3,32.5"/>
                  <polygon points="0,65 56.3,-32.5 -56.3,-32.5"/>
                  <circle r="8" cx="0" cy="-65" fill="#ffd700" fillOpacity="0.6"/>
                  <circle r="8" cx="56.3" cy="32.5" fill="#ff9500" fillOpacity="0.6"/>
                  <circle r="8" cx="-56.3" cy="32.5" fill="#ff5080" fillOpacity="0.6"/>
                  <circle r="4" fill="#fff" fillOpacity="0.8"/>
                </g>
              </svg>
            </div>
          </div>

          <h1>33 Мандали<br/>Афірмацій</h1>
          <div className="hero-sub-dev">सकारात्मकता · शांति · प्रेम</div>
          <p>Ручна робота. Цифрова точність. Кожна мандала — це вхід у стан, який ти шукав.</p>

          <div className="hero-btns">
            <button className="btn-primary">✦ Отримати колекцію</button>
            <button className="btn-secondary">Переглянути зразки</button>
          </div>
        </section>

        <div className="divider-dev">ॐ · श्री · ॐ · श्री · ॐ · श्री · ॐ</div>

        <section style={{ display: 'flex', justifyContent: 'center', padding: '60px 20px', position: 'relative', zIndex: 2 }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', height: '500px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(150,50,255,0.15)', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,180,100,0.15)' }}>
            <iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 }} src="https://online.fliphtml5.com/paunb/mahendi_mandala_v4/" title="Mandala Affirmations for Emotional Balance & Self-Reflection" seamless="seamless" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen={true}></iframe>
          </div>
        </section>

        <section className="features">
          <div className="feat-card">
            <span className="feat-symbol">ॐ</span>
            <h3>Sacred Origin</h3>
            <p>Кожен елемент побудований на основі ведичної символіки та золотого перетину</p>
          </div>
          <div className="feat-card">
            <span className="feat-symbol">श्री</span>
            <h3>Hand-Drawn</h3>
            <p>Намальовано вручну — жива лінія, дихання художника, збережені в цифровій формі</p>
          </div>
          <div className="feat-card">
            <span className="feat-symbol">✦</span>
            <h3>Instant Access</h3>
            <p>PDF + SVG у максимальній якості. Друкуй, медитуй, трансформуй</p>
          </div>
        </section>

        <section className="sticky-section">
          <div className="sticky-heading">Колекція · संग्रह · 33 Units</div>
          <div className="mandala-grid">
            <div className="m-item">
              <span className="m-num">№01</span>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="mg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffd700"/><stop offset="100%" stopColor="#ff5080"/></linearGradient></defs>
                <g transform="translate(35,35)" stroke="url(#mg1)" fill="none" strokeWidth="0.8">
                  <circle r="32"/><circle r="22"/><circle r="12"/>
                  <ellipse rx="10" ry="28" transform="rotate(0)"/>
                  <ellipse rx="10" ry="28" transform="rotate(60)"/>
                  <ellipse rx="10" ry="28" transform="rotate(120)"/>
                  <polygon points="0,-22 19,11 -19,11"/>
                  <polygon points="0,22 19,-11 -19,-11"/>
                </g>
              </svg>
              <span className="m-label">शांति</span>
            </div>
            <div className="m-item">
              <span className="m-num">№09</span>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="mg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c060ff"/><stop offset="100%" stopColor="#6090ff"/></linearGradient></defs>
                <g transform="translate(35,35)" stroke="url(#mg2)" fill="none" strokeWidth="0.8">
                  <circle r="32"/><circle r="20"/><circle r="8"/>
                  <ellipse rx="8" ry="30" transform="rotate(0)"/>
                  <ellipse rx="8" ry="30" transform="rotate(45)"/>
                  <ellipse rx="8" ry="30" transform="rotate(90)"/>
                  <ellipse rx="8" ry="30" transform="rotate(135)"/>
                  <line x1="-32" y1="0" x2="32" y2="0" strokeWidth="0.4"/>
                  <line x1="0" y1="-32" x2="0" y2="32" strokeWidth="0.4"/>
                </g>
              </svg>
              <span className="m-label">प्रेम</span>
            </div>
            <div className="m-item">
              <span className="m-num">№17</span>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="mg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ff9500"/><stop offset="100%" stopColor="#c060ff"/></linearGradient></defs>
                <g transform="translate(35,35)" stroke="url(#mg3)" fill="none" strokeWidth="0.8">
                  <circle r="32"/><circle r="24"/><circle r="16"/><circle r="6"/>
                  <polygon points="0,-32 27.7,16 -27.7,16"/>
                  <polygon points="0,32 27.7,-16 -27.7,-16"/>
                  <polygon points="0,-16 13.9,8 -13.9,8" strokeWidth="0.5"/>
                  <polygon points="0,16 13.9,-8 -13.9,-8" strokeWidth="0.5"/>
                </g>
              </svg>
              <span className="m-label">शक्ति</span>
            </div>
            <div className="m-item">
              <span className="m-num">№21</span>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="mg4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffd700"/><stop offset="100%" stopColor="#6090ff"/></linearGradient></defs>
                <g transform="translate(35,35)" stroke="url(#mg4)" fill="none" strokeWidth="0.8">
                  <circle r="30"/>
                  <ellipse rx="12" ry="30" transform="rotate(0)"/>
                  <ellipse rx="12" ry="30" transform="rotate(36)"/>
                  <ellipse rx="12" ry="30" transform="rotate(72)"/>
                  <ellipse rx="12" ry="30" transform="rotate(108)"/>
                  <ellipse rx="12" ry="30" transform="rotate(144)"/>
                  <circle r="6" fill="url(#mg4)" fillOpacity="0.4"/>
                </g>
              </svg>
              <span className="m-label">आनंद</span>
            </div>
            <div className="m-item">
              <span className="m-num">№28</span>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="mg5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ff5080"/><stop offset="100%" stopColor="#ffd700"/></linearGradient></defs>
                <g transform="translate(35,35)" stroke="url(#mg5)" fill="none" strokeWidth="0.8">
                  <circle r="32"/><circle r="18"/>
                  <line x1="-32" y1="0" x2="32" y2="0" strokeWidth="0.4"/>
                  <line x1="0" y1="-32" x2="0" y2="32" strokeWidth="0.4"/>
                  <line x1="-22.6" y1="-22.6" x2="22.6" y2="22.6" strokeWidth="0.4"/>
                  <line x1="22.6" y1="-22.6" x2="-22.6" y2="22.6" strokeWidth="0.4"/>
                  <circle r="3" cx="0" cy="-32"/><circle r="3" cx="32" cy="0"/>
                  <circle r="3" cx="0" cy="32"/><circle r="3" cx="-32" cy="0"/>
                  <circle r="2" cx="22.6" cy="-22.6"/><circle r="2" cx="22.6" cy="22.6"/>
                  <circle r="2" cx="-22.6" cy="22.6"/><circle r="2" cx="-22.6" cy="-22.6"/>
                </g>
              </svg>
              <span className="m-label">ज्ञान</span>
            </div>
            <div className="m-item">
              <span className="m-num">№33</span>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="mg6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6090ff"/><stop offset="50%" stopColor="#c060ff"/><stop offset="100%" stopColor="#ff5080"/></linearGradient></defs>
                <g transform="translate(35,35)" stroke="url(#mg6)" fill="none" strokeWidth="0.8">
                  <circle r="32"/><circle r="24"/><circle r="14"/><circle r="5"/>
                  <ellipse rx="10" ry="30" transform="rotate(0)"/>
                  <ellipse rx="10" ry="30" transform="rotate(30)"/>
                  <ellipse rx="10" ry="30" transform="rotate(60)"/>
                  <ellipse rx="10" ry="30" transform="rotate(90)"/>
                  <ellipse rx="10" ry="30" transform="rotate(120)"/>
                  <ellipse rx="10" ry="30" transform="rotate(150)"/>
                  <circle r="2" cx="0" cy="-14"/><circle r="2" cx="12.1" cy="7"/>
                  <circle r="2" cx="-12.1" cy="7"/>
                </g>
              </svg>
              <span className="m-label">मोक्ष</span>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <span className="test-dev">❝ · ❞</span>
          <p className="test-quote">Я медитувала з цими мандалами щоранку — через тиждень зрозуміла, чого хотіла все своє життя</p>
          <span className="test-author">— Олена В., Київ · Практикантка · 2024</span>
        </section>

        <section className="cta-section">
          <h2>Почни свою практику</h2>
          <span className="cta-dev">आज ही शुरू करें</span>
          <div>
            <span className="price-tag">₴490</span>
            <span className="price-old">₴990</span>
          </div>
          <p className="price-note">33 мандали · PDF + SVG · Миттєве завантаження · Назавжди твої</p>
          <button className="btn-primary" style={{ fontSize: '13px', padding: '18px 56px' }}>✦ Завантажити зараз</button>
        </section>

        <div className="ticker">
          <div className="ticker-inner">
            <span>ॐ</span><em>Шлях починається з одного символу</em>
            <span>श्री</span><em>33 мандали · 33 стани свідомості</em>
            <span>ॐ</span><em>Ручна робота · Цифрова точність</em>
            <span>✦</span><em>Афірмація — це не слова. Це форма.</em>
            <span>ॐ</span><em>Шлях починається з одного символу</em>
            <span>श्री</span><em>33 мандали · 33 стани свідомості</em>
            <span>ॐ</span><em>Ручна робота · Цифрова точність</em>
            <span>✦</span><em>Афірмація — це не слова. Це форма.</em>
          </div>
        </div>

        <footer>
          <span>© 2026 Mandala Project · Всі права захищені</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://www.instagram.com/mendi_kiev/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#c060ff'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <span>सत्यम् शिवम् सुन्दरम्</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MandalaLuxuryPage;
