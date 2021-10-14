import { WeekPeriod } from '../../interfaces/WeekPeriod';

export const LOAD_TASKS = 'LOAD_TASKS';
export const UPDATE_TASK_HOURS = 'UPDATE_TASK_HOURS';

export const loadTasks = () => ({ type: LOAD_TASKS });
export const updateTaskHours = (taskHoursUpdate: TaskHoursUpdate) => ({
  type: UPDATE_TASK_HOURS,
  payload: taskHoursUpdate,
});

export interface TaskHoursUpdate {
  name: string;
  weekPeriod: WeekPeriod;
  weekday: string;
  hours: number;
}
