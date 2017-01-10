const byId = (state={},action) => {
    switch (action.type) {
        case "RECEIVE-TODOS":
            const nextState = {...state};
            action.response.forEach(todo=>{
                nextState[todo.id]=todo;
            })
            return nextState;
        default: return state;
}
}
export default byId;

export const getTodos = (state,id) => state[id]