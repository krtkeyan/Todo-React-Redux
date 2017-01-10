import {createStore,applyMiddleware} from "redux";
import todos from '../Reducers';
import promise from 'redux-promise';
import createlogger from 'redux-logger';

export const config = () => {
const middlewares = [promise,createlogger()]
return createStore(todos,applyMiddleware(...middlewares));
}