let taskTitle = document.querySelector(".taskTitle");
let taskDescription = document.querySelector(".taskDescription");
let taskDueDate = document.querySelector(".taskDueDate");
let taskDueTime = document.querySelector(".taskDueTime");
let addTaskBtn = document.querySelector(".addTaskBtn");



addTaskBtn.addEventListener("click", (event)=>{
    //prevent adding tasks if the value is none and tell user to fix his input
    event.preventDefault();
    let newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate.value, taskDueTime.value);
    addTask(newTask);

})
