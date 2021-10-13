import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState: string = '';

export const taskInputSlice = createSlice({
  name: 'taskInput',
  initialState,
  reducers: {
    changed: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { changed } = taskInputSlice.actions;

export const selectTaskInput = (state: RootState) => state.taskInput;

export default taskInputSlice.reducer;
