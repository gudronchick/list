import { call, put, select, delay } from "redux-saga/effects";
import { deleteTheTask, doTheTask, sendTask } from "../../api/api";
import { getDateAndTime } from "../../utilits/utilits";
import { ERROR_HANDLER } from "../actions/commonActions";
import {
  ADD_TASK,
  REMOVE_THE_TASK,
  TASK_IS_DONE,
} from "../actions/listActions";

function* catchAnError() {
  yield put({ type: ERROR_HANDLER, isAlertShown: true });
  yield delay(2000);
  yield put({ type: ERROR_HANDLER, isAlertShown: false });
}

export function* addTheTaskWorker(action) {
  try {
    let state = yield select();
    let num = action.num || state.list.pagNum;
    const response = yield call(sendTask, action.task, num);
    response.tasks.map((task) => {
      task.time = getDateAndTime(task.time);
      return task;
    });
    yield put({ type: ADD_TASK, payload: response });
  } catch (e) {
    yield catchAnError();
  }
}

export function* makeTaskDoneWorker(action) {
  try {
    const payload = yield call(doTheTask, action.id);
    payload.task.time = getDateAndTime(payload.task.time);
    yield put({ type: TASK_IS_DONE, payload, idDone: action.id });
  } catch (e) {
    yield catchAnError();
  }
}

export function* deleteTheTaskWorker(action) {
  try {
    const state = yield select();
    const payload = yield call(deleteTheTask, action.id, state.list.pagNum);
    payload.tasks.map((task) => {
      task.time = getDateAndTime(task.time);
      return task;
    });
    yield put({ type: REMOVE_THE_TASK, payload });
  } catch (e) {
    yield catchAnError();
  }
}
