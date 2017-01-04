import TodoList from "../Presentation/TodoList";
import getVisiblity from "../../Reducers/getVisibility";
import React, { Component } from 'react';
class TodoApp extends Component{
 

  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  componentWillUnMount(){
    this.unsubscribe();
  }

  render(){
    const {store} = this.context;
    const state = store.getState();
    return (
      <TodoList 
        todos={
        getVisiblity(state.todos,state.visibilityFilter)
        } 
        onTodoClick={id=>{   
        store.dispatch({
              type:"TOGGLE",
              id
            });
          }
        }
      />)
  }
};

TodoApp.contextTypes = {
  store: React.PropTypes.object
}

export default TodoApp;