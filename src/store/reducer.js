const initialState = {
    tasks: []
}

const reducer = (state, action) => {
    state = state || initialState
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state, 
                tasks: [...state.tasks, action.payload]
            }
        case 'REMOVE_TASK':
            {
                const new_tasks = state.tasks.filter(function(item) {
                    return item !== action.payload;
                });
                return{
                    ...state,
                    tasks: new_tasks
                }
            }
            case 'EDIT_TASK':
                {
                    const new_tasks = state.tasks.filter(function(item) {
                        return item !== action.previous_task_value;
                    });
                    return {
                        ...state,
                        tasks: [...new_tasks, action.updated_task_value]
                    }
                }
        default:
            return state
    }
}

export default reducer