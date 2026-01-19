import { Book } from "./book.js"
export class EBook extends Book {
    constructor(bookName, authorName, publicationYear, fileFormat) {
        super(bookName, authorName, publicationYear);
        this._fileFormat = fileFormat;
    }
    get formatValidation() {
        return this._fileFormat;
    }
    set formatValidation(value) {
        const aviableFormats = ['pdf', 'epub', 'doc', 'txt'];
        if (!aviableFormats.includes(value)) {
            console.log(`This file format isn't supporting`);
        }
    }
    printInfo() {
        console.log(`Name: ${this.bookName}. Author: ${this.authorName}. Published at: ${this.publicationYear}. file format: ${this._fileFormat}`);
    }
    static convertedBook(bookInstanse, fileFormat) {
        return new EBook(bookInstanse.bookName, bookInstanse.authorName, bookInstanse.publicationYear, fileFormat);
    }
}




