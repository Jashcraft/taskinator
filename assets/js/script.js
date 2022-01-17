var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);
}

var createTaskEl = function (taskDataObj) {
    var listItemEl = document.createElement("li");  // create list item 
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div"); // create div tp hold task info and add to list item 
    taskInfoEl.className = "task-info"; //give it a class name 

    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"; //add html content to div
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl); // add entire list item to list
}

formEl.addEventListener("submit", taskFormHandler);

