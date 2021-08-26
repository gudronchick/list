import {
  ADD_TASK,
  REMOVE_THE_TASK,
  SEND_PUG_NUM,
  TASK_IS_DONE,
} from "../actions/listActions";

const initialState = {
  list: [],
  completed: 0,
  rubrics: {
    business: 0,
    personal: 0,
  },
  completedAmount: 0,
  donePercent: 0,
  totalAmount: 0,
  pagNum: 1,
  isTaskAdded: false,
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: [...action.payload.tasks],
        totalAmount: action.payload.totalAmount,
        rubrics: action.payload.rubricsAmount,
        completedAmount: action.payload.completedAmount,
        donePercent: action.payload.donePercent,
      };
    case TASK_IS_DONE:
      let list = state.list.map((item) => {
        if (item.done) {
          return item;
        }
        if (item.id === action.idDone) {
          item = action.payload.task;
          return item;
        }
        return item;
      });
      return {
        ...state,
        list: [...list],
        completedAmount: action.payload.completedAmount,
        donePercent: action.payload.donePercent,
      };
    case REMOVE_THE_TASK:
      return {
        ...state,
        list: [...action.payload.tasks],
        totalAmount: action.payload.totalAmount,
        rubrics: action.payload.rubricsAmount,
        completedAmount: action.payload.completedAmount,
        donePercent: action.payload.donePercent,
      };
    case SEND_PUG_NUM:
      return {
        ...state,
        pagNum: action.num,
      };
    default:
      return state;
  }
};
