import {throttle} from 'lodash'
import {loadState,saveState} from './localStorage'
import {createStore} from "redux";
import todoList from '../Reducers/todoList';
export const config = () => {
const persistedState=loadState();
const store = createStore(todoList,persistedState);
store.subscribe(throttle(()=>{
  saveState({todos:store.getState().todos})
}),1000)
return store;
}