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
}

export default ManageTasks;
