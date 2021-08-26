import { connect } from "react-redux";
import FrontHeader from "./FrontHeader";

const mapStateToProps = (state) => {
  return {
    header: state.front.header,
    rubrics: state.list.rubrics,
    donePercent: state.list.donePercent,
  };
};

export default connect(mapStateToProps, null)(FrontHeader);
