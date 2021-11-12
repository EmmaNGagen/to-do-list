class Todo {
  constructor(todoItem) {
    this.item = todoItem;
    this.done = false;
  }
}

let gotogym = new Todo("Gå till gymmet");
let paybills = new Todo("Betala räkningar");
let buyfood = new Todo("Handla kvällsmat");
let washdishes = new Todo("Diska");
let laundry = new Todo("Hänga upp tvätt");

let todos = [gotogym, paybills, buyfood, washdishes, laundry];

window.onload = function () {
  document.getElementById("addTo").addEventListener("click", addItemToList);

  addtheLi();
  xTolist();
};

function addItemToList() {
  event.preventDefault();
  let myTextValue = document.getElementById("theInput").value;
  let theNewTodo = new Todo(myTextValue);
  todos.push(theNewTodo);
  addtheLi();
}

function addtheLi() {
  let theUl = document.createElement("ul");
  theUl.className = "myUl";

  document.getElementById("containerList").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let theLi = document.createElement("li");
    theLi.innerHTML = todos[i].item;
    theLi.addEventListener("click", () => {
      checked(i);
    });

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    span.addEventListener("click", () => {
      closeBtn(i);
    });
    theLi.appendChild(span);

    if (todos[i].done) {
      theLi.className = "checked";
    }

    theUl.appendChild(theLi);
    console.log(todos[i].item);
  }

  document.getElementById("containerList").appendChild(theUl);
}

//ta bort x - u00D7 är x
function xTolist() {
  let mydolist = document.getElementsByTagName("li");
  let i;
  for (i = 0; i < mydolist.length; i++) {
    mydolist[i].appendChild(span);
  }
}
// Klicka på en close knapp för att ta bort från listan
function closeBtn(i) {
  todos.splice(i, 1);
  addtheLi();
}
// En "checked" streck när man klickar på ett uppgift - objekt?
function checked(i) {
  todos[i].done = !todos[i].done;
  addtheLi();
}
