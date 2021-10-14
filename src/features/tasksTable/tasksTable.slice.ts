import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Task } from '../../interfaces/Task';
import { format } from 'date-fns';
import { TaskHoursUpdate } from './actions';
import { dateFormat } from '../../utils/dateFormat';
import { WritableDraft } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

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
      const existingTask: {[key: string]: any} & WritableDraft<Task> | undefined = state.find(({ name, weekPeriod }) => {
        const formattedTaskStartOfWeek = format(new Date(weekPeriod.startOfWeek), dateFormat);
        const formattedPayloadStartOfWeek = format(new Date(payload.weekPeriod.startOfWeek), dateFormat);

        return (name === payload.name) && (formattedTaskStartOfWeek === formattedPayloadStartOfWeek);
      });

      if (existingTask) {
        existingTask[payload.weekday] = payload.hours;
      }
    },
  },
});

export const { addedTask, loadedTasks } = tasksTableSlice.actions;

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
