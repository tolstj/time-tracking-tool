import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  input: '',
  errorMessage: '',
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
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = '';
    },
  },
});

export const { changed, cleared, setErrorMessage, clearErrorMessage } = taskInputSlice.actions;

export const selectTaskInput = (state: RootState) => state.taskInput.input;
export const selectTaskInputError = (state: RootState) => state.taskInput.errorMessage;

export default taskInputSlice.reducer;
