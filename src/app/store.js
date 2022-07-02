import {createStore} from 'redux';
import {rootReducer} from './rootReducer.js';

export function configureStore() {
    return createStore(rootReducer());
}
