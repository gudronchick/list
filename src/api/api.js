import { deleteTaskReq, getTasks, putTheTask } from "./server";

export const sendTask = async (task, num) => {
  const response = await getTasks(task, num);
  return response;
};

export const doTheTask = async (id) => {
  const response = await putTheTask(id);
  return response;
};

export const deleteTheTask = async (id, num) => {
  const response = await deleteTaskReq(id, num);
  return response;
};
