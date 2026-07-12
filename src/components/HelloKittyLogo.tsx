export function HelloKittyLogo() {
  return (
    <div className="hk-logo" aria-hidden="true">
      <svg
        viewBox="0 0 120 100"
        width="80"
        height="67"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left ear */}
        <ellipse cx="30" cy="20" rx="18" ry="16" fill="white" stroke="#f48fb1" strokeWidth="1.5" />
        {/* Right ear */}
        <ellipse cx="90" cy="20" rx="18" ry="16" fill="white" stroke="#f48fb1" strokeWidth="1.5" />

        {/* Head */}
        <ellipse cx="60" cy="50" rx="38" ry="32" fill="white" stroke="#f48fb1" strokeWidth="1.5" />

        {/* Left inner ear */}
        <ellipse cx="30" cy="22" rx="10" ry="8" fill="#f8bbd0" />
        {/* Right inner ear */}
        <ellipse cx="90" cy="22" rx="10" ry="8" fill="#f8bbd0" />

        {/* Bow center */}
        <rect x="66" y="10" width="10" height="18" rx="5" fill="#e91e63" />

        {/* Bow left loop */}
        <ellipse cx="61" cy="18" rx="12" ry="7" fill="#e91e63" transform="rotate(-15, 61, 18)" />
        {/* Bow right loop */}
        <ellipse cx="81" cy="18" rx="12" ry="7" fill="#e91e63" transform="rotate(15, 81, 18)" />

        {/* Bow tail left */}
        <path d="M64 26 L58 34 L62 34 L56 40" stroke="#e91e63" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Eyes */}
        <ellipse cx="48" cy="46" rx="3" ry="3.5" fill="#333" />
        <ellipse cx="72" cy="46" rx="3" ry="3.5" fill="#333" />

        {/* Eye shine */}
        <ellipse cx="49" cy="44.5" rx="1" ry="1" fill="white" />
        <ellipse cx="73" cy="44.5" rx="1" ry="1" fill="white" />

        {/* Nose */}
        <ellipse cx="60" cy="54" rx="3" ry="2" fill="#FFD54F" />

        {/* Whiskers left */}
        <line x1="30" y1="50" x2="42" y2="53" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="28" y1="56" x2="42" y2="56" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="30" y1="62" x2="42" y2="59" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round" />

        {/* Whiskers right */}
        <line x1="90" y1="50" x2="78" y2="53" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="92" y1="56" x2="78" y2="56" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="90" y1="62" x2="78" y2="59" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round" />

        {/* Mouth */}
        <path d="M55 58 Q60 63 65 58" stroke="#bbb" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}
