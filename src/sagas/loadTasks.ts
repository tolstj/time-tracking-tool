import { takeEvery, call, put } from 'redux-saga/effects';
import { LocalStorageAPI } from '../LocalStorageAPI/LocalStorageAPI';
import { LOAD_TASKS } from '../features/tasksTable/actions';
import { Task } from '../interfaces/Task';
import { loadedTasks } from '../features/tasksTable/tasksTable.slice';

export function* watchLoadTasks() {
  yield takeEvery(LOAD_TASKS, loadTasks);
}

function* loadTasks() {
  const tasks: Task[] = yield call(LocalStorageAPI.getTasks);
  yield put(loadedTasks(tasks));
}
