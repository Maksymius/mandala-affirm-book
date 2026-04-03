import { useState, useEffect } from 'react'
import MandalaPage from './pages/MandalaPage'
import MandalaLuxuryPage from './pages/MandalaLuxuryPage'
import MandalaProPage from './pages/MandalaProPage'
import PracticePage from './pages/PracticePage'

function App() {
  const [currentView, setCurrentView] = useState('pro')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'base')     setCurrentView('base')
      if (hash === 'luxury')   setCurrentView('luxury')
      if (hash === 'pro')      setCurrentView('pro')
      if (hash === 'practice') setCurrentView('practice')
    }
    window.addEventListener('hashchange', handleHash)
    handleHash()
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const nav = (view) => { window.location.hash = view; setCurrentView(view) }

  return (
    <>
      {/* Dev Switcher */}
      <div style={{
        position: 'fixed', bottom: 16, right: 16, zIndex: 9999,
        display: 'flex', gap: 6, padding: '8px 10px',
        background: 'rgba(5,5,8,0.85)',
        backdropFilter: 'blur(12px)',
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {[
          { key: 'pro',     label: 'Pro ✦' },
          { key: 'luxury',  label: 'Luxury' },
          { key: 'base',    label: 'Base' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => nav(key)}
            style={{
              padding: '5px 12px',
              fontFamily: 'monospace',
              fontSize: 9,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: currentView === key
                ? 'linear-gradient(135deg,#7c3aed,#ec4899)'
                : 'transparent',
              color: currentView === key ? '#fff' : 'rgba(255,255,255,0.4)',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <main>
        {currentView === 'practice' ? <PracticePage />
          : currentView === 'luxury'  ? <MandalaLuxuryPage />
          : currentView === 'base'    ? <MandalaPage />
          :                             <MandalaProPage />}
      </main>
    </>
  )
}

export default App
