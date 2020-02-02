const body = document.querySelector("body");

const IMG_NUMBER = 7;

//# it's necessary if things are loaded from API
/*function handleImgLoad() {
  console.log("finished loading");
}*/

//#2 load random image
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  //image.addEventListener("loaded", handleImgLoad);
}
//#1 pick random number
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
