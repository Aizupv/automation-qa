const { default: axios } = require("axios");
const BaseController = require("../Controllers/BaseController");
const BooksController = require("../Controllers/BooksController");
const { user1 } = require("../test-data/users");
const TokenController = require("../Controllers/TokenController");



test ('Login to Profile, get Token and validate' , async () => {
   const response = await TokenController.getToken();
   const token = response.data.token;
   expect(response.status).toBe(200);
   expect (response.data.status).toBe('Success');
   expect(response.data.result).toBe('User authorized successfully.')
   expect(token).not.toBeNull();
   console.log(response)
})
