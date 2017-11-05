import firebase from '../firebase'

export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

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

export const fetchTodos = () => {

    let f = firebase;
    return (dispatch) => {
        dispatch(requestTodos())
        
        f.database().ref('/todos/').then((snappshot) => {
            alert('firebase fetch todos :)')
            dispatch(receiveTodos(snappshot.val()))
        })
    }
}