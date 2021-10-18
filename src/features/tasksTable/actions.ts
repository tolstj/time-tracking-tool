import { createAction } from '@reduxjs/toolkit';
import { WeekPeriod } from '../../interfaces/WeekPeriod';

export const loadTasks = createAction('LOAD_TASKS');
export const updateTaskHours = createAction<TaskHoursUpdate>('UPDATE_TASK_HOURS');

export interface TaskHoursUpdate {
  name: string;
  weekPeriod: WeekPeriod;
  weekday: string;
  hours: number;
}
