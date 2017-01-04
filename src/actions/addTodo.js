let todoId = 0;
const addTodo = (text) => {
    return {
          type:"ADD-TODO",
          id:todoId++,
          text    
        }
    }

export default addTodo;