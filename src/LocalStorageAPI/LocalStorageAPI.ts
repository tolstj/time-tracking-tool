import { Task } from '../interfaces/Task';

const TASKS = 'TASKS';

export class LocalStorageAPI {
  static getTasks(): Task[] {
    const tasks: null | string = localStorage.getItem(TASKS);

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  }

  static saveTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);

    localStorage.setItem(TASKS, JSON.stringify(tasks));
  }
}
