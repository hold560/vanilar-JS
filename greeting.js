const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greeting");
/* 3 ways to select elements  
querySelector
querySelectorAll-irriating to get one element outside of array
getElementById*/

//#1 creat necessary const value
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//#6 save name record in local storage
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//#5 prevent default act once it's submited
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

//#4 creat event when it's first time to ask name
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

//#2 creat messages to show
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

//#3 load messages according to the case
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

// data can be saved on my browser like application - local storage//
