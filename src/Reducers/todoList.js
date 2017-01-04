import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import {combineReducers} from "redux";

const todoList = combineReducers({
    todos,
    visibilityFilter
});

export default todoList;