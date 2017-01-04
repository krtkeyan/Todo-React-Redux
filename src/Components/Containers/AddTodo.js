import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions';

let AddTodo = ({dispatch}) => {
  let input;
  return (
   <div>
   <input ref={
      node=>{
        input = node
      }} onKeyDown={(e)=>{
        if(e.keyCode===13&&input.value!==""){
          dispatch(addTodo(input.value));
         input.value="";
        }
      }}/>
      <button onClick={()=>{
        if(input.value!=="")
         dispatch(addTodo(input.value));
        input.value="";
      }}>
      Add
      </button>
  </div>)
};

AddTodo = connect()(AddTodo);
export default AddTodo;