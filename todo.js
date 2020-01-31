const toDoForm = document.querySelector(".js-toDoForm");
toDoInput = toDoForm.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

/*# 5 filter will create an array with the itmes that the function returns true from
function filterFn(toDo) {
  return toDo.id === 1;
}*/

//#3 save and array toDos

let toDos = [];

//#4 activate delete function to delete items from local storage as well

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id); //change li.id into number
  }); // they give an array of items that pass a check from filter function
  console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

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
  delBtn.addEventListener("click", deleteToDo);
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
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //jason helps you to make object in js to string or vise versa.
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text); // filter and forEach execute function for every item on the list
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
