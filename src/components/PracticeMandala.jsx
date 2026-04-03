import React from 'react';

export default function PracticeMandala() {
    return (
        <div className="mandala-bg" style={{ 
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90vmin', height: '90vmin',
            pointerEvents: 'none',
            opacity: 0.04,
            animation: 'spinBase 180s linear infinite',
            zIndex: 0
        }}>
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
                <g stroke="#ffd700" strokeWidth="1" opacity="0.8">
                    <circle cx="200" cy="200" r="190" />
                    <circle cx="200" cy="200" r="140" strokeDasharray="4 8" />
                    <circle cx="200" cy="200" r="90" />
                    <circle cx="200" cy="200" r="40" strokeDasharray="2 4" />
                    {/* Hexagram */}
                    <polygon points="200,10 364.5,295 35.5,295" />
                    <polygon points="200,390 35.5,105 364.5,105" />
                    {/* Squares */}
                    <rect x="65" y="65" width="270" height="270" fill="none" strokeWidth="0.8" />
                    <rect x="65" y="65" width="270" height="270" fill="none" strokeWidth="0.8" transform="rotate(45 200 200)" />
                    {/* Inner petals */}
                    <ellipse cx="200" cy="140" rx="15" ry="60" transform="rotate(0 200 140)" />
                    <ellipse cx="200" cy="260" rx="15" ry="60" transform="rotate(0 200 260)" />
                    <ellipse cx="140" cy="200" rx="60" ry="15" transform="rotate(0 140 200)" />
                    <ellipse cx="260" cy="200" rx="60" ry="15" transform="rotate(0 260 200)" />
                    
                    <circle cx="200" cy="200" r="6" fill="#ffd700" />
                </g>
            </svg>
            <style>{`
                @keyframes spinBase {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
