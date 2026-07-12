import './SolteraModal.css'

interface SolteraModalProps {
  onClose: () => void
}

export function SolteraModal({ onClose }: SolteraModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose} data-testid="modal-overlay">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <span className="modal-emoji">😅</span>
        <p className="modal-message">
          MM.. no encuentro.<br />
          mejor prueba la otra opción
        </p>
        <button className="modal-btn" onClick={onClose} type="button">
          🎀 Ver razones
        </button>
      </div>
    </div>
  )
}
