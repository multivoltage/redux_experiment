import { combineReducers } from 'redux'
import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions'

const initialState = {
    isFetching: false,
    todos: []
}

const todos = (state = initialState, action) => {
    switch (action.type){
        
        // for async
        case 'REQUEST_TODOS':
            return Object.assign({}, state, {
                isFetching: true
            })
        
        // for async
        case 'RECEIVED_TODOS':
            return Object.assign({}, state, {
                isFetching: false,
                todos: action.todos
            })

        default:
            return state;
    }
}

const rootReducers = combineReducers({
    todos
})

export default rootReducers