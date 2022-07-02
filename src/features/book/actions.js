const c = require("../../app/constants");

function addBookAction(bookSelected) {
    return {
        type: c.STUDENT_ADD_BOOK,
        payload: {
            student: bookSelected.student,
            book: bookSelected.book
        }
    }
}


module.exports = {addBookAction};
