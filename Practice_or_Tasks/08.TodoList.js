let todoInput = document.getElementById("todo-input"),
addBtn = document.getElementById("add-btn"),
todoList = document.getElementById("todo-list")


/////////////////////////////////////////////////////////// 1.
UL = document.createElement("ul");
const items = [];
addBtn.addEventListener('click', function(){
    items.push(todoInput.value);
    UL.innerHTML = "";
    for (let item of items){
        LI = document.createElement("li");
        LI.innerText = item;
        UL.appendChild(LI);
        todoList.appendChild(UL);
        LI.addEventListener('click', function(){
            console.log(this)
            const index = items.indexOf(this, 0);
            console.log(index)
            console.log(items)
        })
    }
})

////////////////////////////////////////////////////////////// 2.

// let list = `<li>${todoInput}</li>`
// todoList.innerHTML = list;