const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
const startBtn = document.getElementById('begin-game');

startBtn.addEventListener('click', function () {
  game.startGame();

  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});
