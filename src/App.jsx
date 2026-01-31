import Layout from './components/Layout'
import DancingMaltese from './components/DancingMaltese'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './App.css'

function App() {
  const {
    isPlaying,
    currentMove,
    speed,
    togglePlay,
    changeDanceMove,
    changeSpeed,
    danceMoves,
  } = useAnimation()

  return (
    <Layout>
      <div className="app-content">
        <DancingMaltese
          isPlaying={isPlaying}
          currentMove={currentMove}
          speed={speed}
        />
        <AnimationControls
          isPlaying={isPlaying}
          currentMove={currentMove}
          speed={speed}
          onTogglePlay={togglePlay}
          onChangeDanceMove={changeDanceMove}
          onChangeSpeed={changeSpeed}
          danceMoves={danceMoves}
        />
      </div>
    </Layout>
  )
}

export default App
