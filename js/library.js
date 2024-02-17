"use strict";

const BOOK_TEXT_BUFFER = 10;

function readBook(_book, btnId) {
    const currentBookBtn = document.querySelector(`[data-id="${btnId}"]`);
    currentBookBtn.textContent = (currentBookBtn.textContent == 'Read') ? 'Unread' : 'Read';
}

function deleteBook(book, _btnId) {
    const currentBook = document.querySelector(`[data-id="${book}"]`);
    const parentFrom = currentBook.parentElement;
    parentFrom.removeChild(currentBook);
}

function addBook(library, book) {
    library.push(book);
}

const formatBookText = (title) => {
    if (title.length < BOOK_TEXT_BUFFER) return title;
    return `${title.substring(0, BOOK_TEXT_BUFFER)}...`;
}

const addNewElement = (parentTo, elementTag, elementContent, breakLine = -1, id = "") => {
    const element = document.createElement(elementTag);
    element.textContent = elementContent;
    parentTo.appendChild(element);
    for (let i = 0; i < breakLine; i++) {
        const br = document.createElement('br');
        parentTo.appendChild(br);
    }
    if (elementTag == "button") element.classList.add('btn');
    if (elementContent == "Delete") element.classList.add('btn-delete');
    if (id) element.setAttribute('data-id', id);
}

const createBookComponent = (book) => {
    const div = document.createElement('div');
    div.classList.add('book');
    
    addNewElement(div, 'h3', formatBookText(book.title));
    addNewElement(div, 'span', `${book.pages} pages`, 2);
    addNewElement(div, 'span', `By `);
    addNewElement(div, 'strong', formatBookText(book.author), 2);
    addNewElement(div, 'button', `${ book.isRead ? 'Read' : 'Unread' }`, 2, `readBook-${book.title}`);
    addNewElement(div, 'button', 'Delete', -1, `deleteBook-${book.title}`);
    return div;
}

const displayBooks = (listComp, bookList) => {
    while (listComp.firstChild) {
        listComp.removeChild(listComp.firstChild);
    }
    bookList.forEach((book) => {
        const bookComp = createBookComponent(book);
        bookComp.setAttribute('data-id', book.title);
        listComp.appendChild(bookComp);
    });
}

const findBook = (myLibrary, title) => {
    return myLibrary.find((book) => book.title == title);
};

const bookManager = {
    readBook,
    deleteBook,
    addBook,
    findBook,
};

export { displayBooks, bookManager };