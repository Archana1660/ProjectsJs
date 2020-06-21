//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event listener
todoButton.addEventListener('click', addTodo) ;
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(event) {
    event.preventDefault(); // prevent event from submitting
    //console.log('hey');

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //completed mark button
    const completedButton = document.createElement('button');
    // completedButton.innerHTML = '<i class="fas fa-check"></i>'// innerText is only for text so we are using innerHTML for the tags to be added inside html
    completedButton.innerHTML = '--'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //completed trash button
    const trashButton = document.createElement('button');
    // trashButton.innerHTML = '<i class="fas fa-trash"></i>'// innerText is only for text so we are using innerHTML for the tags to be added inside html
    trashButton.innerHTML = 'X';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
}

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement; // parentElement targets the immediate parent of the selected item
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //check mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos)
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all": 
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }  
                break;  
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }     
                break;
        }
    });
}