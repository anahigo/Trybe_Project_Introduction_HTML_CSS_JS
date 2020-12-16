// Const
const rgbColor = this.document.getElementById('rgb-color');
const answer = this.document.getElementById('answer');
const colorsBlock = this.document.getElementById('colors');
const score = this.document.getElementById('score');
const restartGame = this.document.getElementById('restart-game');
let points = null;

// Generate RGB
function randomNumber(n) {
  return Math.floor(Math.random() * n);
}

// Generate Color
function randomColor() {
  return `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
}

// Start the Game - Color of Circle
function startGame() {
  const colors = document.querySelectorAll('.ball');
  answer.innerHTML = 'Escolha uma cor';
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = randomColor();
  }
  rgbColor.innerHTML = colors[randomNumber(colors.length)].style.backgroundColor;
}

// Restart the Game 
startGame();
restartGame.addEventListener('click', startGame); 

// Game Score - End of the Game
colorsBlock.addEventListener('click', (choice) => {
  if (choice.target !== colorsBlock) {
    if (choice.target.style.backgroundColor === rgbColor.innerHTML) {
      answer.innerHTML = 'Acertou!';
      points += 3;
      score.innerHTML = `Pontuação: ${points}`;
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  }
});
