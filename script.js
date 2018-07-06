const btnStart = document.querySelector('.btnStart');
const gameOverEle = document.getElementById('gameOverEle');
const container = document.getElementById('container');

let gamePlay = false;
let player;
let animateGame;

btnStart.addEventListener('click', startGame);
container.addEventListener('mousedown', mouseDown);

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
