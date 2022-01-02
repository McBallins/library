const isYoMama = new Book('is yo mama?', 'George', 9999, 'yes');
const notYoMama = new Book('not yo mama', 'Elon Musk', 420, 'yes');
const yoMama = new Book('Yo Mama', 'Fat Albert', 69, 'no');

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
    ['Title', 'TEXT'],
    ['Author', 'TEXT'],
    ['Pages', 'TEXT'],
    ['Has this been read?', 'CHECKBOX'],
    ['Sumbit', 'BUTTON', ''],
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
        readColumn.appendChild(newInput);
        newRow.appendChild(readColumn);
        masterRow.appendChild(newRow);
    }));
    return 'Books displayed';
};

function newBook() {
    const formdisplay = document.getElementById('formdisplay');
    Object.keys(myFields).forEach((field) => {
        const br = document.createElement('BR');
        formdisplay.appendChild(br);
        const newLabel = document.createElement('LABEL');
        newLabel.textContent = myFields[field][0];
        formdisplay.appendChild(newLabel);
        const newInput = document.createElement('INPUT');
        newInput.type = myFields[field][1];
        newInput.id = myFields[field][1].toLowerCase();
        formdisplay.appendChild(newInput);
        if (newInput.type === 'button') {
            newLabel.remove();
            newInput.value = 'Submit';
        };
        return 'Form for adding new book added to document';
    });
}