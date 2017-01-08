import todos,* as fromTodos from "./todos";
import {combineReducers} from "redux";

const todoList = combineReducers({
    todos,
   
});

export default todoList;

export const getVisiblity = (state,filter) => fromTodos.getVisiblity(state.todos,filter)