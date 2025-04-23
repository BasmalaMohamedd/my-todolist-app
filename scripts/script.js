import { getTodaysDate } from "./dateContainer.js";
import { TaskManager } from "./TaskManager.js";
import { TasksListDOMManager } from "./TasksListDOMManager.js";

let todoList = document.querySelector(".todoList");
let todaysDate = document.querySelector(".todaysDate");
let listBody = document.querySelector(".listBody");
let deleteBtn = document.querySelector(".deleteBtn");
//displays today's day and date
todaysDate.innerHTML += getTodaysDate();
//update today's day and date every 1 hour 
setInterval(()=>{
    todaysDate.innerHTML = getTodaysDate();
    console.log("10 Seconds PASSED");
    

}, 216000);



// function deleteTask(taskId){
//     //not working
//     TaskManager.deleteTaskById(taskId);
//     listBody.innerHTML = "";
//     TaskManager.getAllTasks.forEach((task)=>{
//         TasksListDOMManager.addTaskToPage(task, listBody);

//     })

// }




// window.deleteTask = deleteTask;
