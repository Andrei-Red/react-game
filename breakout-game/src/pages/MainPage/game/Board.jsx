//import { render } from '@testing-library/react'
import { useEffect, useRef } from 'react'
import s from './Board.module.css'

export const Board = () => {
  const canvasRef = useRef(null)

  let x = 0
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
  
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.fillStyle = "red"
      ctx.arc(x, 50, 20, 0, 1 * Math.PI)
      ctx.strokeStyle = "black"
      ctx.fill()
      ctx.stroke()
      x += 8
      requestAnimationFrame(render)
    }
    render()
  }, [])


  return (
    <div >
      <canvas id="canvas" className={s.board} ref={canvasRef} height="500px" width="800px"/>
    </div>

  )
}