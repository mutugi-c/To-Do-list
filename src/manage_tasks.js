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
  }

  removeTask(index) {
    this.taskArr.splice(index, 1);

    // Update remaining properties' indices
    this.taskArr.forEach((task, i) => {
      task.index = i;
    });
  }

  editTask(index, newDescription) {
    this.taskArr[index].description = newDescription;
  }

  completedTask(index) {
    this.taskArr[index] = true;
  }
}

export default ManageTasks;

