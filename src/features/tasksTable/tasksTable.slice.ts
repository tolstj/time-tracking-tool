import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {};

export const tasksTableSlice = createSlice({
  name: 'tasksTable',
  initialState,
  reducers: {

  },
});

export default tasksTableSlice.reducer;
