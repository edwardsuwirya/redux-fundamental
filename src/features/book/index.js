import {addBookAction} from './actions.js';

class Book {
    constructor({store} = {}) {
        this.store = store;
    }

    addBook(bookSelected) {
        this.store.dispatch(addBookAction(bookSelected))
    }
}

export default Book;

