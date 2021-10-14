import { takeEvery } from 'redux-saga/effects';
import { UPDATE_TASK_HOURS } from '../features/tasksTable/actions';

export function* watchUpdateTaskHours() {
  yield takeEvery(UPDATE_TASK_HOURS, updateTaskHours);
}

function* updateTaskHours() {

}
