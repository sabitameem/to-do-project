document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task")

    const addTaskButton = document.getElementById("addTask")

    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;

        const taskItem = document.createElement("li")

        //giving the inner html value inside the li
        taskItem.innerHTML = `${taskText} <button id="delete-btn">Delete</button>`

        //appending or adding child inside the ul or parent
        taskList.appendChild(taskItem)
        taskInput.value = "";

        //delete functionality
        const deleteButton = taskItem.querySelector("#delete-btn")
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem)
        })
    })

})

//hints
// use if else condition
// alert()