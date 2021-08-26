import { ERROR_HANDLER } from "../actions/commonActions";

export const errorHandler = (isAlertShown) => {
  return { type: ERROR_HANDLER, isAlertShown };
};
