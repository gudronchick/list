import { combineReducers } from "redux";
import { front } from "../reducers/frontReducer";
import { list } from "../reducers/listReducer";
import { back } from "./backReducer";
import { common } from "./commonReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  front,
  list,
  back,
  common,
  form: formReducer,
});

export default reducers;
