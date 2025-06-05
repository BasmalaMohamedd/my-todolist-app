import { getTodaysDate } from "./dateContainer.js";
import { TaskManager } from "./TaskManager.js";
import { TasksListDOMManager } from "./TasksListDOMManager.js";
import { loadTasksFromLS } from "./loadTasksFromLS.js";
import { Task } from "./Task.js";
let todaysDate = document.querySelector(".todaysDate");
let listBody = document.querySelector(".listBody");
//displays today's day and date
todaysDate.innerHTML += getTodaysDate();
//update today's day and date every 1 hour 
setInterval(()=>{
    todaysDate.innerHTML = getTodaysDate();
    

}, 216000);


let tasksListDOMManager = new TasksListDOMManager();
let taskManager = new TaskManager();

let tasksInLocalStorage = loadTasksFromLS('tasks');

tasksInLocalStorage.forEach((taskTitle)=>{
    let task = new Task(taskTitle);
    taskManager.addTask(task);
    tasksListDOMManager.addTaskToPage(task, listBody);

})

function deleteTask(taskId){
    taskManager.deleteTaskById(taskId);
    listBody.innerHTML = "";
    taskManager.getAllTasks().forEach((task)=>{
        tasksListDOMManager.addTaskToPage(task, listBody);

    })

}

//global function
window.deleteTask = deleteTask;



