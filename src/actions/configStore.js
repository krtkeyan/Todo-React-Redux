import {createStore,applyMiddleware} from "redux";
import todos from '../Reducers';
import createlogger from 'redux-logger';
const thunk = (store) => (next) => (action) => 
              typeof action === 'function'?action(store.dispatch):next(action);
export const config = () => {
const middlewares = [thunk];
middlewares.push(createlogger());
return createStore(todos,applyMiddleware(...middlewares));
}