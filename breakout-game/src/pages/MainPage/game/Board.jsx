import { useEffect, useRef } from 'react'
import { BallMovement } from './BallMoment'
import s from './Board.module.css'
import { data } from "./../../../dataGame";
import { PeddleMoment } from './Paddle';
import { WallCollision } from './util/WallCollision';
import { Brick } from './Brick';

let bricks = []
let {ballObj, paddleProps, brickObj} = data


export const Board = () => {
  const canvasRef = useRef(null)

  let x = 0
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      let newBrickSet = Brick(2, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      BallMovement(ctx, ballObj)

      WallCollision(ballObj, canvas);

      PeddleMoment(ctx, canvas, paddleProps)




      requestAnimationFrame(render)
    }
    render()
  }, [])


  return (
    <div >
      <canvas 
        id="canvas" 
        className={s.board} 
        ref={canvasRef}
        onMouseMove={(e) => paddleProps.x = e.clientX - paddleProps.width / 2 - 10} 
        height="500px" 
        width="800px"/>
    </div>

  )
}