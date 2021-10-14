import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put } from 'redux-saga/effects';
import { UPDATE_TASK_HOURS, TaskHoursUpdate } from '../features/tasksTable/actions';
import { updatedTasks } from '../features/tasksTable/tasksTable.slice';
import { LocalStorageAPI } from '../LocalStorageAPI/LocalStorageAPI';
import { Task } from '../interfaces/Task';

export function* watchUpdateTaskHours() {
  yield takeEvery(UPDATE_TASK_HOURS, updateTaskHours);
}

function* updateTaskHours({ payload }: PayloadAction<TaskHoursUpdate>) {
  const tasks: Task[] = yield LocalStorageAPI.updateHours(payload);
  yield put(updatedTasks(tasks));
}
