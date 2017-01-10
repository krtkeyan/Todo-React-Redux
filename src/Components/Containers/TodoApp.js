import React,{Component} from 'react';
import TodoList from "../Presentation/TodoList";
import {connect} from "react-redux";
import * as actions from "../../actions";
import {withRouter} from 'react-router';
import {getVisiblity,getFetching} from '../../Reducers'

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
    const {toggle,todos,isFetching} = this.props;
    if (isFetching&&!todos.length){
      return <p>Loading...</p>
    }
    return <TodoList todos={todos} onTodoClick={toggle} />
    
  }
}

const mapStatetoProps = (state,{params}) => {
    const filter = params.filter||'all' ;
   
    return {
       todos:getVisiblity(state,filter),
       isFetching:getFetching(state,filter),
       filter
    }
};

TodoApp =withRouter(connect(
  mapStatetoProps,
  actions
)(TodoApp));

export default TodoApp;