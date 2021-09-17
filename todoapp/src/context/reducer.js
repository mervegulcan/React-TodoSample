export const initialState = {
    todos :[],
};


const reducer = (state,action) =>{
console.log(action);


switch(action.type){
    case "Add_Todo":
    return {
        ...state,
        todos: [action.payload,...state.todos]
    };
    default :
    return{
        ...state,
    };
    
}
};
export default  reducer;