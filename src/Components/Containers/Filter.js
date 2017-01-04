import Link from "../Presentation/Link";
import {connect} from "react-redux";
import {setVisibility} from "../../actions"

const mapStatetoProps = (state,ownProps) =>{
  return {
    active:ownProps.filter === state.visibilityFilter
  }
};

const mapDispatchtoProps = (dispatch,ownProps) => {
  return {
     onClick:()=>{
        dispatch(setVisibility(ownProps.filter))
      }
  }
};

const Filter = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Link);

export default Filter;