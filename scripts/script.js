import { getTodaysDate } from "./dateContainer.js";
import { TaskManager } from "./TaskManager.js";
import { TasksListDOMManager } from "./TasksListDOMManager.js";

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

function deleteTask(taskId){
    taskManager.deleteTaskById(taskId);
    listBody.innerHTML = "";
    taskManager.getAllTasks().forEach((task)=>{
        tasksListDOMManager.addTaskToPage(task, listBody);

    })

}

//global function
window.deleteTask = deleteTask;



