import {
  ADD_TASK,
  ADD_THE_TASK,
  MAKE_TASK_IS_DONE,
  REMOVE_THE_TASK,
  SEND_PUG_NUM,
  TASK_IS_DONE,
  DELETE_THE_TASK,
} from "../actions/listActions";

export const createTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const makeTask = (payload, idDone) => ({
  type: TASK_IS_DONE,
  payload,
  idDone,
});

export const makeTaskIsDone = (id) => {
  return {
    type: MAKE_TASK_IS_DONE,
    id,
  };
};

export const addTask = (task = undefined, num) => {
  return {
    type: ADD_THE_TASK,
    task,
    num,
  };
};

export const removeTheTask = (payload) => {
  return { type: REMOVE_THE_TASK, payload };
};

export const sendPagNum = (num) => {
  return {
    type: SEND_PUG_NUM,
    num,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_THE_TASK,
    id,
  };
};
