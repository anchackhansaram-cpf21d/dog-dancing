import { useState, useCallback } from 'react'

const DANCE_MOVES = ['bounce', 'wiggle', 'spin', 'shake', 'moonwalk']

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentMove, setCurrentMove] = useState('bounce')
  const [speed, setSpeed] = useState(1)

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  const changeDanceMove = useCallback((move) => {
    if (typeof move === 'string' && DANCE_MOVES.includes(move)) {
      setCurrentMove(move)
    } else {
      setCurrentMove(prev => {
        const currentIndex = DANCE_MOVES.indexOf(prev)
        const nextIndex = (currentIndex + 1) % DANCE_MOVES.length
        return DANCE_MOVES[nextIndex]
      })
    }
  }, [])

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed)
  }, [])

  return {
    isPlaying,
    currentMove,
    speed,
    togglePlay,
    changeDanceMove,
    changeSpeed,
    danceMoves: DANCE_MOVES,
  }
}
