import React, { useState } from 'react';
import KineticText from '../components/KineticText';
import PracticeMandala from '../components/PracticeMandala';
import ManuscriptText from '../components/ManuscriptText';

const MANTRAS = {
    sanskrit: "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।",
    english: "Wisdom. Life of many generations of my ancestors runs in me. Their experience is connected with my experience and fills me with in-depth knowledge and feels. Wisdom unfolds in me and enhances my vibrations.",
    ukrainian: "і піїдемо в сяєва брами германійської з юним синою з великим рибою пловуючою аки цар на кров наше зерно пересипнуте шляк би його трафив шляк би її трафив дай нам саду германійської брами де хліба і пива і яблука золотого повня слався Отче так посоловіємо в шахта срібла підземности ясної нашої темности масла дай нам масла і пива і духу великого риби слався Отче кушай нас і кушма кушем розкусь шляк би його трафив шляк би її трафив бо піїдемо в сяєва брами германійської з юним синою з великим рибою пловуючою аки цар на кров наше зерно пересипнуте шляк би його трафив шляк би її трафив дай нам саду германійської брами де хліба і пива і яблука золотого повня слався Отче"
};

export default function PracticePage() {
    const [activeLang, setActiveLang] = useState('sanskrit');

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Cinzel+Decorative:wght@400;700&family=Noto+Sans+Devanagari:wght@300;400&display=swap');
                .practice-page-root {
                    background: linear-gradient(135deg, #0a0008 0%, #1a0025 30%, #0d0018 60%, #120008 100%);
                    color: #f0e6d3;
                }
                .btn-back {
                    font-family: 'Cormorant Garamond', serif; 
                    font-size: 14px; 
                    letter-spacing: 0.15em; 
                    color: rgba(255,215,0,0.8); 
                    text-decoration: none;
                    border: 1px solid rgba(255,180,100,0.4);
                    padding: 8px 24px;
                    border-radius: 100px;
                    transition: all 0.3s;
                    background: transparent;
                    pointer-events: auto;
                }
                .btn-back:hover {
                    border-color: rgba(255,215,0,0.8); 
                    background: rgba(255,215,0,0.05);
                }
                .divider-top, .divider-bottom {
                    position: absolute; left: 0; width: 100%;
                    text-align: center; pointer-events: none;
                    font-family: 'Noto Sans Devanagari', sans-serif;
                    color: rgba(255,215,0,0.3);
                    font-size: 16px; letter-spacing: 0.6em;
                    z-index: 2;
                }
                .divider-top { top: 40px; }
                .divider-bottom { bottom: 40px; }
                
                .lang-switcher {
                    pointer-events: auto;
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    margin-bottom: 12px;
                }
                .lang-btn {
                    background: none; border: none; cursor: pointer;
                    font-family: '"Cinzel Decorative", serif';
                    font-size: 11px;
                    letter-spacing: 0.4em;
                    color: rgba(255,180,100,0.3);
                    text-transform: uppercase;
                    transition: color 0.3s, text-shadow 0.3s;
                }
                .lang-btn:hover {
                    color: rgba(255,215,0,0.8);
                }
                .lang-btn.active {
                    color: #ffd700;
                    text-shadow: 0 0 10px rgba(255,215,0,0.5);
                }
            `}</style>
            
            <div className="practice-page-root" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', cursor: activeLang === 'ukrainian' ? 'auto' : 'none' }}>
                <PracticeMandala />

                <div className="divider-top">✧ · ॐ · श्री · ॐ · ✧</div>
                
                {activeLang === 'ukrainian' 
                    ? <ManuscriptText text={MANTRAS.ukrainian.repeat(10)} /> 
                    : <KineticText text={MANTRAS[activeLang]} />
                }
                
                <div style={{ position: 'absolute', top: 32, left: 40, zIndex: 10 }}>
                    <a href="#luxury" className="btn-back">← До Колекції</a>
                </div>

                <div className="divider-bottom">
                    <div className="lang-switcher">
                        <button 
                            className={`lang-btn ${activeLang === 'sanskrit' ? 'active' : ''}`}
                            onClick={() => setActiveLang('sanskrit')}
                        >
                            Sanskrit
                        </button>
                        <span style={{color: 'rgba(255,180,100,0.3)'}}>·</span>
                        <button 
                            className={`lang-btn ${activeLang === 'english' ? 'active' : ''}`}
                            onClick={() => setActiveLang('english')}
                        >
                            English
                        </button>
                        <span style={{color: 'rgba(255,180,100,0.3)'}}>·</span>
                        <button 
                            className={`lang-btn ${activeLang === 'ukrainian' ? 'active' : ''}`}
                            onClick={() => setActiveLang('ukrainian')}
                        >
                            Українська
                        </button>
                    </div>
                    ✧ · ॐ · श्री · ॐ · ✧
                </div>
            </div>
        </>
    );
}
