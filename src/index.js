import './styles.css';
import ManageTasks from './manage_tasks.js';

const toDoList = document.getElementById('to-do-list');
const toDoForm = document.getElementById('to-do-form');
const toDoInput = document.getElementById('to-do-input');

function populateTaskList(arr) {
  arr.forEach((task) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('to-do-item');
    toDoItem.innerHTML = `
    <button class="check-button">
      <span class="fas fa-check"></span>
    </button>
    <span class="task-description">${task.description}</span>
    <span class="fas fa-ellipsis-v"></span>
    `;
    toDoList.appendChild(toDoItem);
  });
}

const taskManager = new ManageTasks([]);

toDoForm.addEventListener('submit', event => {
  event.preventDefault();

  const taskDescription = toDoInput.value.trim();
  if (taskDescription !== '') {
    taskManager.addTask(taskDescription);

    toDoInput.value = '';
    const newTask = [taskManager.taskArr[taskManager.taskArr.length - 1]];
    populateTaskList(newTask);
  }
})

populateTaskList(taskManager.taskArr);
