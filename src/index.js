import Student from './features/student/index.js';
import Book from './features/book/index.js';
import {configureStore} from './app/store.js';

const store = configureStore();
store.subscribe(() => {
    console.log('Store change', store.getState());
});
const s = new Student({store});
const b = new Book({store});

s.changeName('Enigma IT BootCamp');
s.addAge();

let student01 = s.getStudent();
b.addBook({
    student: student01,
    book: 'Belajar React Fundamental'
})
b.addBook({
    student: student01,
    book: 'Basic React Redux'
})
