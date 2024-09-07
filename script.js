const newBookButton = document.getElementById('new-book-button');
const bookForm = document.querySelector('.book-form');
const addBookButton = document.getElementById('add-book-button');
const cancelButton = document.getElementById('cancel-button');
const bookList = document.getElementById('book-list');


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


function addBookToList(book) {
    const newBookEntry = document.createElement('div');
    newBookEntry.classList.add('book-entry');
    newBookEntry.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.isRead ? 'Yes' : 'No'}</p>
        `;
    bookList.appendChild(newBookEntry);
}


newBookButton.addEventListener('click', () => {
    bookForm.style.display = 'block'; 
});

cancelButton.addEventListener('click', () => {
    bookForm.style.display = 'none'; 
});


addBookButton.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('read').checked;

    if (title && author && pages) {
        const newBook = new Book(title, author, pages, isRead);
            addBookToList(newBook);

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('read').checked = false;

        bookForm.style.display = 'none';
    } else {
        alert('Лее, я поля для кого делал, заполняй да 🔴🔚');
    }
});