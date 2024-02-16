'use strict';
import { Book } from './book.js';
import { displayBooks, readBook, deleteBook } from './library.js';

const myLibrary = [];
const container = document.querySelector(".container");

const dummyLibrary = [
    {
        title: 'Clean',
        author: 'Kent',
        pages: 21,
    },
    {
        title: "What do you do ?",
        author: 'Kent',
        pages: 21,
    },
];

const executeAction = (e, bookManager) => {
    const [action, book] = e.target.dataset.id.split("-");
    bookManager[action](book, e.target.dataset.id);
}

displayBooks(container, dummyLibrary);

const bookManager = {
    readBook: readBook,
    deleteBook: deleteBook
};

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => { executeAction(e, bookManager) });
})




