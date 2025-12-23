import { createElement } from "react";
import fetchTasks from "./api";
import Task from './taskManager';
import TaskManager from './taskManager';
const loadTasksButton = document.getElementById(loadTasksBtn);

taskManager = new TaskManager();

addEventListener('click', async() => {
    console.log("Loading tasks...");

    try{
        const rawData = await fetchTasks();
        console.log(rawData);
        string = JSON.stringify(rawData);
        parsed = JSON.parse(string);
        const taskObjects = parsed.map(item => {
            return new Task(item.id, item.title, item.completed);
        });
        taskManager.setTasks(taskObjects);
        render();
    }catch(error){
        statusMessage.textContent = "Error occured.";
    }
});

function render(){
    const div = document.getElementById("taskList");
    div.innerHTML("");
    const tasks = taskManager.tasks;
    tasks.forEach(element => {
        const box = createElement("div");
        const span = createElement("span");
        const toggleBtn = createElement("button");
        const deleteBtn = createElement("button");
    });
    const button = createElement("button");
}


