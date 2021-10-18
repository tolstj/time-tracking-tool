import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put } from 'redux-saga/effects';
import { updateTaskHours, TaskHoursUpdate } from '../features/tasksTable/actions';
import { updatedTasks } from '../features/tasksTable/tasksTable.slice';
import { LocalStorageAPI } from '../LocalStorageAPI/LocalStorageAPI';
import { Task } from '../interfaces/Task';

export function* watchUpdateTaskHours() {
  yield takeEvery(updateTaskHours, updateTaskHoursInLocalStorageAndUpdateStore);
}

function* updateTaskHoursInLocalStorageAndUpdateStore({ payload }: PayloadAction<TaskHoursUpdate>) {
  const tasks: Task[] = yield LocalStorageAPI.updateHours(payload);
  yield put(updatedTasks(tasks));
}
