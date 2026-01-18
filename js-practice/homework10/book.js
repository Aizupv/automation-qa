
export class Book {
    constructor(bookName, authorName, publicationYear) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.publicationYear = publicationYear;
    }
    get bookNameValidation() {
        return this._bookName;
    }
    set bookNameValidation(value) {
        if (typeof value !== 'string' || value.length < 3) {
            console.log('Please use 3 or more characters, text only for Book name ');
        }
        this._bookName = value;
    }
    get bookAuthorValidation() {
        return this._authorName;
    }
    set bookAuthorValidation(value) {
        if (typeof value !== 'string' || value.length < 3) {
            console.log('Please use 3 or more characters, text only for Author name ');
        }
        this._authorName = value;
    }
    get publicationValidation() {
        return this._publicationValidation;
    }
    set publicationValidation(value) {
        if (value > 2024 || value < 1500 || typeof value !== 'number') {
            console.log('Please use 4 or more characters, numbers only for Publication year ');
        }
        this._publicationValidation = value;
    }
    printInfo() {
        console.log(`Name: ${this.bookName}. Author: ${this.authorName}. Published at: ${this.publicationYear} `);
    }
    static getOldestBook(library) {
        return library.reduce((oldest, current) => (current.publicationYear < oldest.publicationYear ? current : oldest));
    }
}




