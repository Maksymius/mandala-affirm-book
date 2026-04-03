import { useState, useEffect } from 'react'
import MandalaPage from './pages/MandalaPage'
import MandalaLuxuryPage from './pages/MandalaLuxuryPage'
import PracticePage from './pages/PracticePage'

function App() {
  const [currentView, setCurrentView] = useState('luxury')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'base') setCurrentView('base')
      if (hash === 'luxury') setCurrentView('luxury')
      if (hash === 'practice') setCurrentView('practice')
    }
    window.addEventListener('hashchange', handleHash)
    handleHash()
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <>
      {/* Development Debug/Switcher - can be removed before production */}
      <div className="fixed bottom-4 right-4 z-999 flex gap-2 p-2 bg-obsidian/80 backdrop-blur-md rounded-lg border border-gold/20">
        <button 
          onClick={() => { window.location.hash = 'luxury'; setCurrentView('luxury') }}
          className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider rounded-sm transition-colors ${currentView === 'luxury' ? 'bg-gold text-black' : 'text-gold hover:bg-gold/10'}`}
        >
          Luxury Ver.
        </button>
        <button 
          onClick={() => { window.location.hash = 'base'; setCurrentView('base') }}
          className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider rounded-sm transition-colors ${currentView === 'base' ? 'bg-bone text-black' : 'text-bone hover:bg-bone/10'}`}
        >
          Base Ver.
        </button>
      </div>

      <main>
        {currentView === 'practice' ? <PracticePage /> : currentView === 'luxury' ? <MandalaLuxuryPage /> : <MandalaPage />}
      </main>
    </>
  )
}

export default App
