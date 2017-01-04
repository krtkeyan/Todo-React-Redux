import todo from "./todo";

const todos = function(state=[],action){
    switch (action.type) {
        case "ADD-TODO":
                    return [
                        ...state,
                        todo(undefined,action)
                    ];
        case "TOGGLE":
                    return state.map((t)=>todo(t,action));

        default: return state;
    }
};

export default todos;
