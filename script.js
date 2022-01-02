const isYoMama = new Book('is yo mama?', 'George', 9999, true);
const notYoMama = new Book('not yo mama', 'Elon Musk', 420, true);
const yoMama = new Book('Yo Mama', 'Fat Albert', 69, false);

let myLibrary = [
    isYoMama,
    notYoMama,
    yoMama,
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function() {
    //     return (title + ' by ' + author + ', ' + pages + ', ' + read)
    // };
    // console.log(this.info());
};

const myFields = [
    ['Title', 'TEXT', 'title'],
    ['Author', 'TEXT', 'author'],
    ['Pages', 'TEXT', 'pages'],
    ['Has this been read?', 'CHECKBOX', 'read'],
    ['Sumbit', 'BUTTON', 'submit'],
]

function displayBooks() {
    const booklist = document.getElementById('booklist');
    const masterRow = document.createElement('DIV');
    masterRow.id = 'masterrow';
    booklist.appendChild(masterRow);
    Object.keys(myFields).forEach((field => {
        const masterColumn = document.createElement('DIV');
        masterColumn.className = 'mastercolumn';
        masterColumn.textContent = myFields[field][0];
        masterRow.appendChild(masterColumn);
        if(myFields[field][1] === 'BUTTON') {
            masterColumn.textContent = 'Remove Book';
        };
    }));
    let i = 0;
    myLibrary.forEach((book => {
    const newRow = document.createElement('DIV');
    newRow.classList = 'row';
    const titleColumn = document.createElement('DIV');
    titleColumn.classList = 'column';
    titleColumn.textContent = book.title;
    newRow.appendChild(titleColumn);
    const authorColumn = document.createElement('DIV');
    authorColumn.classList = 'column';
    authorColumn.textContent = book.author;
    newRow.appendChild(authorColumn);
    const pagesColumn = document.createElement('DIV');
    pagesColumn.classList = 'column';
    pagesColumn.textContent = book.pages;
    newRow.appendChild(pagesColumn);
    const readColumn = document.createElement('DIV');
    readColumn.classList = 'column';
    const newMarkReadButton = document.createElement('BUTTON');
    newMarkReadButton.dataset.location = i;
    newMarkReadButton.textContent = 'Mark Read';
    newMarkReadButton.classList = 'read'
    readColumn.appendChild(newMarkReadButton);
    const read = document.createElement('DIV');
    read.classList = 'read';
    if(book.read) {
        read.textContent = 'You have read this book!';
    } else {
        read.textContent = 'You have not read this one yet!';
    };
    readColumn.appendChild(read);
    newRow.appendChild(readColumn);
    const deleteColumn = document.createElement('DIV');
    deleteColumn.classList = 'column';
    const deleteButton = document.createElement('BUTTON');
    deleteButton.classList = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.location = i;
    deleteColumn.appendChild(deleteButton);
    newRow.appendChild(deleteColumn);
    booklist.appendChild(newRow);
    i += 1;
    }));
    giveDeleteBtnsListeners();
    makeReadButtonListener();
    return 'Books displayed';
};

let enableaddbook = true;
const addbook = document.getElementById('newbook');
addbook.addEventListener('click', event => {
    if (enableaddbook === true) {
    enableaddbook = false;
    newBook();
    };
});

function newBook() {
    const formdisplay = document.getElementById('formdisplay');
    Object.keys(myFields).forEach((field) => {
        const br = document.createElement('BR');
        formdisplay.appendChild(br);
        const newLabel = document.createElement('LABEL');
        newLabel.classList = ('form');
        newLabel.textContent = myFields[field][0];
        formdisplay.appendChild(newLabel);
        const newInput = document.createElement('INPUT');
        newInput.type = myFields[field][1];
        newInput.classList = ('form');
        newInput.id = myFields[field][2];
        formdisplay.appendChild(newInput);
        if (newInput.type === 'button') {
            newLabel.remove();
            newInput.value = 'Submit';
            newInput.classList = ('form');
            newInput.id  = myFields[field][2];
            const submit = document.getElementById('submit');
            submit.addEventListener('click', submit => {
                addBook();
            });
        };
        return 'Form for adding new book added to document';
    });
};

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const forms = document.querySelectorAll('.form');
    forms.forEach((form => {
        const toRemove = document.querySelector('.form');
        toRemove.remove();
    }));
    enableaddbook = true;
    const newBook = Object.create(Book);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;    
    newBook.read  = read;
    myLibrary.push(newBook);
    reset();
    displayBooks();
};

function makeReadButtonListener() {
    const readButtons = document.querySelectorAll('.read');
    readButtons.forEach(button => {
        button.addEventListener('click', e => {
            if(myLibrary[button.dataset.location].read === true) {
                myLibrary[button.dataset.location].read = false;
            } else {
                myLibrary[button.dataset.location].read = true;
            };
            reset();
            displayBooks();
        });
    });
};

function giveDeleteBtnsListeners() {
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', e => {
            myLibrary.splice(button.dataset.location, 1);
            reset();
            displayBooks();
        });
    });
};

function reset() {
    const masterrow = document.getElementById('masterrow');
    masterrow.remove();
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        rowToRemove = document.querySelector('.row');
        rowToRemove.remove();
    });
};

displayBooks();