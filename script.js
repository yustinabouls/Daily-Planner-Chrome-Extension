const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")


function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

let taskArray = getTasksFromLocalStorage()

function updateTasksInLocalStorage(){
localStorage.setItem(tasks, JSON.stringify())
}