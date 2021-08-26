import { getDate } from "../../utilits/utilits";

const initialState = {
  header: {
    getDate: getDate(),
  },
};

export const front = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
