// Consts and Arrays
const createLetter = this.document.getElementById('criar-carta');
const textLetter = this.document.getElementById('carta-texto');
const generatedLetter = this.document.getElementById('carta-gerada');
const counter = this.document.getElementById('carta-contador');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotateGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewright'];
const groups = [styleGroup, sizeGroup, rotateGroup, skewGroup];

// Sort the index of the array  for the style
function randomGroup(group) {
  const randomNumber = Math.floor(Math.random() * group.length);
  return group[randomNumber];
}

// Join Word + Style 
function addClass(element, newClass) {
  element.classList.add(newClass);
}

// Create the Letter
createLetter.addEventListener('click', () => {
  generatedLetter.innerHTML = null;
  const words = textLetter.value.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = document.createElement('span');
    word.innerHTML = `${words[i]}`;
    for (let j = 0; j < groups.length; j++) {
      addClass(word, randomGroup(groups[j]));
    }
    generatedLetter.appendChild(word);
  }
  const numberWords = document.querySelectorAll('span').length;
  counter.innerHTML = numberWords;
});

// Change the Style
generatedLetter.addEventListener('click', (letter) => {
  if (letter.target !== generatedLetter) {
    letter.target.className = '';
    for (let i = 0; i < groups.length; i++) {
      addClass(letter.target, randomGroup(groups[i]));
    }
  }
});
