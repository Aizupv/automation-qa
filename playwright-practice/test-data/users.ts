import { faker } from "@faker-js/faker";

export const USER_TO_SIGNUP = {
    name: faker.person.firstName(),
    lastname : faker.person.lastName(),
    email : faker.internet.email(),
    password : faker.internet.password({
          length: 12,
          pattern: /[0-9A-Za-z]/
        })
}