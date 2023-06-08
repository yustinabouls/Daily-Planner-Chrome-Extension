// Step 1: Define Essential HTML Elements in JavaScript
const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")



// 3.1 Implement the getTasksFromLocalStorage() Function
function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Step 2: Load Tasks from Local Storage
let taskArray = getTasksFromLocalStorage()


// 3.2 Implement the updateTasksInLocalStorage() Function
function updateTasksInLocalStorage(){
localStorage.setItem(tasks, JSON.stringify())
}

// 3.3 Implement the createTask(taskText) Function
function createTask(taskText) {
    let task = {
        text: taskText,
        completed: false
    }
}

// 3.4 Implement the deleteTask(index) Function
function deleteTask(index) {
    deleteTask.splice(index, 1)
    
    updateTasksInLocalStorage()
    }
