const container = document.querySelector(".container");
const form = document.querySelector("#form");
const input = document.querySelector("#todo");
const addTodo = document.querySelector("#submit");
const collection = document.querySelector("#collection");

//Event Listener
addTodo.addEventListener("click", (e) => {
  if (input.value == "") {
    errorFunction("Fields Should Not Be Empty");
  } else {
    createTodos(todo.value);
  }
  e.preventDefault();

  todo.value = "";
});

//Create Elements and appending child elements
let createTodos = (todo) => {
  let todoList = document.createElement("li");
  todoList.classList.add("lists");
  todoList.innerHTML = todo;
  collection.appendChild(todoList);

  //Creating Edit Icon
  let done = document.createElement("a");
  done.className = "links done-link";
  done.setAttribute("href", "#");
  done.innerHTML = '<i class="fas fa-check icons done-icon"></i>';
  todoList.appendChild(done);

  //Creating Delete Icon
  let del = document.createElement("a");
  del.className = "links delete-link";
  del.setAttribute("href", "#");
  del.innerHTML = '<i class="fas fa-trash icons delete-icon"></i>';
  todoList.appendChild(del);
};

//Completed Todo
collection.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("done-link")) {
    console.log(e.target.parentElement.parentElement.textContent);
  }
});

//Removing Todos
collection.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("delete-link")) {
    if (confirm("Sure")) {
      e.target.parentElement.parentElement.remove();
      errorFunction(`Todo Removed!`);
    }
  }
});

//Error Function
let errorFunction = (msg) => {
  let div = document.createElement("div");
  div.className = "alert alert-danger block w-100";
  div.innerHTML = msg;
  container.insertBefore(div, form);

  setTimeout(() => {
    div.remove();
  }, 2000);
};
