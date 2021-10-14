import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Task } from '../../interfaces/Task';
import { format } from 'date-fns';
import { TaskHoursUpdate } from './actions';
import { dateFormat } from '../../utils/dateFormat';

const initialState: Task[] = [];

export const tasksTableSlice = createSlice({
  name: 'tasksTable',
  initialState,
  reducers: {
    loadedTasks: (state, { payload }: PayloadAction<Task[]>) => {
      return payload;
    },
    addedTask: (state, { payload }: PayloadAction<Task>) => {
      state.push(payload)
    },
    updatedTaskHours: (state, { payload }: PayloadAction<TaskHoursUpdate>) => {
      const existingTask = state.find(({ name, weekPeriod }) => {
        const formattedTaskStartOfWeek = format(new Date(weekPeriod.startOfWeek), dateFormat);
        const formattedPayloadStartOfWeek = format(new Date(payload.weekPeriod.startOfWeek), dateFormat);

        return (name === payload.name) && (formattedTaskStartOfWeek === formattedPayloadStartOfWeek);
      });

      if (existingTask) {
        // @ts-ignore
        existingTask.hours[payload.weekday] = payload.hours;
      }
    },
  },
});

export const { loadedTasks, addedTask, updatedTaskHours } = tasksTableSlice.actions;

export const selectSelectedWeekPeriodTasks = (state: RootState) => {
  const selectedWeekStartOfWeek = state.weekSwitcher.startOfWeek;

  return state.tasksTable.filter(
    (task) => {
      const formattedSelectedWeekStartOfWeek = format(new Date(selectedWeekStartOfWeek), dateFormat);
      const formattedTaskStartOfWeek = format(new Date(task.weekPeriod.startOfWeek), dateFormat);

      return formattedSelectedWeekStartOfWeek === formattedTaskStartOfWeek;
    }
  );
};

export default tasksTableSlice.reducer;
