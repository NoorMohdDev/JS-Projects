const container = document.querySelector(".container");
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoContainer = document.querySelector(".todo-container");
let todoDelete = "";
let todoEdit = "";

loadFromStorage();

todoInput.addEventListener("input", setInput);
todoBtn.addEventListener("click", addTodo);

function setInput(e) {
  todoInput.value = e.target.value;
}

function addTodo(e) {
  if (todoInput.value === "") {
    alert("Please Type Something");
  } else {
    const newTodo = document.createElement("div");
    newTodo.innerHTML = `<p>${todoInput.value}</P>
        <button type="button" class="edit">Edit</button>
        <button type="button" class="delete">Delete</button>`;
    newTodo.classList.add("todo");
    todoInput.value = "";
    todoContainer.appendChild(newTodo);
    todoDelete = document.querySelectorAll(".delete");
    todoEdit = document.querySelectorAll(".edit");
    localStorage.setItem("data", todoContainer.innerHTML);
    setEventListener(todoEdit, todoDelete);
  }
}

function setEventListener(todoEdit, todoDelete) {
  todoEdit.forEach((element) => {
    element.addEventListener("click", editTodo);
  });
  todoDelete.forEach((element) => {
    element.addEventListener("click", deleteTodo);
  });
}

function editTodo(e) {
  if (todoInput.value !== e.target.parentElement.firstElementChild.innerText) {
    todoInput.value = e.target.parentElement.firstElementChild.innerText;

    todoBtn.innerText = "Edit Todo";

    todoBtn.removeEventListener("click", addTodo);

    todoBtn.addEventListener("click", function editHelper(e2) {
      if (todoInput.value !== "") {
        e.target.parentElement.firstElementChild.innerText = todoInput.value;
      }
      todoInput.value = "";
      todoBtn.innerText = "Add Todo";
      todoBtn.addEventListener("click", addTodo);
      todoBtn.removeEventListener("click", editHelper);
      localStorage.setItem("data", todoContainer.innerHTML);
    });
  }
}

function deleteTodo(e) {
  todoInput.value = "";
  e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  localStorage.setItem("data", todoContainer.innerHTML);
}

function loadFromStorage() {
  const data = localStorage.getItem("data");

  if (data) {
    todoContainer.innerHTML = data;
    todoDelete = document.querySelectorAll(".delete");
    todoEdit = document.querySelectorAll(".edit");

    setEventListener(todoEdit, todoDelete);
  }
}
