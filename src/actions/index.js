let todoId = 0;
export const addTodo = (text) => {
    return {
          type:"ADD-TODO",
          id:todoId++,
          text    
        }
};

export const setVisibility = (filter) => {
    return {
          type:"SET_VISIBILITY",
          filter
        }
};

export const toggle = (id) => {
    return {
              type:"TOGGLE",
              id
         }
};

