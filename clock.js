const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

//1)load the clock
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //2) print time on title and adjust the format to print time
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds // mini if applied
  }`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
  //setInterval(function, miliseconds)
}

init();
