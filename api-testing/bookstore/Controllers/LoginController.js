const { user1 } = require('../test-data/users');
const BaseController = require('./BaseController');

class LoginController extends BaseController {
    async getUserId() {
        return this.axiosInstanse.post('Account/v1/Login', {
  "userName": user1.login,
  "password": user1.password
});
    }
}

module.exports = new LoginController();