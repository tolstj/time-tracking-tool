import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Task } from '../../interfaces/Task';
import { format } from 'date-fns';
import { dateFormat } from '../../utils/dateFormat';

const initialState: Task[] = [];

export const tasksTableSlice = createSlice({
  name: 'tasksTable',
  initialState,
  reducers: {
    loadedTasks: (state, { payload }: PayloadAction<Task[]>) => {
      return payload;
    },
    updatedTasks: (state, { payload }: PayloadAction<Task[]>) => {
      return payload;
    },
  },
});

export const { loadedTasks, updatedTasks } = tasksTableSlice.actions;

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
