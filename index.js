const redux = require('redux');
// Source of truth, repository global, database
const createStore = redux.createStore;

const initialState = {
    name: 'Tika',
    age: 23
}

// Transaksi store
const rootReducer = (state = initialState, action) => {
    if (action.type === "ADD_AGE") {
        // Jangan mutate object, karena redux reducer melakukan perubahan dengan
        // compare previous state object dengan next state object
        // https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts
        // Compare 2 object
        // let obj1 = {nama: 'Enigma'};
        // let obj2 = obj1;
        // obj2.nama = 'Enigmacamp';
        // console.log(obj1 === obj2); // true
        // Cara yang salah untuk melakukan update store
        // state.age = state.age + 1;
        return {
            ...state,
            age: state.age + 1
        }
    }
    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.name
        }
    }

    return state;
}

// Inisialisasi store
const store = createStore(rootReducer);
console.log('State Awal');
console.log(store.getState());
store.dispatch(
    {
        type: 'ADD_AGE',
    }
)
console.log('State Setelah Tambah Umur');
console.log(store.getState());
store.dispatch(
    {
        type: 'CHANGE_NAME',
        name: 'EnigmaCamp'
    }
)
console.log('State Setelah Ganti Nama');
console.log(store.getState());
