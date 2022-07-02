import {combineReducers} from 'redux';
import {studentReducer} from '../features/student/reducers.js';
import {bookReducer} from '../features/book/reducers.js';

export function rootReducer() {
    return combineReducers({
        studentReducer,
        bookReducer
    })
}

