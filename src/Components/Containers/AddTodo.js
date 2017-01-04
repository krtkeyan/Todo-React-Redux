import React from 'react';
import {connect} from 'react-redux';

let todoId = 0;
let AddTodo = ({dispatch}) => {
  let input;
  return (
   <div>
   <input ref={
      node=>{
        input = node
      }} onKeyDown={(e)=>{
        if(e.keyCode===13){
          dispatch({
          type:"ADD-TODO",
          id:todoId++,
          text:input.value      
         });
         input.value="";
        }
      }}/>
      <button onClick={()=>{
         dispatch({
          type:"ADD-TODO",
          id:todoId++,
          text:input.value     
        });
        input.value="";
      }}>
      Add
      </button>
  </div>)
};

AddTodo = connect()(AddTodo);
export default AddTodo;