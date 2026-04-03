import { useState, useEffect } from 'react'
import MandalaPage from './pages/MandalaPage'
import MandalaLuxuryPage from './pages/MandalaLuxuryPage'

function App() {
  const [currentView, setCurrentView] = useState('luxury')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'base') setCurrentView('base')
      if (hash === 'luxury') setCurrentView('luxury')
    }
    window.addEventListener('hashchange', handleHash)
    handleHash()
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <>
      {/* Development Debug/Switcher - can be removed before production */}
      <div className="fixed top-4 right-4 z-[999] flex gap-2 p-2 bg-[#050505]/80 backdrop-blur-md rounded-lg border border-[#D4AF37]/20">
        <button 
          onClick={() => { window.location.hash = 'luxury'; setCurrentView('luxury') }}
          className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider rounded-sm transition-colors ${currentView === 'luxury' ? 'bg-[#D4AF37] text-black' : 'text-[#D4AF37] hover:bg-[#D4AF37]/10'}`}
        >
          Luxury Ver.
        </button>
        <button 
          onClick={() => { window.location.hash = 'base'; setCurrentView('base') }}
          className={`px-3 py-1 font-mono text-[9px] uppercase tracking-wider rounded-sm transition-colors ${currentView === 'base' ? 'bg-[#E5E0D0] text-black' : 'text-[#E5E0D0] hover:bg-[#E5E0D0]/10'}`}
        >
          Base Ver.
        </button>
      </div>

      <main>
        {currentView === 'luxury' ? <MandalaLuxuryPage /> : <MandalaPage />}
      </main>
    </>
  )
}

export default App
