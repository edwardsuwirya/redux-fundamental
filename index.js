import redux from 'redux';
// Source of truth, repository global, database
const createStore = redux.createStore;

const initialState = {
    name: 'Tika',
    age: 23
}

// Transaksi store
const rootReducer = (state = initialState, action) => {
    return state;
}

// Inisialisasi store
const store = createStore(rootReducer);
console.log(store.getState());
