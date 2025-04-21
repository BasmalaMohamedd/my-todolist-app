let addTaskForm = document.querySelector(".container");
let todoList = document.querySelector(".todoList");

let tasks = [];

displayTasksList(tasks);


function displayTasksList(tasksList){
    if(tasksList.length == 0)
        {
            viewTaskForm();
        }
        else
        {
        
            tasksList.forEach(task => {
                addTaskToPage(task);
                
            });
        }
}

function viewTaskForm(){
    addTaskForm.style.display = "contents";

}

function addTask(task){
    tasks.push(task);
    addTaskToPage(task);
    addTaskToLocalStorage(task);
}

function addTaskToPage(task){
    console.log(task);
    addTaskTag(task, todoList);
}

function addTaskToLocalStorage(task){
    console.log("add task to local storage");
}

