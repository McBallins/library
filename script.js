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
    
};