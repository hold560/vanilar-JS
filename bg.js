const body = document.querySelector("body");

const IMG_NUMBER = 3;

//#2
function paintImage(imgNumber) {
  const image = new Image();
  img.src = `/images/${imgNumber + 1}.jpg`;
}
//#1 pick random number
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
}

init();
