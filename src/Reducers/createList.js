import {combineReducers} from 'redux';

const createListByFilter = (filter) => {
    const id = (state=[],action) => {
         if(action.filter !== filter){
        return state;
    }
    switch (action.type){
        case "RECEIVE-TODOS":
            return action.response.map(todo => todo.id);
        default:
            return state
    }
    }
    const isFetching = (state = false,action) => {
        if( action.filter !== filter ) {
            return state;
        }
        switch(action.type){
            case 'REQUEST-TODOS':
                return true;
            case 'RECEIVE-TODOS':
                return false;
            default:
                return state;
        }
    }
    return combineReducers({
        id,
        isFetching
    })
}

export default createListByFilter;

export const getByIds = (state) => state.id;

export const getFetching = (state) =>{
     return state.isFetching
    };   