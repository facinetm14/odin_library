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
    e.preventDefault();
    const [action, book] = e.target.dataset.id.split("-");
    bookManager[action](book, e.target.dataset.id);
}

displayBooks(container, dummyLibrary);

const bookManager = {
    readBook: readBook,
    deleteBook: deleteBook
};

const btns = document.querySelectorAll(".btn");
const addBookBtn = document.querySelector("#add-book");
const modal = document.querySelector("#add-book-modal");
const cancelBtn = document.querySelector("#cancel");
const saveBtn = document.querySelector("#save");

const displayModal = (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible';
}

const hideModal = (e) => {
    e.preventDefault();
    modal.style.visibility = 'hidden';
}

const saveBook = (e) => {
    hideModal(e);
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => { executeAction(e, bookManager) });
});
addBookBtn.addEventListener('click', displayModal);
cancelBtn.addEventListener('click', hideModal);
saveBtn.addEventListener('click', saveBook);



