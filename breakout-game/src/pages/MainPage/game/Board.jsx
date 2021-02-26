import s from './Board.module.css'

export const Board = () => {
  return (
    <div >
      <canvas id="canvas" className={s.board} height="500px" width="800px"/>
    </div>

  )
}