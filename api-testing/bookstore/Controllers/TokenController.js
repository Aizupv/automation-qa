const { user1 } = require('../test-data/users');
const BaseController = require('./BaseController');

class TokenController extends BaseController {
	async getToken() {
		return this.axiosInstanse.post('Account/v1/GenerateToken', {
			userName: user1.login,
			password: user1.password,
		});
	}
}
module.exports = new TokenController();
