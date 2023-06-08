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
localStorage.setItem("tasks", JSON.stringify(taskArray))
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



// 3.5 Implement the createTaskElement(taskObj) Function
 function createTaskElement(taskObj) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("taskItem");
      
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.checked = taskObj.completed;
        checkbox.addEventListener("change", function () {
          taskObj.completed = checkbox.checked;
          taskTextElement.classList.toggle("completed", taskObj.completed);
          updateTasksInLocalStorage();
        });
      
        const taskTextElement = document.createElement("span");
        taskTextElement.classList.add("taskText");
        taskTextElement.textContent = taskObj.text;
        taskTextElement.classList.toggle("completed", taskObj.completed);
      
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "X";
        removeButton.addEventListener("click", function () {
          deleteTask(taskObj);
          renderTasks();
        });
      
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(removeButton);
      
        return taskItem;
    
    }

    // 4: Step 6: Implement the Render Tasks Function
    function renderTasks() {
        taskList.innerHTML = ""

        for(let i = 0; i < taskArray.length; i++){
            // create a const variable "taskElement" assign the function createTaskElement[taskArray[i]]
            const taskElement = createTaskElement[taskArray[i]]

            taskList.appendChild(taskElement);
        }
        
    }


// 5: Attach an Event Listener to Add Task Button

addTaskButton.addEventListener("click",function(){
    const taskText = taskInput.value.trim()

    if(taskText !== "") {
        return;
    }

    const newTask = createTask(taskText)

    taskArray.push(newTask)

    updateTasksInLocalStorage()

    taskInput.value = ""

    renderTasks()
})


