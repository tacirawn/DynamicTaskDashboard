import fetchTasks from "./api";

const loadTasksButton = document.getElementById(loadTasksBtn);

addEventListener('click', async() => {
    console.log("Loading tasks...");

    try{
        const rawData = await fetchTasks();
        console.log(rawData);
        
    }catch(error){
        statusMessage.textContent = "Error occured.";
    }
});