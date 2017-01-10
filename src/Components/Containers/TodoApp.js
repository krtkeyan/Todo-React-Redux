import React,{Component} from 'react';
import TodoList from "../Presentation/TodoList";
import {connect} from "react-redux";
import * as actions from "../../actions";
import {withRouter} from 'react-router';
import {getVisiblity} from '../../Reducers/todoList'


class TodoApp extends Component{
  componentDidMount(){
    this.fetchData();
  }
  componentDidUpdate(prevProps){
    if(this.props.filter !== prevProps.filter){
      this.fetchData();
    }
  }
  fetchData(){
    const {filter,fetchTodos} = this.props;
    fetchTodos(filter);
  }
  render(){
    const {toggle,...rest} = this.props;
    return <TodoList {...rest} onTodoClick={toggle} />
  }
}

const mapStatetoProps = (state,{params}) => {
    const filter = params.filter||'all';
    return {
       todos:getVisiblity(state,filter),
       filter
    }
};

TodoApp =withRouter(connect(
  mapStatetoProps,
  actions
)(TodoApp));

export default TodoApp;