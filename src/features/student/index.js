import {changeNameAction, addAgeAction} from './actions.js';

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


export default Student;

