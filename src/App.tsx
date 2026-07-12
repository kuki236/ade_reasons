import { useState } from 'react'
import { HomeScreen } from './components/HomeScreen'
import { CardStack } from './components/CardStack'
import { SolteraModal } from './components/SolteraModal'
import { HelloKittyLogo } from './components/HelloKittyLogo'
import './App.css'

type Screen = 'home' | 'cards'

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="app">
      <div className="hk-ears">
        <div className="hk-ear hk-ear-left" />
        <div className="hk-ear hk-ear-right" />
      </div>

      <div className="app-header">
        <HelloKittyLogo />
        <h1 className="app-title">Razones Kuki</h1>
      </div>

      {screen === 'home' && (
        <HomeScreen
          onShowReasons={() => setScreen('cards')}
          onShowSoltera={() => setShowModal(true)}
        />
      )}

      {screen === 'cards' && (
        <CardStack onBack={() => setScreen('home')} />
      )}

      {showModal && (
        <SolteraModal onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default App
