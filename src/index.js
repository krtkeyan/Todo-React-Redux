import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,createStore} from "redux";

const Todo = function(state,action){
    switch (action.type) {
        case "ADD-TODO":
                return {
                    id:action.id,
                    text:action.text,
                    completed:false
                };
        case "TOGGLE":
                     if(action.id !== state.id){
                         return state;
                     }
                     return {
                             ...state,completed:!state.completed 
                            };
        default: return state;
    }
}; 

const Todos = function(state=[],action){
    switch (action.type) {
        case "ADD-TODO":
                    return [
                        ...state,
                        Todo(undefined,action)
                    ];
        case "TOGGLE":
                    return state.map((t)=>Todo(t,action));

        default: return state;
    }
};

const VisibilityFilter = (state="SHOW_ALL",action)=>{
    switch (action.type){
        case "SET_VISIBILITY":
            return action.filter;
        default: return state;
    }
};
    

const TodoList = combineReducers({
    Todos,
    VisibilityFilter
});
const store = createStore(TodoList);

const getVisiblity = (Todos,filter) => {
  switch (filter){
    case "SHOW_ALL": return Todos;
    case "SHOW_ACTIVE": return Todos.filter(t=>!t.completed);
    case "SHOW_COMPLETED": return Todos.filter(t=>t.completed);
  }
};

class Filter extends Component{

  render(){
    
  if(this.props.currentFilter==this.props.filter){
    return <span>{this.props.children}</span>
  } 
  return (<a href="#" onClick={e=>{
    e.preventDefault();
    store.dispatch({
      type:"SET_VISIBILITY",
      filter:this.props.filter
    });
  }} 
  >{this.props.children}</a>);
  }
}


let todoId = 0;

class App extends Component {
  handleToggleClick(todo){
     store.dispatch({
              type:"TOGGLE",
              id:todo.id
            });
  }
  handleItems(e){

    if(e.keyCode == 13||e.type == "click"){
      store.dispatch({
          type:"ADD-TODO",
          text:this.input.value,
          id:todoId++
        });
        this.input.value="";
    }
  }
  render() {
    const {Todos,VisibilityFilter} = this.props;
    const visible = getVisiblity(Todos,VisibilityFilter);
    return (
      <div>
      <input ref={(node)=>{
        this.input = node
      }} onKeyDown={this.handleItems.bind(this)} />
      <button onClick={this.handleItems.bind(this)}>
      Add
      </button>
      <p>Show:
       {" "}<Filter filter="SHOW_ALL" currentFilter={VisibilityFilter}>All</Filter>
      {" "}<Filter filter="SHOW_COMPLETED" currentFilter={VisibilityFilter}>Completed</Filter>
      {" "}<Filter filter="SHOW_ACTIVE" currentFilter={VisibilityFilter}>Active</Filter>
      
      </p>
      <ul>
          {visible.map((todo)=>{return (<li key={todo.id} onClick={this.handleToggleClick.bind(this,todo)}  style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</li>)})}  
      </ul>
       
      </div>
    );
  }
}

const render = ()=>{
  ReactDOM.render(
  <App {...store.getState()}/>,
  document.getElementById('root')
 );
};

store.subscribe(render);
render();

