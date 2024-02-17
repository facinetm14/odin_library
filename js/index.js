'use strict';
import { Book } from './book.js';
import { displayBooks, bookManager } from './library.js';

const myLibrary = [
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        pages: 462,
        isRead: true,
    },
    {
        title: "TDD",
        author: 'Kent',
        pages: 217,
        isRead: false
    },
];

const container = document.querySelector(".container");

const executeAction = (e, bookManager) => {
    e.preventDefault();
    const [action, book] = e.target.dataset.id.split("-");
    bookManager[action](book, e.target.dataset.id);
}

const addBookBtn = document.querySelector("#add-book");
const modal = document.querySelector("#add-book-modal");
const cancelBtn = document.querySelector("#cancel");
const saveBtn = document.querySelector("#save");
const bookForm = document.querySelector("#add-book-form");

const displayModal = (e) => {
    e.preventDefault();
    modal.showModal();
}

const hideModal = (e) => {
    e.preventDefault();
    modal.close();
}



const saveBook = (e, bookManager, formElement) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formElement));
    if (bookManager.findBook(myLibrary, formData.title)) {
        alert('This book already exists');
        return;
    }

    try {
        const book = new Book(formData);
        bookManager.addBook(myLibrary, book);
        modal.close();
        displayLibrary(container, myLibrary);
    }
    catch (error) {
        alert(error);
    }
}

const displayLibrary = (container, myLibrary) => {
    displayBooks(container, myLibrary);
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => { executeAction(e, bookManager) });
    });
}

displayLibrary(container, myLibrary);

addBookBtn.addEventListener('click', displayModal);
cancelBtn.addEventListener('click', hideModal);
saveBtn.addEventListener('click', (e) => { saveBook(e, bookManager, bookForm) });




