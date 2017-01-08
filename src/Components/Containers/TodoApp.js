import TodoList from "../Presentation/TodoList";
import {getVisiblity} from "../../Reducers/todoList";
import {connect} from "react-redux";
import {toggle} from "../../actions"
import {withRouter} from 'react-router'
const mapStatetoProps = (state,{params}) => {
    return {
       todos:getVisiblity(state,params.filter||'all')
    }
};

const TodoApp =withRouter(connect(
  mapStatetoProps,
  {onTodoClick:toggle}
)(TodoList));

export default TodoApp;