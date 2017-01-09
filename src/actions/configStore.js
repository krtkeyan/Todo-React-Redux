import {throttle} from 'lodash'
import {loadState,saveState} from './localStorage'
import {createStore} from "redux";
import todoList from '../Reducers/todoList';

const addLogging = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action); 
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

export const config = () => {
const persistedState=loadState();
const store = createStore(todoList,persistedState);
store.dispatch = addLogging(store)
store.subscribe(throttle(()=>{
  saveState({todos:store.getState().todos})
}),1000)
return store;
}