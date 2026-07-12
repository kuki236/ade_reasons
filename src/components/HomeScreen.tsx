interface HomeScreenProps {
  onShowReasons: () => void
  onShowSoltera: () => void
}

export function HomeScreen({ onShowReasons, onShowSoltera }: HomeScreenProps) {
  return (
    <div className="card home-card">
      <img
        src="/Hello_Kitty.webp"
        alt=""
        className="home-hk-deco"
      />
      <p className="card-subtitle">
        Descubre las razones
      </p>

      <button
        className="btn btn-pink"
        onClick={onShowReasons}
        type="button"
      >
        🎀 10 razones para estar con Kuki
      </button>

      <div className="home-divider">
        <span className="home-divider-line" />
        <span className="home-divider-text">o</span>
        <span className="home-divider-line" />
      </div>

      <button
        className="btn btn-outline"
        onClick={onShowSoltera}
        type="button"
      >
        💔 Seguir soltera
      </button>
    </div>
  )
}
