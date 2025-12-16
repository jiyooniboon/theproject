

const todoName = document.createElement("input");
todoName.type = "text";

const allItems = document.querySelector("div.container");
allItems.addEventListener("click", (e) => {
    if (e.target.id == "addItem") {
        e.target.replaceWith(todoName);
        todoName.focus();
    }

    if (e.target.id == "active") {
        e.target.id = "done";
    } else if (e.target.id == "done") {
        e.target.id = "active";
    }

})

function addTodo(e) {
    const addItemButton = document.createElement("button");
    addItemButton.innerHTML = "New Todo";
    addItemButton.id = "addItem";


    if (todoName.value == "") {
        todoName.replaceWith(addItemButton);

    } else {
        const lastItem = document.createElement("button");
        lastItem.id = "active";
        lastItem.innerText = todoName.value;

        todoName.replaceWith(lastItem);

        todoName.value = "";
        lastItem.after(addItemButton);
    }

}

// listen for enter press, add new todo item to current list
todoName.addEventListener("keydown", (e) => {
    if (e.key == 'Enter') {
        addTodo(e);

    }
});

todoName.addEventListener("blur", (e) => {
    addTodo(e);

})