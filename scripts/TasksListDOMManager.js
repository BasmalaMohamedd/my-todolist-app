import { Task } from "./Task.js";
export class TasksListDOMManager{

    #notCheckedIconSrc = "interface.png";
    #checkIconSrc = "done.png";

    createTaskTag(task){
        let taskTag = `<div class="taskItem" id="task-${task.getId()}">
                            <div class="icon check-icon"><img src="interface.png" alt=""></div>
                            <div class="taskTitle">${task.getTitle()}</div>
                            <div class="icon del-icon"><img src="delIcon.png" alt=""></div>
    
                        </div>
`;

        return taskTag;

    }

    

    

    addTaskToPage(task, container){
        container.innerHTML += this.createTaskTag(task);
    }

    
}