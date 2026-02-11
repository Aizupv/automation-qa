const { default: axios, all } = require("axios");
const BooksController = require("../Controllers/BooksController");





test('Get all books list without login', async () => {
    const response = await BooksController.getAllBooks()
    const allBooks = response.data.books
    expect(response.status).toBe(200);
    expect(allBooks).not.toBeNull()
    expect(allBooks).toHaveLength(8)
} )
