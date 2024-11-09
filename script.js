// document.addEventListener("DOMContentLoaded", function () {
//     const taskInput = document.getElementById("task")

//     const addTaskButton = document.getElementById("addTask")

//     const taskList = document.getElementById("taskList");

//     addTaskButton.addEventListener("click", function () {
//         const taskText = taskInput.value;

//         const taskItem = document.createElement("li")

//         //giving the inner html value inside the li
//         taskItem.innerHTML = `${taskText} <button id="delete-btn">Delete</button>`

//         //appending or adding child inside the ul or parent
//         taskList.appendChild(taskItem)
//         taskInput.value = "";

//         //delete functionality
//         const deleteButton = taskItem.querySelector("#delete-btn")
//         deleteButton.addEventListener("click", function () {
//             taskList.removeChild(taskItem)
//         })
//     })

// })

//hints
// use if else condition
// alert()


// Solution:


// Get references to the input, button, and task list
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add event listener to the "Add" button
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim(); // Trim any extra spaces

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Stop execution if input is empty
    }

    const taskItem = document.createElement("li");

    // Giving the inner HTML value inside the <li>
    taskItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

    // Appending the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskInput.value = "";

    // Delete functionality
    const deleteButton = taskItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
});
