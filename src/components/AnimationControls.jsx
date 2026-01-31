const MOVE_LABELS = {
  bounce: '통통 뛰기',
  wiggle: '엉덩이 흔들기',
  spin: '빙글빙글 회전',
  shake: '부르르 떨기',
  moonwalk: '문워크',
}

const MOVE_EMOJI = {
  bounce: '⬆️',
  wiggle: '🍑',
  spin: '🌀',
  shake: '💃',
  moonwalk: '🕺',
}

export default function AnimationControls({
  isPlaying,
  currentMove,
  speed,
  onTogglePlay,
  onChangeDanceMove,
  onChangeSpeed,
  danceMoves,
}) {
  return (
    <div className="controls-panel">
      <h2 className="controls-title">댄스 컨트롤</h2>

      <div className="controls-row">
        <button
          className={`btn btn-play ${isPlaying ? 'playing' : 'paused'}`}
          onClick={onTogglePlay}
          aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        >
          {isPlaying ? '⏸ 정지' : '▶️ 시작'}
        </button>

        <button
          className="btn btn-dance"
          onClick={onChangeDanceMove}
          aria-label="춤 동작 변경"
        >
          🔄 동작 변경
        </button>
      </div>

      <div className="current-move">
        <span className="move-emoji">{MOVE_EMOJI[currentMove]}</span>
        <span className="move-label">{MOVE_LABELS[currentMove]}</span>
      </div>

      <div className="dance-moves-grid">
        {danceMoves.map((move) => (
          <button
            key={move}
            className={`btn btn-move ${currentMove === move ? 'active' : ''}`}
            onClick={() => onChangeDanceMove(move)}
            aria-label={`${MOVE_LABELS[move]} 동작 선택`}
          >
            {MOVE_EMOJI[move]} {MOVE_LABELS[move]}
          </button>
        ))}
      </div>

      <div className="speed-control">
        <label htmlFor="speed-slider" className="speed-label">
          속도: {speed.toFixed(1)}x
        </label>
        <input
          id="speed-slider"
          type="range"
          min="0.3"
          max="3"
          step="0.1"
          value={speed}
          onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
          className="speed-slider"
          aria-label="애니메이션 속도 조절"
        />
        <div className="speed-labels">
          <span>느리게</span>
          <span>빠르게</span>
        </div>
      </div>
    </div>
  )
}
