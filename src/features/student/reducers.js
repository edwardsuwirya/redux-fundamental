const c = require('../../app/constants');
const studentInitialState = {
    name: '',
    age: 0
}

function studentReducer(state = studentInitialState, action) {
    switch (action.type) {
        case c.STUDENT_ADD_AGE:
            // return {
            //     ...state,
            //     age: state.age + 1
            // }
            return Object.assign({}, state, {
                age: state.age + 1
            })
        case c.STUDENT_CHANGE_NAME:
            // return {
            //     ...state,
            //     name: action.name
            // }
            return Object.assign({}, state, {
                name: action.payload.name
            })
        default:
            return state
    }
}

module.exports = studentReducer;
