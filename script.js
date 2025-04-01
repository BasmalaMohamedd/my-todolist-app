let addTaskForm = document.querySelector(".container");
let taskDisc = document.querySelector("#taskDescription");
let taskDueDate = document.querySelector("#due");

let addTaskBtn = document.querySelector(".addTaskBtn");

let tasks = [];

function viewTaskForm(){
    addTaskForm.style.display = "contents";

}

addTaskBtn.addEventListener("click", (event)=>{
    //prevent adding tasks if the value is none and tell user to fix his input
    event.preventDefault();
    let taskDiscVal = taskDisc.value;
    let taskDueDateVal = taskDueDate.value;
    tasks.push({taskDiscVal, taskDueDateVal});
    console.log(tasks);
    addTaskForm.style.display = "none";

})
