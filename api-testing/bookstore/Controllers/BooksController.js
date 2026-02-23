const BaseController = require('./BaseController');

class BooksController extends BaseController {
	async getAllBooks() {
		return this.axiosInstanse.get('BookStore/v1/Books');
	}
}

module.exports = new BooksController();
