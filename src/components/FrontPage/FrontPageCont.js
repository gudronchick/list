import { connect } from "react-redux";
import FrontPage from "./FrontPage";

const mapStateToProps = (state) => {
  return {
    state: state.list,
  };
};

export default connect(mapStateToProps)(FrontPage);
