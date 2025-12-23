import { createElement } from "react";
import fetchTasks from "./api";
import Task from './taskManager';
import TaskManager from './taskManager';

const loadTasksButton = document.getElementById(loadTasksBtn);

taskManager = new TaskManager();

loadTasksButton.addEventListener('click', async() => {
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
    tasks.forEach(task => {
        const box = createElement("div");
        const span = createElement("span");
        const toggleBtn = createElement("button");
        const deleteBtn = createElement("button");

        span.textContent = element.title;

        toggleBtn.addEventListener('click', () => {
            taskManager.toggleTask(task.id);
            render();
        });

        deleteBtn.addEventListener('click', () => {
            taskManager.removeTask(task.id);
            render();
        });

        box.appendChild(span);
        box.appendChild(toggleBtn);
        box.appendChild(deleteBtn);
        loadTasksButton.appendChild(box);
    });
    const button = createElement("button");
}


