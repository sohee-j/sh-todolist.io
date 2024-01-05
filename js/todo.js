const todoWrap = document.querySelector('.todo-wrap');
const todoForm = todoWrap.querySelector('.todo-form');
const todoInput = todoForm.querySelector("input");
const todoList = todoWrap.querySelector('.todo-list');

let toDosArry = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDosArry))
}

function deleteTodo(e){
  const deleteList = e.target.parentElement;
  deleteList.remove();
  toDosArry = toDosArry.filter(item => item.id !== parseInt(deleteList.id));
  saveToDos();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("list")
  li.innerHTML = `<div class="title"><span class="text">${newTodo.text}</span></div>`;

  const deletBtn = document.createElement("i");
  deletBtn.classList.add("bi", "bi-trash");
  deletBtn.addEventListener("click", deleteTodo)

  li.appendChild(deletBtn);
  todoList.appendChild(li);
}



function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = todoInput.value;
  console.log('newTodo', newTodo)
  todoInput.value = '';
  const newTodoObj = {
    text : newTodo,
    id:Date.now()
  }
  toDosArry.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null){
  const listTodo = JSON.parse(savedTodos);
  toDosArry = listTodo;
  listTodo.forEach(item => {
    paintTodo(item);
  });
}else{

}