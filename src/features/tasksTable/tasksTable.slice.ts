import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Task } from '../../interfaces/Task';
import { format } from 'date-fns';

const initialState: Task[] = [];

export const tasksTableSlice = createSlice({
  name: 'tasksTable',
  initialState,
  reducers: {
    addedTask: (state, { payload }: PayloadAction<Task>) => {
      state.push(payload)
    },
    loadedTasks: (state, { payload }: PayloadAction<Task[]>) => {
      return payload;
    },
  },
});

export const { addedTask, loadedTasks } = tasksTableSlice.actions;

export const selectSelectedWeekPeriodTasks = (state: RootState) => {
  const selectedWeekStartOfWeek = state.weekSwitcher.startOfWeek;

  return state.tasksTable.filter(
    (task) => {
      const formattedSelectedWeekStartOfWeek = format(new Date(selectedWeekStartOfWeek), 'dd.MM.yyyy');
      const formattedTaskStartOfWeek = format(new Date(task.weekPeriod.startOfWeek), 'dd.MM.yyyy');

      return formattedSelectedWeekStartOfWeek === formattedTaskStartOfWeek;
    }
  );
};

export default tasksTableSlice.reducer;
