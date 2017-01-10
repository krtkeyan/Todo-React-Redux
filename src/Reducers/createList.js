const  createListByFilter = (filter) => {
    return (state=[],action) => {
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
}

export default createListByFilter;

export const getByIds = (state) => state;