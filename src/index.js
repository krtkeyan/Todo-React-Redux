import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,createStore} from "redux";

const Todo = function(state,action){
    switch (action.type) {
        case "ADD-TODO":
                return {
                    id:action.id,
                    text:action.text,
                    completed:false
                };
        case "TOGGLE":
                     if(action.id !== state.id){
                         return state;
                     }
                     return {
                             ...state,completed:!state.completed 
                            };
        default: return state;
    }
}; 

const Todos = function(state=[],action){
    switch (action.type) {
        case "ADD-TODO":
                    return [
                        ...state,
                        Todo(undefined,action)
                    ];
        case "TOGGLE":
                    return state.map((t)=>Todo(t,action));

        default: return state;
    }
};

const VisibilityFilter = (state="SHOW_ALL",action)=>{
    switch (action.type){
        case "SET_VISIBILITY":
            return action.filter;
        default: return state;
    }
};
    

const TodoList = combineReducers({
    Todos,
    VisibilityFilter
});
const store = createStore(TodoList);

