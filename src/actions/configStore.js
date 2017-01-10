import {createStore,applyMiddleware} from "redux";
import todoList from '../Reducers/todoList';
import promise from 'redux-promise';
import createlogger from 'redux-logger';

export const config = () => {
const middlewares = [promise,createlogger()]
return createStore(todoList,applyMiddleware(...middlewares));
}