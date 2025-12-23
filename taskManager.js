export class Task{
    constructor(id, title, completed){
        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            configurable: false
        });
        this.title = title;
        this.completed = completed;
    }

    toggle(){
        if(this.completed){
            newCompleted = false;
        }
        else {
            newCompleted = true;
        }
        newTask = new Task(this.id, this.title, newCompleted);
        return newTask;
    }
}


export default class TaskManager{
    tasks = [];

    setTasks(tasks){
        this.tasks = tasks;
    }

    addTask(task){
        taskList= this.tasks;
        taskList.push(task);
        this.tasks = taskList;
    }

    removeTask(taskId){
        taskList = [];
        for(let t of this.tasks){
            if(t.id != taskId){
                taskList.push(t);
            }
        }
        this.tasks = taskList;
    }

    toggleTask(taskId){
        taskList = [];
        for(let t of this.tasks){
            if(t.id = taskId){
                toggledTask = this.toggleTask(t);
                taskList.push(toggledTask);
            } else {
                taskList.push(t);
            }
        }
        this.tasks = taskList;
    }
}