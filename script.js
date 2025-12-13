
const addItemButton = document.getElementById("addItem");
const current = document.querySelector("section.curList ul");
const done = document.querySelector("section.compList ul");

const todoName = document.createElement("input");
todoName.id = "name";
todoName.type = "text";

addItemButton.addEventListener("click", getName);

// listen for enter press, add new todo item to current list
todoName.addEventListener("keydown", (e) => {
    if (e.key == 'Enter') {

        if (todoName.value == "") {
            // switch back if no input
            current.replaceChild(addItemButton, todoName);
        } else {
            const lastItem = document.createElement("button");
            lastItem.id = "active";
            lastItem.innerText = todoName.value;

            current.replaceChild(lastItem, todoName);

            todoName.value = "";
            current.appendChild(addItemButton);
        }
    }
});

// button turns into text input 
// text input listens for enter keydown
function getName() {
    current.replaceChild(todoName, addItemButton);
    todoName.focus();
}

// not in use
function addItem() {
    const lastItem = document.createElement("button");
    lastItem.id = "active";
    lastItem.innerText = todoName.value;

    const lastItemLi = document.createElement("li");
    lastItemLi.appendChild(lastItem);
    current.replaceChild(lastItemLi, todoName);

    todoName.value = "";
    current.appendChild(addItemButton);
}

current.addEventListener("click", (e) => {
    if (e.target.id == "active") {
        e.target.id = "done";
        current.removeChild(e.target);
        done.appendChild(e.target);
    }

})

done.addEventListener("click", (e) => {
    if (e.target.id == "done") {
        e.target.id = "active";

        current.insertBefore(e.target, addItemButton);

    }

})