
const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const clearBtn = document.querySelector('.footer button');
const amount = document.querySelector('#amount');
const listArr = [];


inputBox.addEventListener('keyup', () => {
    let userData = inputBox.value;
    if (userData !== "") {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
})
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
        updateTask();
        showTasks();
    }
});

addBtn.addEventListener('click', () => {
    // let userData = inputBox.value;
    // let getLocalStorage = localStorage.getItem("New Todo");
    // if (getLocalStorage == null) {
    //     listArr = [];
    // } else {
    //     listArr = JSON.parse(getLocalStorage);
    // }
    // listArr.push(userData);
    // localStorage.setItem("New Todo", JSON.stringify(listArr));

    addTodo();
    updateTask();
    showTasks();

})
clearBtn.addEventListener('click', () => {
    listArr.splice(0, listArr.length);
    updateTask();
    showTasks();
})

function updateTask() {
    amount.innerText = listArr.length;

}

// function to add todo
function showTasks() {
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += ` <li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;

    })
    todoList.innerHTML = newLiTag;
    inputBox.value = "";

}

function addTodo() {
    userData = inputBox.value;
    listArr.push(userData);

}

function deleteTask(index) {
    listArr.splice(index, 1);
    updateTask();
    showTasks();

}

