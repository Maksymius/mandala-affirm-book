import React from 'react';
import './MandalaLuxury.css';

// ============================================================
//  CONSTANTS — data-driven, easy to change
// ============================================================

const FEATURES = [
  {
    symbol: 'ॐ',
    title: 'Sacred Origin',
    text: 'Кожен елемент побудований на основі ведичної символіки та золотого перетину',
  },
  {
    symbol: 'श्री',
    title: 'Hand-Drawn',
    text: 'Намальовано вручну — жива лінія, дихання художника, збережені в цифровій формі',
  },
  {
    symbol: '✦',
    title: 'Instant Access',
    text: 'PDF + SVG у максимальній якості. Друкуй, медитуй, трансформуй',
  },
];

const MANDALA_ITEMS = [
  { num: '01', label: 'शांति', grad: 'url(#mg1)', stops: [['#ffd700', '0%'], ['#ff5080', '100%']] },
  { num: '09', label: 'प्रेम',  grad: 'url(#mg2)', stops: [['#c060ff', '0%'], ['#6090ff', '100%']] },
  { num: '17', label: 'शक्ति', grad: 'url(#mg3)', stops: [['#ff9500', '0%'], ['#c060ff', '100%']] },
  { num: '21', label: 'आनंद', grad: 'url(#mg4)', stops: [['#ffd700', '0%'], ['#6090ff', '100%']] },
  { num: '28', label: 'ज्ञान', grad: 'url(#mg5)', stops: [['#ff5080', '0%'], ['#ffd700', '100%']] },
  { num: '33', label: 'मोक्ष', grad: 'url(#mg6)', stops: [['#6090ff', '0%'], ['#c060ff', '50%'], ['#ff5080', '100%']] },
];

const TICKER_ITEMS = [
  { sep: 'ॐ',   text: 'Шлях починається з одного символу' },
  { sep: 'श्री', text: '33 мандали · 33 стани свідомості' },
  { sep: 'ॐ',   text: 'Ручна робота · Цифрова точність' },
  { sep: '✦',   text: 'Афірмація — це не слова. Це форма.' },
];

// ============================================================
//  SHARED: Mandala SVG Shape
// ============================================================

const MandalaSmallSVG = ({ id, stops }) => (
  <svg width="72" height="72" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        {stops.map(([color, offset]) => (
          <stop key={offset} offset={offset} stopColor={color} />
        ))}
      </linearGradient>
    </defs>
    <g transform="translate(35,35)" stroke={`url(#${id})`} fill="none" strokeWidth="0.9">
      <circle r="32" /><circle r="22" /><circle r="12" />
      <ellipse rx="10" ry="28" transform="rotate(0)" />
      <ellipse rx="10" ry="28" transform="rotate(60)" />
      <ellipse rx="10" ry="28" transform="rotate(120)" />
      <polygon points="0,-22 19,11 -19,11" />
      <polygon points="0,22 19,-11 -19,-11" />
    </g>
  </svg>
);

// ============================================================
//  NAVBAR
// ============================================================

const Navbar = () => (
  <nav className="mlp-nav">
    <div className="mlp-nav__logo">✦ Mandala Project</div>
    <div className="mlp-nav__links">
      <a href="#">Колекція</a>
      <a href="#">Про нас</a>
      <a href="#practice">Практика</a>
    </div>
    <button className="mlp-nav__cta">Завантажити ↓</button>
  </nav>
);

// ============================================================
//  HERO
// ============================================================

const Hero = () => (
  <section className="mlp-hero">
    <div className="mlp-hero__label">ॐ मण्डल संग्रह ॐ</div>

    <div className="mlp-hero__mandala">
      {/* Outer rotating mandala */}
      <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hero-g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ffd700" stopOpacity="0.85" />
            <stop offset="35%"  stopColor="#ff9500" stopOpacity="0.75" />
            <stop offset="65%"  stopColor="#ff5080" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#c060ff" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="hero-g2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#6090ff" stopOpacity="0.6" />
            <stop offset="50%"  stopColor="#c060ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffd700" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <g transform="translate(170,170)" stroke="url(#hero-g1)" fill="none" strokeWidth="0.8">
          <circle r="160" strokeWidth="0.5" stroke="url(#hero-g2)" />
          <circle r="130" />
          <circle r="100" stroke="url(#hero-g2)" />
          <circle r="70" />
          <circle r="40" stroke="url(#hero-g2)" />
          <circle r="12" />
          <g>
            {[0,30,60,90,120,150].map(d => <ellipse key={d} rx="25" ry="80" transform={`rotate(${d})`} />)}
          </g>
          <g stroke="url(#hero-g2)" strokeWidth="0.5">
            {[15,45,75,105,135,165].map(d => <ellipse key={d} rx="15" ry="55" transform={`rotate(${d})`} />)}
          </g>
          <polygon points="0,-130 112.6,65 -112.6,65" strokeWidth="0.7" />
          <polygon points="0,130 112.6,-65 -112.6,-65" strokeWidth="0.7" stroke="url(#hero-g2)" />
          <polygon points="0,-80 69.3,40 -69.3,40" strokeWidth="0.5" />
          <polygon points="0,80 69.3,-40 -69.3,-40" strokeWidth="0.5" stroke="url(#hero-g2)" />
          {[-160,0,160].filter((_, i) => i !== 1).map((_, i) => null)}
          <line x1="-160" y1="0" x2="160" y2="0" strokeWidth="0.3" stroke="url(#hero-g2)" />
          <line x1="0" y1="-160" x2="0" y2="160" strokeWidth="0.3" />
          <line x1="-113" y1="-113" x2="113" y2="113" strokeWidth="0.3" stroke="url(#hero-g2)" />
          <line x1="113" y1="-113" x2="-113" y2="113" strokeWidth="0.3" />
          <circle r="5" cx="0"    cy="-130" fill="url(#hero-g1)" />
          <circle r="5" cx="112.6" cy="65"  fill="url(#hero-g1)" />
          <circle r="5" cx="-112.6" cy="65" fill="url(#hero-g1)" />
          <circle r="5" cx="0"    cy="130"  fill="url(#hero-g2)" />
          <circle r="5" cx="-112.6" cy="-65" fill="url(#hero-g2)" />
          <circle r="5" cx="112.6" cy="-65" fill="url(#hero-g2)" />
        </g>
      </svg>

      {/* Inner counter-rotating mandala */}
      <div className="mlp-hero__mandala-inner">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-g3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#ffd700" />
              <stop offset="50%"  stopColor="#ff9500" />
              <stop offset="100%" stopColor="#ff5080" />
            </linearGradient>
          </defs>
          <g transform="translate(100,100)" stroke="url(#hero-g3)" fill="none" strokeWidth="1">
            <circle r="90" /><circle r="65" /><circle r="40" /><circle r="18" />
            <polygon points="0,-65 56.3,32.5 -56.3,32.5" />
            <polygon points="0,65 56.3,-32.5 -56.3,-32.5" />
            <circle r="8" cx="0"    cy="-65"  fill="#ffd700" fillOpacity="0.6" />
            <circle r="8" cx="56.3" cy="32.5" fill="#ff9500" fillOpacity="0.6" />
            <circle r="8" cx="-56.3" cy="32.5" fill="#ff5080" fillOpacity="0.6" />
            <circle r="4" fill="#fff" fillOpacity="0.8" />
          </g>
        </svg>
      </div>
    </div>

    <h1 className="mlp-hero__title">33 Мандали<br />Афірмацій</h1>
    <div className="mlp-hero__subtitle">सकारात्मकता · शांति · प्रेम</div>
    <p className="mlp-hero__desc">
      Ручна робота. Цифрова точність. Кожна мандала — це вхід у стан, який ти шукав.
    </p>
    <div className="mlp-hero__btns">
      <button className="mlp-btn-primary">✦ Отримати колекцію</button>
      <button className="mlp-btn-secondary">Переглянути зразки</button>
    </div>
  </section>
);

// ============================================================
//  DIVIDER
// ============================================================

const Divider = () => (
  <div className="mlp-divider">ॐ · श्री · ॐ · श्री · ॐ · श्री · ॐ · श्री · ॐ</div>
);

// ============================================================
//  BOOK PREVIEW
// ============================================================

const BookPreview = () => (
  <section className="mlp-preview">
    <div className="mlp-preview__frame">
      <iframe
        className="mlp-preview__iframe"
        src="https://online.fliphtml5.com/paunb/mahendi_mandala_v4/"
        title="33 Мандали Афірмацій — перегляд книги"
        loading="lazy"
        seamless="seamless"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allowFullScreen={true}
      />
    </div>
  </section>
);

// ============================================================
//  FEATURES
// ============================================================

const Features = () => (
  <section className="mlp-features">
    {FEATURES.map(({ symbol, title, text }) => (
      <div key={title} className="mlp-feat-card">
        <span className="mlp-feat-card__symbol">{symbol}</span>
        <h3 className="mlp-feat-card__title">{title}</h3>
        <p className="mlp-feat-card__text">{text}</p>
      </div>
    ))}
  </section>
);

// ============================================================
//  MANDALA COLLECTION GRID
// ============================================================

const MandalaCard = ({ num, label, id, stops }) => (
  <div className="mlp-card">
    <span className="mlp-card__num">№{num}</span>
    <MandalaSmallSVG id={id} stops={stops} />
    <span className="mlp-card__label">{label}</span>
  </div>
);

const MandalaCollection = () => (
  <section className="mlp-collection">
    <div className="mlp-collection__heading">Колекція · संग्रह · 33 Units</div>
    <div className="mlp-grid">
      {MANDALA_ITEMS.map(({ num, label, stops }) => (
        <MandalaCard key={num} num={num} label={label} id={`mg${num}`} stops={stops} />
      ))}
    </div>
  </section>
);

// ============================================================
//  TESTIMONIAL
// ============================================================

const Testimonial = () => (
  <section className="mlp-testimonial">
    <span className="mlp-testimonial__icon">❝ · ❞</span>
    <p className="mlp-testimonial__quote">
      Я медитувала з цими мандалами щоранку — через тиждень зрозуміла, чого хотіла все своє життя
    </p>
    <span className="mlp-testimonial__author">— Олена В., Київ · Практикантка · 2024</span>
  </section>
);

// ============================================================
//  CTA SECTION
// ============================================================

const CTASection = () => (
  <section className="mlp-cta">
    <h2 className="mlp-cta__title">Почни свою практику</h2>
    <span className="mlp-cta__label">आज ही शुरू करें</span>
    <div className="mlp-cta__prices">
      <span className="mlp-cta__price">₴490</span>
      <span className="mlp-cta__price-old">₴990</span>
    </div>
    <p className="mlp-cta__note">33 мандали · PDF + SVG · Миттєве завантаження · Назавжди твої</p>
    <button className="mlp-btn-primary mlp-btn-primary--large">✦ Завантажити зараз</button>
  </section>
);

// ============================================================
//  TICKER / MARQUEE
// ============================================================

const Ticker = () => {
  // Duplicate for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="mlp-ticker">
      <div className="mlp-ticker__inner">
        {items.map(({ sep, text }, i) => (
          <React.Fragment key={i}>
            <span className="mlp-ticker__sep">{sep}</span>
            <em className="mlp-ticker__text">{text}</em>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ============================================================
//  FOOTER
// ============================================================

const Footer = () => (
  <footer className="mlp-footer">
    <span className="mlp-footer__copy">© 2026 Mandala Project · Всі права захищені</span>
    <div className="mlp-footer__right">
      <a
        href="https://www.instagram.com/mendi_kiev/"
        target="_blank"
        rel="noopener noreferrer"
        className="mlp-footer__social"
        aria-label="Instagram"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      <span className="mlp-footer__mantra">सत्यम् शिवम् सुन्दरम्</span>
    </div>
  </footer>
);

// ============================================================
//  PAGE ROOT
// ============================================================

const MandalaLuxuryPage = () => (
  <div className="mandala-luxury-base">
    <div className="mlp-noise" />
    <div className="mlp-orb mlp-orb--1" />
    <div className="mlp-orb mlp-orb--2" />

    <Navbar />

    <main>
      <Hero />
      <Divider />
      <BookPreview />
      <Features />
      <MandalaCollection />
      <Testimonial />
      <CTASection />
    </main>

    <Ticker />
    <Footer />
  </div>
);

export default MandalaLuxuryPage;
