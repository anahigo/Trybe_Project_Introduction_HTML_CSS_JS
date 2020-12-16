window.onload = () => {
  //Variables
  const memeImage = this.document.getElementById("meme-image"); //box image
  const memeInsert = this.document.getElementById("meme-insert"); //select image
  const memeText = this.document.getElementById("meme-text"); //text image
  const textInput = this.document.getElementById("text-input"); //box text

  //Event + Function uploadImage
  memeInsert.addEventListener("input", () => memeImage.src = URL.createObjectURL(memeInsert.files[0]));

  //Event + Function textImage
  textInput.addEventListener("input", () => memeText.innerHTML = textInput.value);
};

function openImage(image) {
  document.getElementById("meme-image").src = image
}

//Variables - buttons style
const memeText = this.document.getElementById("meme-text"); //text image
const meme = this.document.getElementById("meme-image"); //div meme
const button01 = this.document.getElementById("button01"); //border solid
const button02 = this.document.getElementById("button02"); //border double
const button03 = this.document.getElementById("button03"); //border none
const button04 = this.document.getElementById("button04"); //font courier new
const button05 = this.document.getElementById("button05"); //font heveltica
const button06 = this.document.getElementById("button06"); //font special elite
const button07 = this.document.getElementById("button07"); //color white
const button08 = this.document.getElementById("button08"); //color black
const button09 = this.document.getElementById("button09"); //color red
const button10 = this.document.getElementById("button10"); //size 20pt
const button11 = this.document.getElementById("button11"); //size 25pt
const button12 = this.document.getElementById("button12"); //size 30pt

//Event + Function buttonSolid
button01.addEventListener("click", () => meme.style.border = "6px solid red");

//Event + Function buttonDouble
button02.addEventListener("click", () => meme.style.border = "6px double red");

//Event + Function buttonNone
button03.addEventListener("click", () => meme.style.border = "1px solid black");

//Event + Function buttonCourier
button04.addEventListener("click", () => memeText.style.fontFamily = "courier new");

//Event + Function buttonHeveltica
button05.addEventListener("click", () => memeText.style.fontFamily = "heveltica");

//Event + Function buttonSpecial
button06.addEventListener("click", () => memeText.style.fontFamily = "special elite");

//Event + Function buttonWhite
button07.addEventListener("click", () => memeText.style.color= "white");

//Event + Function buttonBlack
button08.addEventListener("click", () => memeText.style.color = "black");

//Event + Function buttonRed
button09.addEventListener("click", () => memeText.style.color = "red");

//Event + Function button20
button10.addEventListener("click", () => memeText.style.fontSize = "25pt");

//Event + Function button25
button11.addEventListener("click", () => memeText.style.fontSize = "30pt");

//Event + Function button30
button12.addEventListener("click", () => memeText.style.fontSize = "35pt");
