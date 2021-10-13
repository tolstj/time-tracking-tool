import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import taskInputReducer from '../features/taskInput/taskInput.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    taskInput: taskInputReducer,
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
