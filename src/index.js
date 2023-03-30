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
    <span class="task-description" contenteditable="true">${task.description}</span>
    <span class="fas fa-ellipsis-v"></span>
    <span class="fas fa-trash trash-icon hide"></span>
    `;
    toDoList.appendChild(toDoItem);

    // Change list item behaviour on click
    toDoItem.addEventListener('click', () => {
      if (!toDoItem.classList.contains('active')) {
        // Remove the 'active' class from all other items
        document.querySelectorAll('.to-do-item').forEach((item) => {
          item.classList.remove('active');
          item.querySelector('.fa-ellipsis-v').classList.remove('hide');
          item.querySelector('.trash-icon').classList.add('hide');
          item.style.background = '';
        });

        // Add the 'active' class to the latest selected item
        toDoItem.classList.add('active');
        toDoItem.querySelector('.fa-ellipsis-v').classList.add('hide');
        toDoItem.querySelector('.trash-icon').classList.remove('hide');
        toDoItem.style.background = '#fffbc8';
      }
    });

    // Add event listener to trash icon
    toDoItem.querySelector('.trash-icon').addEventListener('click', () => {
      taskManager.removeTask(task.id);
      toDoItem.remove();
    });
  });
}

// Add event listeners
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
