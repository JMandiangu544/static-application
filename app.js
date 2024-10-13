// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task function
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  
  // Create new list item (li) element
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // Add delete button to each task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };
  
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  
  // Clear input after adding
  taskInput.value = "";
}

// Add event listener for the button
addTaskBtn.addEventListener('click', addTask);

// Optional: Add task when pressing 'Enter' key
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
