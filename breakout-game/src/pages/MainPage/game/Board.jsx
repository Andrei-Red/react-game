import { useEffect, useRef } from 'react'
import { BallMovement } from './BallMoment'
import s from './Board.module.css'
import { data } from "./../../../dataGame";
import { WallCollision } from './util/WallCollision';

export const Board = () => {
  const canvasRef = useRef(null)

  let x = 0
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
  
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let {ballObj} = data
      BallMovement(ctx, ballObj)
 
      WallCollision(ballObj, canvas);
      
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