import todo from "./todo";
import {combineReducers} from 'redux'

const byId = (state={},action) => {
    switch (action.type) {
        case "ADD-TODO":
        case "TOGGLE":
            return Object.assign({},state,{[action.id]:todo(state[action.id],action)})
        default: return state;
}
}

const allIds = (state=[],action) => {
    switch (action.type){
        case "ADD-TODO":
            return [...state,action.id]
        default:
            return state
    }
}
const todos = combineReducers({byId,allIds});
export default todos;

const getAllTodo = (state) =>
     state.allIds.map(id=>state.byId[id]);

export const getVisiblity = (state,filter) => {
  const allTodo = getAllTodo(state);
  switch (filter){
    case "all": return allTodo;
    case "active": return allTodo.filter(t=>!t.completed);
    case "completed": return allTodo.filter(t=>t.completed);
    default : throw new Error(`Unknown Filter ${filter}`)
  }
}
