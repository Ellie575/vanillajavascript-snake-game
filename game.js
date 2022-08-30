import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRendered = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRendered < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();

  function update() {
    updateSnake();
  }
}

function draw() {
  drawSnake(gameBoard);
}

window.requestAnimationFrame(main);
