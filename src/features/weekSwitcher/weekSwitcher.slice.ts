import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getCurrentWeekPeriod, getViewOfWeekPeriod, nextWeekPeriod, prevWeekPeriod, WeekPeriod } from './utils/week';

const initialState: WeekPeriod = getCurrentWeekPeriod();

export const weekSwitcherSlice = createSlice({
  name: 'weekSwitcher',
  initialState,
  reducers: {
    setCurrent: (state) => {
      return getCurrentWeekPeriod();
    },
    setNext: (state) => {
      return nextWeekPeriod(state);
    },
    setPrev: (state) => {
      return prevWeekPeriod(state);
    },
  },
});

export const { setCurrent, setNext, setPrev } = weekSwitcherSlice.actions;

export const selectSelectedWeekPeriod = (state: RootState) => state.weekSwitcher;
export const selectIsSelectedWeekPeriodCurrent = (state: RootState) => {
  const selectedWeekPeriod = state.weekSwitcher;
  const currentWeekPeriod = getCurrentWeekPeriod();

  return getViewOfWeekPeriod(selectedWeekPeriod) === getViewOfWeekPeriod(currentWeekPeriod);
};

export default weekSwitcherSlice.reducer;
