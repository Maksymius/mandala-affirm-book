import React, { useEffect, useRef } from 'react';

export default function ManuscriptText({ text }) {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scroller = scrollContainerRef.current;
        if (!scroller) return;

        // Custom horizontal scroll using vertical wheel
        const handleWheel = (e) => {
            // Only capture vertical scroll events to turn them into horizontal if needed
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                scroller.scrollLeft += e.deltaY;
            }
        };

        scroller.addEventListener('wheel', handleWheel, { passive: false });
        return () => scroller.removeEventListener('wheel', handleWheel);
    }, []);

    // Split text into first letter and the rest for the Drop Cap
    const firstLetter = text ? text.charAt(0).toUpperCase() : '';
    const restOfText = text ? text.substring(1) : '';

    return (
        <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: 1, // Above background, below header/footer
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pointerEvents: 'none' // allow overlay events to pass if empty areas
        }}>
            
            {/* The scrollable wrapper */}
            <div 
                ref={scrollContainerRef}
                className="hide-scrollbar"
                style={{
                    width: '100%',
                    padding: '0 10vw',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch',
                    pointerEvents: 'auto' // capture scroll here
                }}
            >
                {/* CSS Multi-Column container */}
                <div style={{
                    height: '50vh', // Sets bounds so text MUST wrap into next column
                    columnWidth: '340px',
                    columnGap: '80px',
                    columnRule: '1px solid rgba(255,215,0,0.15)',
                    fontSize: '22px',
                    fontFamily: '"Cormorant Garamond", serif',
                    lineHeight: '1.7',
                    color: 'rgba(240, 230, 211, 0.9)',
                    textAlign: 'justify'
                }}>
                    <span style={{
                        float: 'left',
                        fontFamily: '"Cinzel Decorative", serif',
                        fontSize: '96px',
                        lineHeight: '0.8',
                        paddingRight: '16px',
                        paddingTop: '12px',
                        color: '#ffd700',
                        textShadow: '0 0 20px rgba(255,215,0,0.3)'
                    }}>
                        {firstLetter}
                    </span>
                    {restOfText}
                </div>
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>
        </div>
    );
}
