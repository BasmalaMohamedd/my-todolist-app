export function loadTasksFromLS(key)
{
    if(localStorage.getItem(key))
    {
        let tasksInLocalStorage = localStorage.getItem(key);
        console.log(tasksInLocalStorage);

        //manipulate the string to generate an array of task titles
        //split the string where the "," exists to an array
        tasksInLocalStorage = tasksInLocalStorage.split(",");
        console.log(tasksInLocalStorage);
        return tasksInLocalStorage;
    }

    return [];
    
}