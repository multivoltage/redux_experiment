import fire from '../firebase.js';

export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const RECEIVE_TODO_SINGLE = 'RECEIVE_TODO_SINGLE'
export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const DELETED_TODO_SINGLE = 'DELETED_TODO_SINGLE'
export const EDITED_TODO = 'EDIT_TODO'

const requestTodos = () => {
    return {
        type: REQUEST_TODOS
    }
}

const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
}

const receiveTodoSingle = (todo) => {
    return {
        type: RECEIVE_TODO_SINGLE,
        todo
    }
}

const addedNewTodo = (todo) => {
    return {
        type: ADD_NEW_TODO,
        todo
    }
}

const deletedTodo = (id) => {
    return {
        type: DELETED_TODO_SINGLE,
        id
    }
}

const changedTodo = (id, todo) => {
    return {
        type: EDITED_TODO,
        id,
        todo
    }
}

export const fetchTodosOneToOne = () => {
    
        return (dispatch) => {
            //dispatch(requestTodos()) for loading view for example
            
            fire.database().ref('/todos/').on('child_added',(snapshot) => {
                dispatch(receiveTodoSingle(snapshot.val()))
            })

            fire.database().ref('/todos/').on('child_removed',(snapshot) => {
                dispatch(deletedTodo(snapshot.val().id))
            })

            fire.database().ref('/todos/').on('child_changed',(snapshot) => {
                 dispatch(changedTodo(snapshot.key, snapshot.val()))
            });
        }
    }

export const fetchTodos = () => {

    return (dispatch) => {
        dispatch(requestTodos())
        
        fire.database().ref('/todos/').once('value').then((snapshot) => {
            debugger
            let todos = Object.values(snapshot.val())
            dispatch(receiveTodos(todos))
        })
        
    }
}

export const insertNewTodo = (todoText) => {

    return (dispatch) => {

        let newTodoRef = fire.database().ref('/todos/').push()
        
        let todo = {
            id: newTodoRef.key,
            text: todoText
        }

        newTodoRef.set(todo)
        dispatch(addedNewTodo(todo))
    }
}

export const deleteTodo = (id) => {
    
    return (dispatch) => {
        let refToDelete = fire.database().ref('/todos/'+id)
        refToDelete.remove()
        dispatch(deletedTodo(id))
    }
}

export const editTodo = (id, newText) => {

    return (dispatch) => {

        let refToChange = fire.database().ref('/todos/'+id)
        refToChange.child('text').set(newText)
    }
}