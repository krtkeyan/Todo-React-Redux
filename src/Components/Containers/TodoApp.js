import TodoList from "../Presentation/TodoList";
import getVisiblity from "../../Reducers/getVisibility";
import {connect} from "react-redux";

const mapStatetoProps = (state) => {
    return{
       todos:getVisiblity(state.todos,state.visibilityFilter)
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        onTodoClick:id=>{   
        dispatch({
              type:"TOGGLE",
              id
        })
        }
    }
}

const TodoApp =connect(
  mapStatetoProps,
  mapDispatchtoProps
)(TodoList);

export default TodoApp;