class ManageTasks {
  constructor() {
    this.taskArr = this.loadTasksFromLocalStorage();
  }

  addTask(taskDescrption) {
    const newTask = {
      description: taskDescrption,
      completed: false,
      index: this.taskArr.length,
    };

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
    this.taskArr[index].completed = true;
    this.storeTasksInLocalStorage();
  }

  storeTasksInLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskArr));
  }

  loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(this.localStorage.getItem('tasks'));
    if (storedTasks) {
      return storedTasks;
    }
    return [];
  }
}

export default ManageTasks;
