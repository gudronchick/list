import { all, takeEvery } from "redux-saga/effects";
import {
  ADD_THE_TASK,
  DELETE_THE_TASK,
  MAKE_TASK_IS_DONE,
} from "../actions/listActions";
import {
  addTheTaskWorker,
  deleteTheTaskWorker,
  makeTaskDoneWorker,
} from "./sagas";

function* rootSaga() {
  yield all([
    takeEvery(MAKE_TASK_IS_DONE, makeTaskDoneWorker),
    takeEvery(ADD_THE_TASK, addTheTaskWorker),
    takeEvery(DELETE_THE_TASK, deleteTheTaskWorker),
  ]);
}

export default rootSaga;
