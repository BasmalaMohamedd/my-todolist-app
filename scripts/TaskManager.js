let tasks = [];

export class TaskManager{

    constructor(){}
    addTask(task){        
        tasks.push(task);
    }
    getAllTasks(){
        return tasks;
    }

    deleteTaskById(taskId)
    {
        tasks = tasks.filter((task)=>{            
            return task.getId() != taskId;
        });

    }

}