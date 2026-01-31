import { useState, useEffect } from 'react'
import MalteseSvg from '../assets/images/MalteseSvg'
import '../styles/animations.css'

const NOTES = ['♪', '♫', '♬', '♩', '🎵', '🎶']

export default function DancingMaltese({ isPlaying, currentMove, speed }) {
  const [notes, setNotes] = useState([])
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    if (!isPlaying) return

    const noteInterval = setInterval(() => {
      const id = Date.now() + Math.random()
      const note = NOTES[Math.floor(Math.random() * NOTES.length)]
      const left = Math.random() * 100
      const top = Math.random() * 40

      setNotes(prev => [...prev.slice(-6), { id, note, left, top }])
    }, 800 / speed)

    return () => clearInterval(noteInterval)
  }, [isPlaying, speed])

  useEffect(() => {
    if (!isPlaying) return

    const sparkleInterval = setInterval(() => {
      const id = Date.now() + Math.random()
      const left = Math.random() * 100
      const top = Math.random() * 100
      const delay = Math.random() * 1

      setSparkles(prev => [...prev.slice(-8), { id, left, top, delay }])
    }, 600 / speed)

    return () => clearInterval(sparkleInterval)
  }, [isPlaying, speed])

  useEffect(() => {
    if (!isPlaying) {
      setNotes([])
      setSparkles([])
    }
  }, [isPlaying])

  const animationClass = `dance-${currentMove} ${!isPlaying ? 'dance-paused' : ''}`
  const animationDuration = {
    bounce: 0.8,
    wiggle: 0.6,
    spin: 1.2,
    shake: 0.5,
    moonwalk: 2,
  }

  const duration = (animationDuration[currentMove] || 1) / speed

  return (
    <div className="maltese-stage">
      <div className="effects-container">
        {notes.map(({ id, note, left, top }) => (
          <span
            key={id}
            className="music-note"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            {note}
          </span>
        ))}
        {sparkles.map(({ id, left, top, delay }) => (
          <span
            key={id}
            className="sparkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div
        className="maltese-wrapper"
        style={{ animationDuration: `${duration}s` }}
      >
        <MalteseSvg className={animationClass} style={{ animationDuration: `${duration}s` }} />
      </div>

      <div className="dance-floor">
        <div className="shadow" style={{ animationDuration: `${duration}s` }} />
      </div>
    </div>
  )
}
