import Ball from "./Ball.js";
import Paddle from "./Paddle.js"
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("paddle-left"));
const computerPaddle = new Paddle(document.getElementById("paddle-right"));


let lastTime;
function update(time){
    if(lastTime!=null){
        const delta = time - lastTime;
        // ball.update(delta);
        computerPaddle.update(delta,ball.y);
    }

    lastTime = time;
    window.requestAnimationFrame(update);
}

document.addEventListener("mousemove",e =>{
    playerPaddle.position = (e.y / window.innerHeight) * 100;
})
window.requestAnimationFrame(update);