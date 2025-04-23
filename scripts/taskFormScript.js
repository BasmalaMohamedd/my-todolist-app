import { TaskManager } from "./TaskManager.js";
import { TasksListDOMManager } from "./TasksListDOMManager.js";
import { Task } from "./Task.js";
let taskTitle = document.querySelector(".taskTitle");
let addTaskBtn = document.querySelector(".addTaskBtn");
let listBody = document.querySelector(".listBody");

let taskManager = new TaskManager();
let tasksListDOMManager = new TasksListDOMManager();

addTaskBtn.addEventListener("click", (event)=>{
    //prevent adding tasks if the value is none and tell user to fix his input
    event.preventDefault();
    let newTask = new Task(taskTitle.value);
    taskManager.addTask(newTask);
    tasksListDOMManager.addTaskToPage(newTask, listBody);

})
