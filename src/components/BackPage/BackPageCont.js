import { connect } from "react-redux";
import { addTask } from "../../store/actionCreators/listCreator";
import BackPage from "./BackPage";

const mapStateToProps = (state) => {
  return {
    fields: state.back.fields,
    totalAmount: state.list.totalAmount,
  };
};

export default connect(mapStateToProps, { addTask })(BackPage);
