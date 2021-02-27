import { data } from "./../dataGame";
//import ResetBall from "./ResetBall";

export const CheckGame = (bricks, player, canvas, ballObj) => {
  let { brickObj } = data;

  let total = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  }
  if (total === bricks.length) {
    player.level++;
    //ResetBall(ballObj, canvas, paddleProps);
    brickObj.y = 50;
  }
}