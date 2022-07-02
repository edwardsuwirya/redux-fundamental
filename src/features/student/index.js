const {changeNameAction, addAgeAction} = require("./actions");

class Student {
    constructor({store} = {}) {
        this.store = store;
        this.state = store.getState;
    }

    addAge() {
        this.store.dispatch(addAgeAction())
    }

    changeName(newName) {
        this.store.dispatch(changeNameAction(newName))
    }

    getStudent() {
        return this.state().studentReducer.name;
    }
}


module.exports = Student;

