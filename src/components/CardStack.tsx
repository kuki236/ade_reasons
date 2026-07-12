import { useState } from 'react'
import './CardStack.css'

interface CardStackProps {
  onBack: () => void
}

const reasons = [
  'Alguien que te cuide',
  'Alguien que te valore',
  'Alguien que se preocupe por ti',
  'Alguien con quien reir',
  'Alguien que te entienda',
  'Alguien que te haga sentir especial',
  'Alguien que siempre este ahi',
  'Alguien que te motive a ser mejor',
  'Alguien que te abrace sin razon',
  'Alguien que te elija todos los dias',
]

export function CardStack({ onBack }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const isComplete = currentIndex >= reasons.length
  const isLast = currentIndex === reasons.length - 1

  const handleNext = () => {
    setCurrentIndex((i) => i + 1)
  }

  if (isComplete) {
    return (
      <div className="card result-card">
        <img src="/Hello_Kitty.webp" alt="" className="result-hk-deco" />
        <div className="result-emoji">💖</div>
        <p className="card-title">
          ¡Descubriste las 10 razones!
        </p>
        <p className="result-text">
          No hay duda, Kuki es el indicado
        </p>
        <button className="btn btn-pink" onClick={onBack} type="button">
          ✨ Volver a empezar
        </button>
      </div>
    )
  }

  const showNext = currentIndex < reasons.length - 1

  return (
    <div className="card-stack">
      <button className="btn-back" onClick={onBack} type="button">
        ← Salir
      </button>

      <p className="card-stack-counter">
        {currentIndex + 1} / {reasons.length}
      </p>

      <div className="card-stack-area">
        {showNext && (
          <div className="card-preview">
            <p className="card-preview-text">{reasons[currentIndex + 1]}</p>
          </div>
        )}

        <div className="card card-current">
          <p className="card-reason">{reasons[currentIndex]}</p>
        </div>
      </div>

      <button
        className="btn btn-pink next-btn"
        onClick={handleNext}
        type="button"
      >
        {isLast ? '✨ Ver resultado' : 'Siguiente razón →'}
      </button>
    </div>
  )
}
