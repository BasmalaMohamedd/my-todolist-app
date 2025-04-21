var tasksIdIncremental = 0;

class Task{
    id;
    title;
    description;
    dueDate;
    dueTime;
    completed;

    constructor(title, description, dueDate, dueTime){
        this.title = title;
        this.description = description;
        //change type to date instead of string
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.id = tasksIdIncremental;
        tasksIdIncremental++;
        this.completed = false;
    }

    
    
    
}