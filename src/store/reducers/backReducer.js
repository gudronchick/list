import { required } from "../../utilits/validators";

const initialState = {
  fields: [
    {
      name: "task",
      placeholder: "Task*",
      id: 0,
      type: "text",
      arrOfValidators: [required],
    },
    {
      name: "place",
      placeholder: "Place",
      id: 1,
      type: "text",
      arrOfValidators: [],
    },
    {
      name: "time",
      placeholder: "Time",
      id: 2,
      type: "datetime-local",
      arrOfValidators: [],
    },
    {
      name: "notification",
      placeholder: "Notification",
      id: 3,
      type: "text",
      arrOfValidators: [],
    },
  ],
};

export const back = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
