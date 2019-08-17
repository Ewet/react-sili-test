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


const reminders = (state = [1], action = {}) => {
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


const stateCount = (state = 2, action = {}) => {
    switch (action.type) {
        case 'COUNT': {
            return action.count
        }
            
        default: return state;

    }
}

const myName = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return action.name
        default: return state || 'chen';
    }
}

const reducer = combineReducers({
    list: TodoReducer,
    reminderState: reminders,
    count: stateCount,
    name: myName
});

export default reducer;