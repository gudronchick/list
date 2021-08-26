import { ERROR_HANDLER } from "../actions/commonActions";

const initialState = {
  isAlertShown: false,
};

export const common = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_HANDLER:
      return {
        ...state,
        isAlertShown: action.isAlertShown,
      };
    default:
      return state;
  }
};
