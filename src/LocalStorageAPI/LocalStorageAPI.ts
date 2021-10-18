import { format } from 'date-fns';
import { TaskHoursUpdate } from '../features/tasksTable/actions';
import { Task } from '../interfaces/Task';
import { dateFormat } from '../utils/dateFormat';

const TASKS = 'TASKS';

export class LocalStorageAPI {
  static getTasks(): Task[] {
    const tasks: null | string = localStorage.getItem(TASKS);

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  }

  static saveTask(task: Task): Task[] {
    const tasks = this.getTasks();
    tasks.push(task);

    localStorage.setItem(TASKS, JSON.stringify(tasks));
    return tasks;
  }

  static updateHours(taskHoursUpdate: TaskHoursUpdate): Task[] {
    const tasks = this.getTasks();

    const existingTask = tasks.find(({ name, weekPeriod }) => {
      const formattedTaskStartOfWeek = format(new Date(weekPeriod.startOfWeek), dateFormat);
      const formattedTaskHoursUpdateStartOfWeek = format(new Date(taskHoursUpdate.weekPeriod.startOfWeek), dateFormat);

      return (name === taskHoursUpdate.name) && (formattedTaskStartOfWeek === formattedTaskHoursUpdateStartOfWeek);
    });

    if (existingTask) {
      existingTask.hours[taskHoursUpdate.weekday] = taskHoursUpdate.hours;
    }

    localStorage.setItem(TASKS, JSON.stringify(tasks));
    return tasks;
  }
}
