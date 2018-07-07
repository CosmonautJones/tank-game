const btnStart = document.querySelector('.btnStart');
const gameOverEle = document.getElementById('gameOverEle');
const container = document.getElementById('container');
const box = document.querySelector('.box');
const boxCenter = [box.offsetLeft + box.offsetWidth / 2, box.offsetTop + (box.offsetHeight / 2)];

let gamePlay = false;
let player;
let animateGame;

btnStart.addEventListener('click', startGame);
container.addEventListener('mousedown', mouseDown);
container.addEventListener('mousemove', mousePosition);

function mousePosition(event) {
  // console.log(event);
  let mouseAngle = getDeg(event);
  console.log(mouseAngle);
}

function getDeg(event) {
  let angle = Math.atan2(event.clientX - boxCenter[0], (event.clientY - boxCenter[1]));
  return angle * (180 / Math.PI);
}

function mouseDown(event) {
  if (gamePlay) {
    console.log('FIRE!');
  }
}

function startGame() {
  gamePlay = true;
  gameOverEle.style.display = 'none';
  player = {
    score: 0,
    barwidth: 100,
    lives: 100
  };
  animateGame = requestAnimationFrame(playGame);
}

function playGame() {
  if (gamePlay) {
    // moves shots
    // update dashboard
    // move our enemy
    animateGame = requestAnimationFrame(playGame);
  }
}
