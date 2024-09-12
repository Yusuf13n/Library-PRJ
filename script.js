const newBookButton = document.getElementById('new-book-button');
const bookForm = document.querySelector('.book-form');
const addBookButton = document.getElementById('add-book-button');    // кнопка create
const cancelButton = document.getElementById('cancel-button');       // кнопка cancel
const bookList = document.getElementById('book-list');



function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBookToList(book) {
    const newBookEntry = document.createElement('div');
    newBookEntry.classList.add('book-entry');
    newBookEntry.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        `;

    const btnIsRead = document.createElement('button');
    btnIsRead.textContent = 'Read'
    btnIsRead.classList = 'btn-Read';

    btnIsRead.addEventListener('click', () => {
        if(btnIsRead.textContent === 'Read') {
            btnIsRead.textContent = 'Not read';
            btnIsRead.style.backgroundColor = '#0e5086';
        }else {
            btnIsRead.textContent = 'Read';
            btnIsRead.style.backgroundColor = 'rgb(151, 60, 151)';
        }
    })


    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Remove'
    btnDelete.classList = 'btn-delete';

    btnDelete.addEventListener('click', () => {
        newBookEntry.remove();
    })

    newBookEntry.append(btnIsRead, btnDelete);

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

    if (title && author && pages) {
        const newBook = new Book(title, author, pages);
            addBookToList(newBook);

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';

        bookForm.style.display = 'none';
    } else {
        alert('Лее, я поля для кого делал, заполняй да 🔴🔚');
    }
});