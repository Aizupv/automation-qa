
import { Book } from "./book.js"
import { EBook } from "./eBook.js"

const book1 = new Book ( 'The Lord of the Rings', 'Alan Lee', 1959);
const book2 = new Book ( 'The Great Gatsby', 'F.Scott Fitzgerald', 1925);
console.log("--- Звичайні книги ---");
book1.printInfo();
book2.printInfo();

const book1converted = EBook.convertedBook(book1, 'pdf')
const book2converted = EBook.convertedBook(book2, 'txt');
console.log("--- Електронні книги ---");
book1converted.printInfo();
book2converted.printInfo();

const library = [book1, book2];
const oldestBook = Book.getOldestBook(library);
console.log("--- Найдавніша книга ---");
oldestBook.printInfo();


 book1.publicationValidation = 1200;
book1converted.formatValidation = 'mp3';
book2.bookAuthorValidation = 334










