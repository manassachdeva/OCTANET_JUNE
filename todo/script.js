// Get the input field and the task list
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  var task = taskInput.value;

  if (task.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  var listItem = document.createElement("li");
  listItem.innerHTML = task;
  
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.onclick = function() {
    listItem.remove();
  };

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
}
