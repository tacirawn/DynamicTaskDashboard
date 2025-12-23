import fetchTasks from "./api";
import Task from './taskManager';
import TaskManager from './taskManager';
const loadTasksButton = document.getElementById(loadTasksBtn);

addEventListener('click', async() => {
    console.log("Loading tasks...");

    try{
        const rawData = await fetchTasks();
        console.log(rawData);
        string = JSON.stringify(rawData);
        parsed = JSON.parse(string);
    }catch(error){
        statusMessage.textContent = "Error occured.";
    }
});