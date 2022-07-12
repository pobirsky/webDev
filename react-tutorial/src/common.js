class Task {
  constructor(title = '', isCompleted = false) {
    this.title = title,
    this.completed = isCompleted
  }

  completed() {
    this.isCompleted = true;
  }
}

let task = new Task('Learn ES6', false);
let task2 = new Task('Learn ReactJs', true);

console.log(task);
console.log(task2);

