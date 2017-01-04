import TodoList from "../Presentation/TodoList";
import getVisiblity from "../../Reducers/getVisibility";
import {connect} from "react-redux";
import {toggle} from "../../actions"

const mapStatetoProps = (state) => {
    return {
       todos:getVisiblity(state.todos,state.visibilityFilter)
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        onTodoClick:id=>{   
        dispatch(toggle(id))
        }
    }
}

const TodoApp =connect(
  mapStatetoProps,
  mapDispatchtoProps
)(TodoList);

export default TodoApp;