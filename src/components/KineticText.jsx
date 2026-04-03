import React, { useEffect, useRef } from 'react';

// Pretext Shim Implementation
const _mc = document.createElement('canvas');
const _cx = _mc.getContext('2d');

function prepare(text, font) {
    _cx.font = font;
    const tokens = text.split(/(\s+)/);
    return {
        font,
        words: tokens.map(t => ({
            text: t,
            width: _cx.measureText(t).width,
            isSpace: /^\s+$/.test(t)
        }))
    };
}

function layoutWithLines(prepared, maxWidth, lineHeightMult, fontSize) {
    let lh = fontSize * lineHeightMult;
    let lines = [];
    let line = [], w = 0;
    for (let word of prepared.words) {
        if (word.isSpace) { if (line.length) line.push(word); continue; }
        if (w + word.width > maxWidth && line.length) {
            lines.push({ words: line, width: w });
            line = [word]; w = word.width;
        } else { line.push(word); w += word.width; }
    }
    if (line.length) lines.push({ words: line, width: w });
    return { lines, lineHeight: lh, height: lines.length * lh };
}

function getDisplacement(glyphX, glyphY, obstacleX, obstacleY, radius) {
    let dx = glyphX - obstacleX;
    let dy = glyphY - obstacleY;
    let dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > radius || dist < 0.1) return { ox: 0, oy: 0, alpha: 1 };
    
    let force = Math.pow(1 - dist / radius, 2) * radius * 0.7;
    return {
        ox: (dx / dist) * force,
        oy: (dy / dist) * force * 0.4,
        alpha: 0.15 + (dist / radius) * 0.85
    };
}

export default function KineticText({ text }) {
    const canvasRef = useRef(null);

    // We store insect and particles refs out of cycle so they persist text changes
    const physicsRef = useRef({
        mouse: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        insect: { x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 },
        particles: Array(40).fill(0).map(() => ({
            x: window.innerWidth / 2, y: window.innerHeight / 2,
            vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4,
            life: Math.random() * 100, maxLife: 60 + Math.random() * 80,
            size: 0.5 + Math.random() * 1.5
        }))
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        const state = physicsRef.current;

        const fontSize = 22;
        const font = `300 ${fontSize}px "Cormorant Garamond", "Noto Sans Devanagari", serif`;
        const INSECT_RADIUS = 180;
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        let preparedData;
        let layoutData;

        // Generate larger chunk payload based on text length to fill screen
        let multiplier = 20;
        if (text.length > 100) multiplier = 8;
        if (text.length > 200) multiplier = 5;
        const fullTextChunks = Array(multiplier).fill(text).join("  ");

        document.fonts.ready.then(() => {
            preparedData = prepare(fullTextChunks, font);
            calculateLayout();
            if (!animationId) render();
        });

        function calculateLayout() {
            if (!preparedData) return;
            const contentWidth = Math.min(width * 0.85, 900);
            layoutData = layoutWithLines(preparedData, contentWidth, 2.2, fontSize);
        }

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            calculateLayout();
        };

        const handleMouseMove = (e) => {
            state.mouse.x = e.clientX;
            state.mouse.y = e.clientY;
        };

        const handleTouchMove = (e) => {
            state.mouse.x = e.touches[0].clientX;
            state.mouse.y = e.touches[0].clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        let startTime = Date.now();

        function render() {
            animationId = requestAnimationFrame(render);
            ctx.clearRect(0, 0, width, height);

            let { mouse, insect, particles } = state;

            insect.vx += (mouse.x - insect.x) * 0.05;
            insect.vy += (mouse.y - insect.y) * 0.05;
            insect.vx *= 0.82;
            insect.vy *= 0.82;
            insect.x += insect.vx;
            insect.y += insect.vy;

            const time = (Date.now() - startTime) * 0.002;
            const wobbleX = Math.sin(time) * 12;
            const wobbleY = Math.cos(time * 1.4) * 8;
            
            const effInsectX = insect.x + wobbleX;
            const effInsectY = insect.y + wobbleY;

            ctx.font = font;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';

            if (layoutData) {
                const totalTextHeight = layoutData.height;
                const startX = (width - Math.min(width * 0.85, 900)) / 2;
                const startY = (height - totalTextHeight) / 2;

                let gy = startY;
                for (const line of layoutData.lines) {
                    let gx = startX;
                    for (const word of line.words) {
                        if (!word.isSpace) {
                            const wordCenterX = gx + word.width / 2;
                            const d = getDisplacement(wordCenterX, gy, effInsectX, effInsectY, INSECT_RADIUS);
                            
                            ctx.globalAlpha = d.alpha * 0.6;
                            ctx.fillStyle = "#f0e6d3"; 
                            
                            if (d.alpha < 0.3) {
                                ctx.fillStyle = "#ffd700";
                                ctx.globalAlpha = 0.8;
                            }

                            ctx.fillText(word.text, gx + d.ox, gy + d.oy);
                        }
                        gx += word.width;
                    }
                    gy += layoutData.lineHeight;
                }
            }

            ctx.globalAlpha = 1;
            const grad = ctx.createRadialGradient(effInsectX, effInsectY, 0, effInsectX, effInsectY, 120);
            grad.addColorStop(0, "rgba(255, 215, 0, 0.4)");
            grad.addColorStop(0.3, "rgba(255, 150, 50, 0.15)");
            grad.addColorStop(1, "rgba(255, 80, 128, 0)");
            
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(effInsectX, effInsectY, 120, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#fff";
            ctx.shadowColor = "#ffd700";
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.ellipse(effInsectX, effInsectY, 4, 8, Math.atan2(insect.vy, insect.vx) + Math.PI/2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life++;

                p.vx += (effInsectX - p.x) * 0.0015;
                p.vy += (effInsectY - p.y) * 0.0015;
                p.vx += (Math.random() - 0.5) * 0.8;
                p.vy += (Math.random() - 0.5) * 0.8;
                p.vx *= 0.94;
                p.vy *= 0.94;

                if (p.life > p.maxLife) {
                    p.x = effInsectX + (Math.random() - 0.5) * 20;
                    p.y = effInsectY + (Math.random() - 0.5) * 20;
                    p.life = 0;
                    p.vx = (Math.random() - 0.5) * 6;
                    p.vy = (Math.random() - 0.5) * 6;
                }

                ctx.globalAlpha = (1 - (p.life / p.maxLife)) * 0.9;
                ctx.fillStyle = "#ffd700";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [text]); // Re-run effect when text prop changes

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, display: 'block', width: '100%', height: '100%' }} />;
}
