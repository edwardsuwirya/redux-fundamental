const {createStore} = require('redux');
const rootReducer = require('./rootReducer');

function configureStore() {
    return createStore(rootReducer());
}

module.exports = configureStore;
