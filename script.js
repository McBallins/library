let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info() = function() {
        return (title + ' by ' + author + ', ' + pages + ', ' + read)
    };
    console.log(this.info());
};

function diplayBooks() {
    myLibrary.forEach((Book) => {
        console.log(Book.name);
    });
};

function newBook() {
    const formdisplay = document.getElementById('formdisplay');
    const myFields = [
        ['Title', 'TEXT'],
        ['Author', 'TEXT'],
        ['Pages', 'TEXT'],
        ['Has this been read?', 'CHECKBOX'],
        ['Sumbit', 'BUTTON'],
    ];
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
    });
    return 'Form for adding new book added to document';
};