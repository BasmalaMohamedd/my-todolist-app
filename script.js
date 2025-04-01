let addTaskForm = document.querySelector(".container");
let taskTitle = document.querySelector("#taskTitle");
let taskDueDate = document.querySelector("#due");
let addTaskBtn = document.querySelector(".addTaskBtn");
let todoList = document.querySelector(".todoList");

let tasks = [];




function viewTaskForm(){
    addTaskForm.style.display = "contents";

}

addTaskBtn.addEventListener("click", (event)=>{
    //prevent adding tasks if the value is none and tell user to fix his input
    event.preventDefault();
    let taskTitleVal = taskTitle.value;
    let taskDueDateVal = taskDueDate.value;
    tasks.push({taskTitleVal, taskDueDateVal});
    addTaskToPage(taskDueDateVal, taskTitleVal);
    addTaskForm.style.display = "none";

})


function addTaskToPage(dueDate, taskTitle)
{
    let todoItemTag = `
    <div class="todoItem">
                <div>
                    <button>Done</button>
                </div>
                <div>
                
                    <p class="todoItemDue">${dueDate}</p>
                    <p class="todoItemTitle">${taskTitle}</p>
               
            </div>
                <div>
                    <button>Delete</button>
                </div>
                
            </div>
    `;

    todoList.innerHTML += todoItemTag;
}
