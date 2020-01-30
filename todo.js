const toDoForm = document.querySelector(".js-toDoForm");
toDoInput = toDoForm.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//#3 save and array toDos

const toDos = [];

//#4 save todos
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringify is used to change object into string
}

//#2 creat each line of lists
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  //appendChild puts items inside of the element
  toDoList.appendChild(li);
  const toDoObj = { text: text, id: newId };
  toDos.push(toDoObj); //how to put elements inside of array
  saveToDos(); //should be placed below toDoObj to call it
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; //reset status
}

//#1 load saved record from local storage
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    const parsedToDos = JSON.parse(loadToDos); //jason helps you to make object in js to string or vise versa.
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
