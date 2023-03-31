// Update completed status
const toggleCompleted = () => {
  const toDoItems = toDoList.querySelectorAll('.to-do-item');
  toDoItems.forEach((toDoItem) => {
    const checkButton = toDoItem.querySelector('.check-button');
    if (checkButton.checked) {
      toDoItem.classList.add('completed');
    } else {
      toDoItem.classList.remove('completed');
    }
  });
};

// Remove tasks identified as completed
const clearCompleted = () => {
  const toDoItems = toDoList.querySelectorAll('.to-do-item');
  toDoItems.forEach((toDoItem) => {
    const checkButton = toDoItem.querySelector('.check-button');
    if (checkButton.checked) {
      const index = toDoItem.dataset.index - 1;
      manageTasks.removeTask(index);
      toDoItem.remove();
    }
  });
};

export { toggleCompleted, clearCompleted };
