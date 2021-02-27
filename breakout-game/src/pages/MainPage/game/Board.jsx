import { useEffect, useRef } from 'react'
import { BallMovement } from './BallMoment'
import s from './Board.module.css'
import { data } from "./../../../dataGame";
import { PeddleMoment } from './Paddle';
import { WallCollision } from './util/WallCollision';
import { Brick } from './Brick';
import { BrickCollision } from './util/BrickCollision';
import { PaddleHit } from './util/PaddaleHit';
import { PlayerStats } from './PlayerStats';
import { CheckGame } from './util/CheckGame';

let bricks = []
let {ballObj, paddleProps, brickObj, player} = data


export const Board = () => {
  const canvasRef = useRef(null)

  let x = 0
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      paddleProps.y = canvas.height - 30

      let newBrickSet = Brick(2, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }



      ctx.clearRect(0, 0, canvas.width, canvas.height)

      PlayerStats(ctx, player, canvas)
      
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      BallMovement(ctx, ballObj)

      CheckGame(bricks, player, canvas, ballObj)

      WallCollision(ballObj, canvas, player, paddleProps);

      let brickCollision;

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);

        if (brickCollision.hit && !bricks[i].broke) {
          if (brickCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10
        }
      }

      PeddleMoment(ctx, canvas, paddleProps)

      PaddleHit(ballObj, paddleProps)

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