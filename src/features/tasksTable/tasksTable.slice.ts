import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Task } from '../../interfaces/Task';

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

export default tasksTableSlice.reducer;
