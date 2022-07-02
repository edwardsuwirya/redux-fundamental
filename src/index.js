const Student = require('../src/features/student');
const Book = require('../src/features/book');
const configureStore = require("./app/store");

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
