const c = require("../../app/constants");

function addAgeAction() {
    return {
        type: c.STUDENT_ADD_AGE,
    }
}

function changeNameAction(newName) {
    return {
        type: c.STUDENT_CHANGE_NAME,
        payload: {
            name: newName
        }
    }
}

module.exports = {addAgeAction, changeNameAction};
