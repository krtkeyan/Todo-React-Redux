import {combineReducers} from 'redux'
import byId,* as fromByIds from './byIds';
import createListByFilter,* as fromList from './createList'

const listByFilter = combineReducers({
    all:createListByFilter('all'),
    active:createListByFilter('active'),
    completed:createListByFilter('completed')
})

const todos = combineReducers({byId,listByFilter});
export default todos;

export const getVisiblity = (state,filter) => {
    const ids = fromList.getByIds(state.listByFilter[filter]);
    return ids.map(id=> fromByIds.getTodos(state.byId,id));
}

export const getFetching = (state,filter) => {
    
    return fromList.getFetching(state.listByFilter[filter])
}