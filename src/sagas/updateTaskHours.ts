import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put } from 'redux-saga/effects';
import { UPDATE_TASK_HOURS, TaskHoursUpdate } from '../features/tasksTable/actions';
import { updatedTaskHours } from '../features/tasksTable/tasksTable.slice';

export function* watchUpdateTaskHours() {
  yield takeEvery(UPDATE_TASK_HOURS, updateTaskHours);
}

function* updateTaskHours({ payload }: PayloadAction<TaskHoursUpdate>) {
  yield put(updatedTaskHours(payload));
}
