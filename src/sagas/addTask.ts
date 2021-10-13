import { takeEvery, select, put, call } from 'redux-saga/effects';
import { cleared, selectTaskInput } from '../features/taskInput/taskInput.slice';
import { addedTask } from '../features/tasksTable/tasksTable.slice';
import { ADD_TASK } from '../features/taskInput/actions';
import { Task } from '../interfaces/Task';
import { WeekPeriod } from '../interfaces/WeekPeriod';
import { selectSelectedWeekPeriod } from '../features/weekSwitcher/weekSwitcher.slice';
import { LocalStorageAPI } from '../LocalStorageAPI/LocalStorageAPI';

export function* watchAddTask() {
  yield takeEvery(ADD_TASK, addTask);
}

function* addTask() {
  const taskInput: string = yield select(selectTaskInput);
  const selectedWeekPeriod: WeekPeriod = yield select(selectSelectedWeekPeriod);

  const task: Task = {
    name: taskInput,
    weekPeriod: selectedWeekPeriod,
    hours: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
      Sunday: 0,
    },
  };

  yield LocalStorageAPI.saveTask(task);
  yield put(addedTask(task));
  yield put(cleared());
}
