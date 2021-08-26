import { connect } from "react-redux";
import { addTask, sendPagNum } from "../../store/actionCreators/listCreator";
import Pagination from "./Pagination";

const mapStateToProps = (state) => {
  return {
    totalAmount: state.list.totalAmount,
  };
};

export default connect(mapStateToProps, { addTask, sendPagNum })(Pagination);
