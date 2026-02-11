const { default: axios, Axios } = require("axios");
const BaseController = require("../Controllers/BaseController");
const BooksController = require("../Controllers/BooksController");
const LoginController = require("../Controllers/LoginController");
const books = require("../test-data/books");

let userId
let token
beforeAll(async () => {
    const response = await LoginController.getUserId()
    userId = response.data.userId
    token = response.data.token

})
describe('Adding/removing books to the chart', () => {
    beforeAll(async () => {
        await BooksController.axiosInstanse.delete(`BookStore/v1/Books?UserId=${userId}`, 
            { headers: { Authorization: `Bearer ${token}` } })
    })
    test('Check that chart is empty', async () => {
        const response = await BooksController.axiosInstanse.get(`Account/v1/User/${userId}`,
            { headers: { Authorization: `Bearer ${token}` } })
        expect(response.data.books).toEqual([])
        expect(response.data.books).toHaveLength(0)
    })
    test('Adding first book to chart and validate', async () => {
        const response = await BooksController.axiosInstanse.post('BookStore/v1/Books', {

            "userId": userId,
            "collectionOfIsbns": [
                {
                    "isbn": books[0].isbn
                }
            ]
        },
            { headers: { Authorization: `Bearer ${token}` } })
        const addedBook = response.data.books[0].isbn
        expect(response.status).toBe(201)
        expect(addedBook).toBe(books[0].isbn)

    })
})
