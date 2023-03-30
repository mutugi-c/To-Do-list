const taskArr = [];

class ManageTasks {
  constructor(taskArr) {
    this.taskArr = taskArr;
  }

  addTask(taskDescrption) {
    const newTask = {
      description: taskDescrption,
      completed: false,
      index: taskArr.length,
    }
    taskArr.push(newTask);
  }

  removeTask(index) {
    this.taskArr.splice(index, 1);

    // Update remaining properties' indices
    this.taskArr.forEach(task => {
      task.index = i;
    });
  }
}

export default ManageTasks;
