let addTaskForm = document.querySelector(".container");
let taskTitle = document.querySelector("#taskTitle");
let taskDueDate = document.querySelector("#due");
let addTaskBtn = document.querySelector(".addTaskBtn");
let todoList = document.querySelector(".todoList");

let tasks = [];

let numOfTasks = tasks.length; //using the array length for future changes

if(numOfTasks == 0)
{
    viewTaskForm();
}
else
{
    for(let i = 0; i < numOfTasks; i++)
    {
        addTaskToPage( tasks[i].taskDueDate, tasks[i].taskTitle, i);
    }
}



function viewTaskForm(){
    addTaskForm.style.display = "contents";

}

addTaskBtn.addEventListener("click", (event)=>{
    //prevent adding tasks if the value is none and tell user to fix his input
    event.preventDefault();
    let taskTitleVal = taskTitle.value;
    let taskDueDateVal = taskDueDate.value;
    tasks.push({taskTitle:taskTitleVal, taskDueDate:taskDueDateVal});
    addTaskToPage(taskDueDateVal, taskTitleVal, numOfTasks);
    numOfTasks++;
    addTaskForm.style.display = "none";

})


function addTaskToPage(dueDate, taskTitle, taskId)
{
    let todoItemTag = `
    <div class="todoItem" id="todoItem${taskId}">
                <div>
                    <input type="checkbox"/>
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
