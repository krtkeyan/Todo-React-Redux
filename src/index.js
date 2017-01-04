import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,createStore} from "redux";

const todo = function(state,action){
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

const todos = function(state=[],action){
    switch (action.type) {
        case "ADD-TODO":
                    return [
                        ...state,
                        todo(undefined,action)
                    ];
        case "TOGGLE":
                    return state.map((t)=>todo(t,action));

        default: return state;
    }
};

const visibilityFilter = (state="SHOW_ALL",action)=>{
    switch (action.type){
        case "SET_VISIBILITY":
            return action.filter;
        default: return state;
    }
};
    

const todoList = combineReducers({
    todos,
    visibilityFilter
});
const store = createStore(todoList);

const getVisiblity = (todos,filter) => {
  switch (filter){
    case "SHOW_ALL": return todos;
    case "SHOW_ACTIVE": return todos.filter(t=>!t.completed);
    case "SHOW_COMPLETED": return todos.filter(t=>t.completed);
    default : return todos;
  }
};

const Todo = ({onClick,completed,text}) => (
  <li 
  onClick={onClick}  
  style={{textDecoration:completed?"line-through":"none"}}>
  {text}
  </li>
);

const TodoList = ({todos,onTodoClick}) => (
     <ul>
          {todos.map((todo)=><Todo key={todo.id} {...todo} onClick={()=>{onTodoClick(todo.id)}} />)}  
     </ul>
);

const Filter = ({filter,currentFilter,children,onClick}) => 
  {
   if(filter == currentFilter){
    return <span>{children}</span>
    }
  return (
  <a href="#" onClick={e=>{
    e.preventDefault();
    onClick(filter);
  }} 
  >{children}
  </a>
  );
};

const ToggleFilter = ({visibilityFilter,onFilterClick}) => {
 return ( <p>Show:
      {" "}<Filter filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}>All</Filter>
      {" "}<Filter filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}>Completed</Filter>
      {" "}<Filter filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}>Active</Filter>
      </p>
)
}

const AddTodo = ({onAdd}) => {
  let input;
  return (
   <div>
   <input ref={
      node=>{
        input = node
      }} onKeyDown={(e)=>{
        if(e.keyCode===13){
         onAdd(input.value);
         input.value="";
        }
      }}/>
      <button onClick={()=>{
        onAdd(input.value);
        input.value="";
      }}>
      Add
      </button>
  </div>)
}

let todoId = 0;

const App = ({todos,visibilityFilter}) => {
 
   return (
      <div>
      <AddTodo onAdd={(text)=>{
        store.dispatch({
          type:"ADD-TODO",
          id:todoId++,
          text      
        });
      }}/>
          
      <ToggleFilter visibilityFilter={visibilityFilter} onFilterClick={(filter)=>{
        store.dispatch({
          type:"SET_VISIBILITY",
          filter
        })
      }
      }/>
     

      <TodoList 
        todos={
        getVisiblity(todos,visibilityFilter)
        } 
        onTodoClick={id=>{   
        store.dispatch({
              type:"TOGGLE",
              id
            });
          }
        }
      />
      
      </div>
    );
}


const render = ()=>{
  ReactDOM.render(
  <App {...store.getState()}/>,
  document.getElementById('root')
 );
};

store.subscribe(render);
render();

  