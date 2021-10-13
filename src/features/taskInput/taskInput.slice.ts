import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TaskInputState {
  input: string;
  error?: Error;
}

const initialState: TaskInputState = {
  input: '',
};

export const taskInputSlice = createSlice({
  name: 'taskInput',
  initialState,
  reducers: {
    changed: (state, { payload }: PayloadAction<string>) => {
      state.input = payload;
    },
    cleared: (state) => {
      state.input = '';
    },
  },
});

export const { changed, cleared } = taskInputSlice.actions;

export const selectTaskInput = (state: RootState) => state.taskInput.input;

export default taskInputSlice.reducer;
