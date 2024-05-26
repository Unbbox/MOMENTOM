const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("[type='text']");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    // JSON.stringify(변수) : 변수 안에 있는 값을 string으로 변환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id))
    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
});

function sayHello(item) {
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null) {
    // JSON.parse(변수) : JSON 문자열을 JavaScript 객체로 변환
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
