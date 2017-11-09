import { combineReducers } from 'redux'
import { 
    REQUEST_TODOS, 
    RECEIVE_TODOS, 
    RECEIVE_TODO_SINGLE, 
    DELETED_TODO_SINGLE,
    EDITED_TODO 
} from '../actions'

const initialState = {
    isFetching: false,
    todos: []
}

const todosWrapper = (state = initialState, action) => {
    switch (action.type){
        
        // for async
        case REQUEST_TODOS:
            return Object.assign({}, state, {
                isFetching: true
            })
        
        // for async
        case RECEIVE_TODOS:
            return Object.assign({}, state, {
                isFetching: false,
                todos: action.todos
            })

        // for async
        case RECEIVE_TODO_SINGLE:
            return Object.assign({}, state, {
                isFetching: false,
                todos: state.todos.concat(action.todo)
            })

        case DELETED_TODO_SINGLE: 
            return Object.assign({}, state, {
                todos: state.todos.filter((t) => t.id !== action.id)
            })    

        case EDITED_TODO: 

            let todos = Object.assign([], state.todos).map((t) => {

                return t.id === action.id ? 
                    Object.assign({},t,action.todo) :
                    t
            })

            return Object.assign({}, state, { todos })

        default:
            return state;
    }
}

// rootReducers is a normal reducers build with list of reducers
const rootReducers = combineReducers({
    todosWrapper
})

export default rootReducers