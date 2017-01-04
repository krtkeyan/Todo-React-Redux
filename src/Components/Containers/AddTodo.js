import React from 'react';
let todoId = 0;
const AddTodo = (props,{store}) => {
  let input;
  return (
   <div>
   <input ref={
      node=>{
        input = node
      }} onKeyDown={(e)=>{
        if(e.keyCode===13){
          store.dispatch({
          type:"ADD-TODO",
          id:todoId++,
          text:input.value      
         });
         input.value="";
        }
      }}/>
      <button onClick={()=>{
         store.dispatch({
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
AddTodo.contextTypes = {
  store:React.PropTypes.object
}

export default AddTodo;