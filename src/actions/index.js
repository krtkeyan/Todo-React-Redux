import {v4} from 'node-uuid'
import * as api from '../api'
export const addTodo = (text) => ({
          type:"ADD-TODO",
          id:v4(),
          text
});

const receiveTodos = (filter,response)=>({
    type:"RECEIVE-TODOS",
    filter,
    response
})
export const fetchTodos = (filter) => 
    api.fetchTodos(filter).then(response=>receiveTodos(filter,response))

export const toggle = (id) => ({
         type:"TOGGLE",
         id
})

