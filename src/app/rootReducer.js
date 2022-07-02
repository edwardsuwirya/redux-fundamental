const {combineReducers} = require("redux");
const studentReducer = require('../features/student/reducers');
const bookReducer = require('../features/book/reducers')

function rootReducer() {
    return combineReducers({
        studentReducer,
        bookReducer
    })
}

module.exports = rootReducer;
