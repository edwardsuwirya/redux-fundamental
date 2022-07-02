const c = require('../../app/constants');
const bookInitialState = {
    student: '',
    books: []
}

function bookReducer(state = bookInitialState, action) {
    switch (action.type) {
        case c.STUDENT_ADD_BOOK:
            return Object.assign({}, state, {
                student: action.payload.student,
                books: [...state.books, action.payload.book]
            })
        default:
            return state
    }
}

module.exports = bookReducer;
