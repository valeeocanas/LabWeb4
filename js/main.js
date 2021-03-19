var btnPost = document.getElementById("ButtonPost");
btnPost.addEventListener('click',post);

var btnClear = document.getElementById("ButtonClear");
btnClear.addEventListener('click',clear);

var btnMark = document.getElementById("ButtonMark");
btnMark.addEventListener('click',mark);

var btnDelete = document.getElementById("ButtonDelete");
btnDelete.addEventListener('click',del);


function post(e) {
  e.preventDefault();
  var nTodo = document.getElementById("todoText").value;
  var listTodo = document.getElementById("todoList");
  var currentListHTML = listTodo.innerHTML;
  listTodo.innerHTML = currentListHTML + `<input type = "checkbox" name = "nTodo" /> ${nTodo} <br>`;
}

function clear() {
 var todos = document.getElementsByName("nTodo");
  
  console.log(todos);
  
  for(var i=0; i<todos.length; i++){
   todos[i].checked = false;
  }
}

function mark() {
  var todos = document.getElementsByName("nTodo");
  
  console.log(todos);
  
  for(var i=0; i<todos.length; i++){
   todos[i].checked = true;
  }
}

function del() {
  console.log("del");
  var listTodo = document.getElementById("todoList");
  console.log(listTodo);
  listTodo.innerHTML = ""
  
}