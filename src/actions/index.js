import {v4} from 'node-uuid'
import * as api from '../api'
export const addTodo = (text) => ({
          type:"ADD-TODO",
          id:v4(),
          text
});

const requestTodos = (filter) => ({
    type: "REQUEST-TODOS",
    filter
});

const receiveTodos = (filter,response)=>({
    type:"RECEIVE-TODOS",
    filter,
    response
})
export const fetchTodos = (filter) => (dispatch) =>{
    dispatch(requestTodos(filter));
    return api.fetchTodos(filter)
            .then(response=>dispatch(receiveTodos(filter,response)))
}
export const toggle = (id) => ({
         type:"TOGGLE",
         id
})

