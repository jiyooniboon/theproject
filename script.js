
console.log("start");

const todoButton = document.querySelector("button");
const todoName = document.getElementById("name");
const list = document.getElementById("curList");

todoButton.addEventListener("click", btnPressAdd);

function btnPressAdd() {
    // open modal or dialogue? with form
    // on submit form make new todo item
    console.log(todoName.value);
    const addTodo = document.createElement("li");
    addTodo.textContent = todoName.value;
    list.appendChild(addTodo);
    console.log(addTodo);
    todoName.value = "";
}

