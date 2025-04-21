function addTaskTag({id, title, dueDate, dueTime}, htmlDOM)
{
    let taskTag = `<div class="todoItem" id="todoItem${id}">
    <div class="taskDet">
    
        <p class="taskItemDueDate">${dueDate}</p>
        <p class="taskItemDueTime">${dueTime}</p>
        <p class="taskItemTitle">${title}</p>
    
    </div>
    <div class="taskManBtns">
        
        <div>
            <button class="doneBtn" onclick="doneTask(${id})">Done</button>
        </div>
        <div>
            <button class="editBtn" onclick="editTask(${id})">edit</button>
        </div>
        <div>
            <button class="viewBtn" onclick="viewTask(${id})">view</button>
        </div>
        <div>
            <button class="deleteBtn" onclick="deleteTask(${id})">Delete</button>
        </div>
        
    </div>
    
    </div>
`;
    htmlDOM.innerHTML += taskTag;
}


function doneCompleted(taskId){
    console.log("mark task : " + taskId + "as completed");
    
}

function editTask(taskId){
    console.log("edit task : " + taskId);
}

function deleteTask(taskId){

    console.log("delete task : " + taskId);
    tasks = tasks.filter((task)=>{
        console.log(tasks);
        
        return task.id != taskId;
    });
    console.log(tasks);

    todoList.innerHTML = '';
    displayTasksList(tasks);
    
}

function viewTask(taskId){
    console.log("view task: " + taskId);
}