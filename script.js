
const addItemButton = document.getElementById("addItem");
const activeItems = document.querySelectorAll("#active");
const compItems = document.querySelectorAll("#done");

const current = document.querySelector("section.curList ul");


const todoName = document.createElement("input");
todoName.id = "name";
todoName.type = "text";


addItemButton.addEventListener("click", getName);

todoName.addEventListener("keydown", (e) => {
    if (e.key == 'Enter') {
        const lastItem = document.createElement("button");
        lastItem.id = "active";
        lastItem.innerText = todoName.value;

        console.log(lastItem);
        const lastItemLi = document.createElement("li");
        lastItemLi.appendChild(lastItem);
        current.appendChild(lastItemLi);

        todoName.value = "";
        todoName.hidden = true;
        current.appendChild(addItemButton);
        addItemButton.hidden = false;

        console.log(current);

    }

});

//activeItems.addEventListener("click", checkTodo);
//compItems.addEventListener("click", uncheckTodo);

function getName() {
    // button turns into text input,
    // when press enter in text input, run addItem
    //addItemButton.hidden();
    addItemButton.hidden = true;
    
    current.appendChild(todoName);
    todoName.hidden = false;


}

function addItem() {



}

function checkTodo() {
    // delete button from curlist
    // add it to complist 
}

function uncheckTodo() {
    // delete button from complist
    // add it to curlist
}