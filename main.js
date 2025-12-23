import fetchTasks from './api.js';
import {Task} from './taskManager.js';
import TaskManager from './taskManager.js';

const loadTasksButton = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");


const taskManager = new TaskManager();

loadTasksButton.addEventListener('click', async() => {
    statusMessage.textContent = "Loading tasks...";

    try{
        const rawData = await fetchTasks();
        console.log(rawData);
        const string = JSON.stringify(rawData);
        const parsed = JSON.parse(string);
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
    div.innerHTML = "";
    const tasks = taskManager.tasks;
    tasks.forEach(task => {
        const box = document.createElement("div");
        box.className = "task";
        const span = document.createElement("span");
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        span.textContent = task.title;

        if(task.completed){
            span.classList.add("completed");
        }

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
        div.appendChild(box);
    });
}