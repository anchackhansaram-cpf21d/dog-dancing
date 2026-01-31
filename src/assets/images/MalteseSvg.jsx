const MalteseSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 300 350"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="하얀색 말티즈 강아지"
  >
    {/* Body */}
    <ellipse cx="150" cy="230" rx="80" ry="60" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5" />
    {/* Fluffy body fur */}
    <ellipse cx="150" cy="225" rx="75" ry="55" fill="#fafafa" />
    <circle cx="100" cy="220" r="20" fill="#f0f0f0" opacity="0.6" />
    <circle cx="200" cy="220" r="20" fill="#f0f0f0" opacity="0.6" />
    <circle cx="150" cy="260" r="18" fill="#f0f0f0" opacity="0.5" />

    {/* Tail */}
    <path
      d="M 230 210 Q 270 170 260 140 Q 255 130 245 140 Q 240 160 220 200"
      fill="#f5f5f5"
      stroke="#e0e0e0"
      strokeWidth="1"
    />
    <circle cx="258" cy="142" r="10" fill="#fafafa" />

    {/* Back legs */}
    <rect x="105" y="270" width="22" height="45" rx="11" fill="#f0f0f0" stroke="#e0e0e0" strokeWidth="1" />
    <rect x="173" y="270" width="22" height="45" rx="11" fill="#f0f0f0" stroke="#e0e0e0" strokeWidth="1" />
    {/* Back paws */}
    <ellipse cx="116" cy="318" rx="14" ry="8" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
    <ellipse cx="184" cy="318" rx="14" ry="8" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />

    {/* Front legs */}
    <rect x="85" y="265" width="20" height="50" rx="10" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
    <rect x="195" y="265" width="20" height="50" rx="10" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
    {/* Front paws */}
    <ellipse cx="95" cy="318" rx="13" ry="8" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1" />
    <ellipse cx="205" cy="318" rx="13" ry="8" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1" />

    {/* Neck fluff */}
    <ellipse cx="150" cy="185" rx="45" ry="25" fill="#fafafa" />

    {/* Head */}
    <circle cx="150" cy="130" r="55" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5" />
    {/* Head fur detail */}
    <circle cx="150" cy="125" r="50" fill="#fafafa" />

    {/* Fluffy top fur */}
    <circle cx="130" cy="82" r="15" fill="#f5f5f5" />
    <circle cx="150" cy="78" r="16" fill="#fafafa" />
    <circle cx="170" cy="82" r="15" fill="#f5f5f5" />
    <circle cx="140" cy="88" r="12" fill="#fefefe" />
    <circle cx="160" cy="88" r="12" fill="#fefefe" />

    {/* Ears */}
    <ellipse cx="100" cy="110" rx="25" ry="35" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" transform="rotate(-15 100 110)" />
    <ellipse cx="100" cy="110" rx="20" ry="30" fill="#fce4ec" transform="rotate(-15 100 110)" opacity="0.3" />
    {/* Ear fur */}
    <circle cx="90" cy="100" r="8" fill="#fafafa" opacity="0.7" />
    <circle cx="95" cy="115" r="7" fill="#fafafa" opacity="0.7" />

    <ellipse cx="200" cy="110" rx="25" ry="35" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" transform="rotate(15 200 110)" />
    <ellipse cx="200" cy="110" rx="20" ry="30" fill="#fce4ec" transform="rotate(15 200 110)" opacity="0.3" />
    {/* Ear fur */}
    <circle cx="210" cy="100" r="8" fill="#fafafa" opacity="0.7" />
    <circle cx="205" cy="115" r="7" fill="#fafafa" opacity="0.7" />

    {/* Eyes */}
    <circle cx="130" cy="125" r="8" fill="#1a1a1a" />
    <circle cx="170" cy="125" r="8" fill="#1a1a1a" />
    {/* Eye shine */}
    <circle cx="133" cy="122" r="3" fill="#fff" />
    <circle cx="173" cy="122" r="3" fill="#fff" />

    {/* Nose */}
    <ellipse cx="150" cy="145" rx="7" ry="5" fill="#333" />
    <circle cx="148" cy="143" r="1.5" fill="#555" />

    {/* Mouth */}
    <path d="M 143 150 Q 150 158 157 150" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />

    {/* Tongue */}
    <ellipse cx="150" cy="158" rx="5" ry="7" fill="#ff8a9e" stroke="#e57388" strokeWidth="0.5" />

    {/* Cheek blush */}
    <circle cx="115" cy="140" r="10" fill="#ffcdd2" opacity="0.4" />
    <circle cx="185" cy="140" r="10" fill="#ffcdd2" opacity="0.4" />

    {/* Whiskers */}
    <line x1="110" y1="142" x2="75" y2="135" stroke="#ccc" strokeWidth="0.8" />
    <line x1="110" y1="148" x2="72" y2="150" stroke="#ccc" strokeWidth="0.8" />
    <line x1="190" y1="142" x2="225" y2="135" stroke="#ccc" strokeWidth="0.8" />
    <line x1="190" y1="148" x2="228" y2="150" stroke="#ccc" strokeWidth="0.8" />
  </svg>
)

export default MalteseSvg
