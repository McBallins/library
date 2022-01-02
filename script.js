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
    this.info = function() {
        return (title + ' by ' + author + ', ' + pages + ', ' + read)
    };
    console.log(this.info());
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
        masterColumn.classList.add = 'mastercolumn';
        masterColumn.textContent = myFields[field][0];
        masterRow.appendChild(masterColumn);
        if(myFields[field][1] === 'BUTTON') {
            masterColumn.remove();
        };
    }));
        myLibrary.forEach((book => {
        const newRow = document.createElement('DIV');
        newRow.id = 'row';
        const titleColumn = document.createElement('DIV');
        titleColumn.classList.add = 'column';
        titleColumn.textContent = book.title;
        newRow.appendChild(titleColumn);
        const authorColumn = document.createElement('DIV');
        authorColumn.classList.add = 'column';
        authorColumn.textContent = book.author;
        newRow.appendChild(authorColumn);
        const pagesColumn = document.createElement('DIV');
        pagesColumn.classList.add = 'column';
        pagesColumn.textContent = book.pages;
        newRow.appendChild(pagesColumn);
        const readColumn = document.createElement('DIV');
        readColumn.classList.add = 'column';
        const newInput = document.createElement('INPUT');
        newInput.type = 'CHECKBOX';
        newInput.id = 'checkbox';
        // make it so check box is xhexk if read = true
        readColumn.appendChild(newInput);
        newRow.appendChild(readColumn);
        masterRow.appendChild(newRow);
    }));
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
                const title = document.getElementById('title').value;
                const author = document.getElementById('author').value;
                const pages = document.getElementById('pages').value;
                const read = document.getElementById('read').checked;
                enableaddbook = true;
                myLibrary += new Book(title, author, pages, read);
                const forms = document.querySelectorAll('.form')
                console.log(forms);
                forms.forEach((form => {
                    const toRemove = document.querySelector('.form');
                    toRemove.remove();
                }))
            });
        };
        return 'Form for adding new book added to document';
    });
};