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

export const getVisiblity = (state,filter) => {
  switch (filter){
    case "all": return state;
    case "active": return state.filter(t=>!t.completed);
    case "completed": return state.filter(t=>t.completed);
    default : throw new Error(`Unknown Filter ${filter}`)
  }
};
