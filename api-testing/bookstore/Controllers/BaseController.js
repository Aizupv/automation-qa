const { default: axios } = require('axios');

class BaseController {
	constructor() {
		this.axiosInstanse = axios.create({
			validateStatus: () => true,
			baseURL: 'https://bookstore.toolsqa.com/',
		});
	}
}
module.exports = BaseController;
