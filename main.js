import fetchTasks from "./api";

const loadTasksButton = document.getElementById(loadTasksBtn);

addEventListener('click', function(){
    console.log("Loading tasks...");

    try{
        await.fetchTasks();
    }catch{

    }
});