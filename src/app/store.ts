import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import taskInputReducer from '../features/taskInput/taskInput.slice';
import weekSwitcherReducer from '../features/weekSwitcher/weekSwitcher.slice';
import tasksTableReducer from '../features/tasksTable/tasksTable.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    taskInput: taskInputReducer,
    weekSwitcher: weekSwitcherReducer,
    tasksTable: tasksTableReducer,
  },
  middleware: [sagaMiddleware] as const,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
