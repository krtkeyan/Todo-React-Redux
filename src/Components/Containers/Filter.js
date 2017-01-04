import Link from "../Presentation/Link";
import {connect} from "react-redux";

const mapStatetoProps = (state,ownProps) =>{
  return {
    active:ownProps.filter === state.currentFilter
  }
};

const mapDispatchtoProps = (dispatch,ownProps) => {
  return {
     onClick:()=>{
        dispatch({
          type:"SET_VISIBILITY",
          filter:ownProps.filter
        })
      }
  }
};

const Filter = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Link);

export default Filter;