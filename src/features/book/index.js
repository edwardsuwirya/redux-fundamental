const {addBookAction} = require("./actions");

class Book {
    constructor({store} = {}) {
        this.store = store;
        this.state = store.getState;
    }

    addBook(bookSelected) {
        this.store.dispatch(addBookAction(bookSelected))
    }

}

module.exports = Book;

