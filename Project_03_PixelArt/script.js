const arrayColors = ['black'];
function randomColors() {
  for (let i = 1; i < 10; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    arrayColors[i] = `#${randomColor}`;
  }
}

window.onload = () => {
  randomColors();

  const color = document.getElementsByClassName('color');
  const colorPalette = document.getElementById('color-palette');
  const pixelBoard = document.getElementById('pixel-board');
  const clearBoard = document.getElementById('clear-button');

  for (let i = 0; i < color.length; i += 1) {
    color[i].style.backgroundColor = arrayColors[i];
  }

  colorPalette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

  pixelBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  });

  clearBoard.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
};