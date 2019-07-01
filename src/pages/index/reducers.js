import {combineReducers} from 'redux';

const TodoReducer = (state=[], action={}) => {
    switch (action.type) {
        case 'ADD_TODO':
            let newState = [...state];
            newState.push(action.payload);
            return newState;
        default: 
            return state;
    }
}

const reminders = (state = {}, action = {}) => {
    switch (action.type) {
        default: return state;
    }
}

const reducer = combineReducers({
    list: TodoReducer,
    reminderState: reminders
});

export default reducer;