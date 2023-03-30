const taskArr = [];

class ManageTasks {
  constructor(taskArr) {
    this.taskArr = taskArr;
  }

  addTask(taskDescrption) {
    const newTask = {
      description: taskDescrption,
      completed: false,
      index: this.taskArr.length,
    }
    this.taskArr.push(newTask);
    this.storeTasksInLocalStorage();
  }

  removeTask(index) {
    this.taskArr.splice(index, 1);

    // Update remaining properties' indices
    this.taskArr.forEach((task, i) => {
      task.index = i;
    });
    this.storeTasksInLocalStorage();
  }

  editTask(index, newDescription) {
    this.taskArr[index].description = newDescription;
    this.storeTasksInLocalStorage();
  }

  completedTask(index) {
    this.taskArr[index] = true;
  }

  storeTasksInLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskArr));
  }

  loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      this.taskArr = storedTasks;
    }
  }
}

export default ManageTasks;

