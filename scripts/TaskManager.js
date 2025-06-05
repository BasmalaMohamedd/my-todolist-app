let tasks = [];

export class TaskManager{

    
    getAllTasks(){
        return tasks;
    }

    getAllTasksTitle()
    {
        return tasks.map((task)=>{
            return task.getTitle();
        })
    }

    addTask(task){        
        tasks.push(task);
        localStorage.setItem('tasks', this.getAllTasksTitle());
    }

    deleteTaskById(taskId)
    {
        tasks = tasks.filter((task)=>{            
            return task.getId() != taskId;
        });

        localStorage.setItem('tasks', this.getAllTasksTitle());

    }

}