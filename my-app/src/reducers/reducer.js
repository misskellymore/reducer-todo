
export const initialState  = {

    todos: [

        {   item: '',
            completed: false,
            id: 3892987589
          }
    ]

}



export const reducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TODO':
            
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };

            case "TOGGLE_COMPLETE":
                    return {
                      ...state,
                      todos: state.todos.map(todo =>
                        todo.id === action.payload
                          ? { ...todo, completed: !todo.completed }
                          : todo
                      )
                    };


                    case "CLEAR_COMPLETED":
                            return {
                              ...state,
                              todos: state.todos.filter(todo => !todo.completed)
                            };


                         
        default: 
            return state;
    }
};