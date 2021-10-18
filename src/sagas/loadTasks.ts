import { takeEvery, call, put } from 'redux-saga/effects';
import { LocalStorageAPI } from '../LocalStorageAPI/LocalStorageAPI';
import { loadTasks } from '../features/tasksTable/actions';
import { Task } from '../interfaces/Task';
import { loadedTasks } from '../features/tasksTable/tasksTable.slice';

export function* watchLoadTasks() {
  yield takeEvery(loadTasks, loadTasksToStoreFromLocalStorage);
}

function* loadTasksToStoreFromLocalStorage() {
  const tasks: Task[] = yield call(LocalStorageAPI.getTasks);
  yield put(loadedTasks(tasks));
}
