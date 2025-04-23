let tasks = [];

export class TaskManager{

    constructor(){}
    addTask(task){
        console.log(tasks);
        
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