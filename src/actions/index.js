import {v4} from 'node-uuid'
export const addTodo = (text) => ({
          type:"ADD-TODO",
          id:v4(),
          text
});


export const toggle = (id) => ({
         type:"TOGGLE",
         id
})

