import { connect } from "react-redux";
import {
  deleteTask,
  makeTaskIsDone,
} from "../../../store/actionCreators/listCreator";
import FrontItem from "./FrontItem";

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  makeTaskIsDone,
  deleteTask,
})(FrontItem);
