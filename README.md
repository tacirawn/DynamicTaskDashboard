File Organization
index.html: Contains the main structure of the dashboard and loads the script as a module.
styles.css: Handles the visual layout using Flexbox, specifically focusing on a clean, table-like appearance for the task list.
main.js: The entry point of the application. It handles DOM manipulation, event listeners (Load, Toggle, Delete), and rendering logic.
taskManager.js: A class-based module responsible for managing the state of tasks (data logic).
api.js: Simulates an asynchronous data fetch operation to retrieve initial tasks.


Challenges
A logic error in the toggleTask function caused an infinite loop (recursion error) by calling itself repeatedly.Refactored the method to find the specific task by ID and update its property directly, removing the
recursive call.

Encountered "variable is not defined" errors because ES modules automatically run in Strict Mode. Ensured all variables were explicitly declared using const or let.
