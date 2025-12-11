
console.log("start");

const todoButton = document.getElementById("addNewTodo");
const todoName = document.getElementById("name");
const list = document.getElementById("curList");

const buttons = document.querySelector("button");
buttons.addEventListener("click", checkTodo);

todoButton.addEventListener("click", btnPressAdd);

function btnPressAdd() {
    const checkBtn = document.createElement("button");
    checkBtn.textContent = todoName.value;
    list.appendChild(checkBtn);

    todoName.value = "";
}

function checkTodo() {
    console.log(buttons);

}