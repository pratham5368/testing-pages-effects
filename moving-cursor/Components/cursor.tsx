import React, { useState, useEffect } from "react"
import './style.css';

function cursor() {
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  useEffect(() => {
    const moveCursor = (e) => { }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
      <div className="App">
        <div className="cursor" />
      </div>
  
  )
}

export default cursor