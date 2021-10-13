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
  },
});

export const { addedTask } = tasksTableSlice.actions;

export default tasksTableSlice.reducer;
