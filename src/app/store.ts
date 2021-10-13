import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import taskInputReducer from '../features/taskInput/taskInput.slice';
import weekSwitcherReducer from '../features/weekSwitcher/weekSwitcher.slice';
import tasksTableReducer from '../features/tasksTable/tasksTable.slice';
import { watchAddTask } from '../sagas/addTask';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    watchAddTask(),
  ]);
}

export const store = configureStore({
  reducer: {
    taskInput: taskInputReducer,
    weekSwitcher: weekSwitcherReducer,
    tasksTable: tasksTableReducer,
  },
  middleware: [sagaMiddleware] as const,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
