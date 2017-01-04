const todo = function(state,action){
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
export default todo;
