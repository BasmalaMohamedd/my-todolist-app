let addTaskForm = document.querySelector(".container");
let taskTitle = document.querySelector("#taskTitle");
let taskDueDate = document.querySelector("#due");
let addTaskBtn = document.querySelector(".addTaskBtn");
let todoList = document.querySelector(".todoList");

let tasks = [];

let numOfTasks = tasks.length; //using the array length for future changes

if(tasks.length == 0)
{
    viewTaskForm();
}
else
{

    //code refactoring
    tasks.forEach(task => {
        addTaskToPage(task.dueDate, task.title, task.id);
        
    });
}



function viewTaskForm(){
    addTaskForm.style.display = "contents";

}

addTaskBtn.addEventListener("click", (event)=>{
    //prevent adding tasks if the value is none and tell user to fix his input
    event.preventDefault();
    let taskTitleVal = taskTitle.value;
    let taskDueDateVal = taskDueDate.value;
    let taskId = numOfTasks;
    tasks.push({id: taskId, title:taskTitleVal, dueDate:taskDueDateVal});
    addTaskToPage(taskDueDateVal, taskTitleVal, taskId);
    numOfTasks++;
    addTaskForm.style.display = "none";

})


function addTaskToPage(dueDate, taskTitle, taskId)
{
    //on delete task move task left and give the user the option to confirm delete or cancel before deleting
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
                    <button class="deleteBtn" onclick="deleteTask(${taskId})">Delete</button>
                </div>
                
            </div>
    `;

    todoList.innerHTML += todoItemTag;
}


function deleteTask(taskId){
    tasks = tasks.filter((task)=>{
        return task.id != taskId;
    });
    todoList.innerHTML = '';
    
    if(tasks.length == 0)
        {
            viewTaskForm();
        }
        else
        {
        
            //code refactoring
            tasks.forEach(task => {
                addTaskToPage(task.dueDate, task.title, task.id);
                
            });
        }
}


