import {combineReducers} from 'redux'; // 合并reducer的工具类
import { ADD_REMINDER } from '../actions/constants';

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


const reminders = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_REMINDER: 
            return [
                ...state,
                {
                    text: action.text,
                    id: Math.random()
                }
            ]
        default: return state;
    }
}

const reducer = combineReducers({
    list: TodoReducer,
    reminderState: reminders
});

export default reducer;