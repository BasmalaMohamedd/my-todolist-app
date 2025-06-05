let tasksIdIncremental = 0; //Task static variable

export class Task{
    #id;
    #title;
    #completed;

    constructor(title){
        this.#title = title;
        this.#completed = false;
        this.#id = tasksIdIncremental;
        tasksIdIncremental++;
    }

    getTitle(){
        return this.#title;
    }

    markAsCompleted(){
        this.#completed = true;
    }

    getId(){
        return this.#id;
    }
    
    
    
}