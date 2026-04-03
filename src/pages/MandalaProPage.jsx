import React from 'react';
import './MandalaProPage.css';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const BENTO_FEATURES = [
  { col: 'wide', accent: true, icon: 'ॐ', num: '33', title: 'Sacred Geometry', text: 'Кожна мандала побудована на золотому перетині та ведичній символіці — математика, яку відчуває серце.' },
  { col: 'med',  gold: true,   icon: '✦', num: '01', title: 'Hand-Drawn Origin', text: 'Жива лінія руки художника, оцифрована у векторну точність.' },
  { col: 'half', accent: false, icon: 'श्री', num: '∞', title: 'PDF + SVG', text: 'Будь-який масштаб без втрати якості.' },
  { col: 'half', accent: false, icon: '◈', num: '4K', title: 'Print-Ready', text: 'Від кишенькового формату до постера А0.' },
  { col: 'third', accent: false, icon: '⟡', num: '∞', title: 'Миттєво', text: 'Завантаження одразу після оплати.' },
  { col: 'third', accent: false, icon: '✧', num: '💎', title: 'Lifetime access', text: 'Купив раз — завжди твої.' },
  { col: 'third', accent: false, icon: 'ॐ', num: '33', title: 'Стани', text: 'Кожна з 33 мандал — окремий внутрішній стан.' },
];

const MANDALA_ITEMS = [
  { num: '01', name: 'शांति', meaning: 'Спокій',      g: ['#c9a84c','#f59e0b'] },
  { num: '09', name: 'प्रेम',  meaning: 'Любов',       g: ['#7c3aed','#ec4899'] },
  { num: '17', name: 'शक्ति', meaning: 'Сила',         g: ['#06b6d4','#7c3aed'] },
  { num: '21', name: 'आनंद', meaning: 'Радість',       g: ['#ec4899','#f59e0b'] },
  { num: '28', name: 'ज्ञान', meaning: 'Мудрість',     g: ['#c9a84c','#06b6d4'] },
  { num: '33', name: 'मोक्ष', meaning: 'Звільнення',  g: ['#7c3aed','#ec4899','#c9a84c'] },
];

const TICKER_ITEMS = [
  { sep: 'ॐ',   text: 'Шлях починається з одного символу' },
  { sep: '✦',   text: '33 мандали · 33 стани свідомості' },
  { sep: 'श्री', text: 'Ручна робота · Цифрова точність' },
  { sep: '◈',   text: 'Афірмація — це не слова. Це форма.' },
  { sep: '⟡',   text: 'Мистецтво, яке трансформує' },
];

// ─── MANDALA SVG (reusable) ───────────────────────────────────────────────────

const MandalaSVG = ({ id, g, size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        {g.map((c, i) => <stop key={i} offset={`${(i/(g.length-1))*100}%`} stopColor={c} />)}
      </linearGradient>
    </defs>
    <g transform="translate(40,40)" stroke={`url(#grad-${id})`} fill="none" strokeWidth="0.7">
      <circle r="37" /><circle r="28" /><circle r="18" /><circle r="9" />
      {[0,30,60,90,120,150].map(d => <ellipse key={d} rx="11" ry="32" transform={`rotate(${d})`} />)}
      <polygon points="0,-25 21.7,12.5 -21.7,12.5" />
      <polygon points="0,25 21.7,-12.5 -21.7,-12.5" />
      {[0,45,90,135].map(d => (
        <g key={d} transform={`rotate(${d})`}>
          <circle r="3" cx="0" cy="-37" fill={`url(#grad-${id})`} />
        </g>
      ))}
    </g>
  </svg>
);

const MandalaHeroSVG = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
    <defs>
      <linearGradient id="ph-g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#c9a84c" stopOpacity="0.9" />
        <stop offset="35%"  stopColor="#ec4899" stopOpacity="0.8" />
        <stop offset="65%"  stopColor="#7c3aed" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="ph-g2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <g transform="translate(200,200)" stroke="url(#ph-g1)" fill="none" strokeWidth="0.7">
      <circle r="190" strokeWidth="0.4" stroke="url(#ph-g2)" />
      <circle r="160" />
      <circle r="130" stroke="url(#ph-g2)" />
      <circle r="100" />
      <circle r="70" stroke="url(#ph-g2)" />
      <circle r="42" />
      <circle r="16" />
      {[0,30,60,90,120,150].map(d => <ellipse key={d} rx="28" ry="95" transform={`rotate(${d})`} />)}
      {[15,45,75,105,135,165].map(d => <ellipse key={d} rx="16" ry="62" transform={`rotate(${d})`} stroke="url(#ph-g2)" strokeWidth="0.5" />)}
      <polygon points="0,-155 134.2,77.5 -134.2,77.5" strokeWidth="0.6" />
      <polygon points="0,155 134.2,-77.5 -134.2,-77.5" strokeWidth="0.6" stroke="url(#ph-g2)" />
      <polygon points="0,-95 82.3,47.5 -82.3,47.5" strokeWidth="0.5" />
      <polygon points="0,95 82.3,-47.5 -82.3,-47.5" strokeWidth="0.5" stroke="url(#ph-g2)" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(d => (
        <g key={d} transform={`rotate(${d})`}>
          <circle r="5" cx="0" cy="-155" fill="url(#ph-g1)" fillOpacity="0.8" />
          <line x1="0" y1="-190" x2="0" y2="-165" strokeWidth="0.4" />
        </g>
      ))}
    </g>
  </svg>
);

const MandalaHeroInnerSVG = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
    <defs>
      <linearGradient id="ph-gi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#f59e0b" />
        <stop offset="50%"  stopColor="#ec4899" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <g transform="translate(100,100)" stroke="url(#ph-gi)" fill="none" strokeWidth="1">
      <circle r="85" /><circle r="62" /><circle r="38" /><circle r="18" />
      <polygon points="0,-62 53.7,31 -53.7,31" />
      <polygon points="0,62 53.7,-31 -53.7,-31" />
      <circle r="7" cx="0"    cy="-62"  fill="#f59e0b" fillOpacity="0.7" />
      <circle r="7" cx="53.7" cy="31"   fill="#ec4899" fillOpacity="0.7" />
      <circle r="7" cx="-53.7" cy="31"  fill="#7c3aed" fillOpacity="0.7" />
      <circle r="4" fill="rgba(255,255,255,0.9)" />
    </g>
  </svg>
);

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

const Navbar = () => (
  <nav className="mpp-nav">
    <div className="mpp-nav__logo">✦ Mandala Project</div>
    <ul className="mpp-nav__links">
      <li><a href="#">Колекція</a></li>
      <li><a href="#">Практика</a></li>
      <li><a href="#">Про нас</a></li>
    </ul>
    <button className="mpp-nav__pill">Отримати колекцію</button>
  </nav>
);

const Hero = () => (
  <section className="mpp-hero">
    <div className="mpp-hero__left">
      <div className="mpp-hero__tag mpp-reveal mpp-reveal--1">Цифрова колекція · 2026</div>

      <h1 className="mpp-hero__title mpp-reveal mpp-reveal--2">
        33 Мандали<br />
        <em>Афірмацій</em>
      </h1>

      <div className="mpp-hero__deva mpp-reveal mpp-reveal--2">सकारात्मकता · शांति · प्रेम</div>

      <p className="mpp-hero__desc mpp-reveal mpp-reveal--3">
        Ручна робота. Геометрична досконалість. Кожна мандала — це інструмент для входу у стан глибокої присутності та ясності.
      </p>

      <div className="mpp-hero__btns mpp-reveal mpp-reveal--3">
        <button className="mpp-btn mpp-btn--primary">✦ Отримати зараз — ₴490</button>
        <button className="mpp-btn mpp-btn--ghost">Переглянути зразки</button>
      </div>

      <div className="mpp-hero__stats mpp-reveal mpp-reveal--4">
        <div>
          <span className="mpp-hero__stat-num">33</span>
          <span className="mpp-hero__stat-label">Мандали</span>
        </div>
        <div>
          <span className="mpp-hero__stat-num">PDF+SVG</span>
          <span className="mpp-hero__stat-label">Формати</span>
        </div>
        <div>
          <span className="mpp-hero__stat-num">∞</span>
          <span className="mpp-hero__stat-label">Якість</span>
        </div>
      </div>
    </div>

    <div className="mpp-hero__right mpp-reveal mpp-reveal--2">
      <div className="mpp-mandala-wrap">
        <div className="mpp-mandala-wrap__ring mpp-mandala-wrap__ring--outer" />
        <div className="mpp-mandala-wrap__ring mpp-mandala-wrap__ring--mid" />
        <div className="mpp-mandala-wrap__ring mpp-mandala-wrap__ring--inner" />
        <div className="mpp-mandala-wrap__glow" />
        <div className="mpp-mandala-wrap__svg"><MandalaHeroSVG /></div>
        <div className="mpp-mandala-wrap__svg-inner"><MandalaHeroInnerSVG /></div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="mpp-section">
    <p className="mpp-section-label">Чому це особливо</p>
    <h2 className="mpp-section-title">Мистецтво зустрічає<br /><em>науку присутності</em></h2>
    <div className="mpp-bento">
      {BENTO_FEATURES.map((f, i) => (
        <div
          key={i}
          className={[
            'mpp-bento-card',
            `mpp-bento-card--${f.col}`,
            f.accent ? 'mpp-bento-card--accent' : '',
            f.gold   ? 'mpp-bento-card--gold'   : '',
            f.col === 'wide' || f.col === 'med' ? 'mpp-bento-card--tall' : '',
          ].filter(Boolean).join(' ')}
        >
          <span className="mpp-bento-card__num">{f.num}</span>
          <span className="mpp-bento-card__icon">{f.icon}</span>
          <h3 className="mpp-bento-card__title">{f.title}</h3>
          <p className="mpp-bento-card__text">{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);

const Collection = () => (
  <section className="mpp-section">
    <p className="mpp-section-label">Вибрані твори</p>
    <h2 className="mpp-section-title">Колекція · <em>संग्रह</em></h2>
    <div className="mpp-carousel">
      {MANDALA_ITEMS.map(({ num, name, meaning, g }) => (
        <div key={num} className="mpp-mandala-card">
          <span className="mpp-mandala-card__num">№ {num}</span>
          <MandalaSVG id={`col-${num}`} g={g} size={80} />
          <span className="mpp-mandala-card__name">{name}</span>
          <span className="mpp-mandala-card__title">{meaning}</span>
        </div>
      ))}
    </div>
  </section>
);

const BookPreview = () => (
  <div className="mpp-preview-wrap">
    <div className="mpp-preview-inner">
      <div className="mpp-preview-text">
        <p className="mpp-section-label">Перегляд книги</p>
        <h2 className="mpp-section-title" style={{ marginBottom: 0 }}>
          Відчуй якість<br/><em>зсередини</em>
        </h2>
        <p>
          Кожна сторінка — це ритуал. Граматика спокою, записана лінією та формою. Перегортай колекцію та відчуй, як змінюється дихання.
        </p>
        <button className="mpp-btn mpp-btn--primary" style={{ marginTop: 12 }}>
          ✦ Отримати колекцію
        </button>
      </div>
      <div className="mpp-preview-frame">
        <iframe
          src="https://online.fliphtml5.com/paunb/mahendi_mandala_v4/"
          title="33 Мандали Афірмацій"
          loading="lazy"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

const Testimonial = () => (
  <div className="mpp-quote-section">
    <blockquote className="mpp-quote">
      «Я медитувала з цими мандалами щоранку. Через тиждень зрозуміла, чого хотіла все своє життя.»
    </blockquote>
    <p className="mpp-quote-author">— Олена В., Київ · Практикантка · 2024</p>
  </div>
);

const CTA = () => (
  <section className="mpp-cta-section">
    <div className="mpp-cta-card">
      <div className="mpp-cta-card__deva">आज ही शुरू करें</div>
      <h2 className="mpp-cta-card__title">
        Почни свою<br /><em>практику сьогодні</em>
      </h2>
      <div className="mpp-price-row">
        <span className="mpp-price">₴490</span>
        <span className="mpp-price-old">₴990</span>
      </div>
      <p className="mpp-cta-card__note">
        33 мандали · PDF + SVG · Миттєве завантаження · Назавжди твої
      </p>
      <button className="mpp-btn mpp-btn--primary" style={{ fontSize: 14, padding: '16px 52px' }}>
        ✦ Завантажити зараз
      </button>
      <div className="mpp-cta-card__trust">
        <span>Миттєве завантаження</span>
        <span>Безлімітне використання</span>
        <span>Підтримка на зв'язку</span>
      </div>
    </div>
  </section>
);

const Ticker = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="mpp-ticker">
      <div className="mpp-ticker__inner">
        {items.map(({ sep, text }, i) => (
          <span key={i} className="mpp-ticker__item">
            <span className="mpp-ticker__sep">{sep}</span>
            <span className="mpp-ticker__text">{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="mpp-footer">
    <div className="mpp-footer__brand">✦ Mandala Project</div>
    <span className="mpp-footer__copy">© 2026 · Всі права захищені</span>
    <div className="mpp-footer__social">
      <a href="https://www.instagram.com/mendi_kiev/" target="_blank" rel="noopener noreferrer" className="mpp-footer__ig" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
    </div>
  </footer>
);

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────

const MandalaProPage = () => (
  <div className="mpp-root">
    <div className="mpp-canvas-bg" />
    <Navbar />
    <main>
      <Hero />
      <Ticker />
      <Features />
      <Collection />
      <BookPreview />
      <Testimonial />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default MandalaProPage;
