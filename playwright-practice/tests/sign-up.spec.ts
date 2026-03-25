import { test, expect } from "@playwright/test";
import HomePage from "../pom/pages/HomePage";
import SignupForm from "../pom/forms/SignupForm";
import { faker } from "@faker-js/faker";
import { USER_TO_SIGNUP } from "../test-data/users";
import { SignUpValidationMessages } from "../test-data/messages";


test.describe('Sign up form', () => {
  let homePage: HomePage;
  let signupForm: SignupForm;
  let correctPassword;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signupForm = new SignupForm(page);
    await page.goto('/');
    await homePage.signupButton.click();
  })
  test.describe('Sign Up form  - valid input', () => {
    test('All fields - valid input', async () => {
      await signupForm.signup(USER_TO_SIGNUP.name, USER_TO_SIGNUP.lastname, USER_TO_SIGNUP.email, USER_TO_SIGNUP.password)
      await signupForm.verifySignupFormIsValid();

    })
  })
  test.describe('Name field validation', () => {

    test('Name field is empty', async () => {
      await signupForm.fieldIsEmpty(signupForm.nameField);
      await signupForm.validationError(signupForm.nameField, SignUpValidationMessages.emptyName);
    })
    test('Name field - wrong data input', async () => {
      await signupForm.inputData(signupForm.nameField, '1Text');
      await signupForm.validationError(signupForm.nameField, SignUpValidationMessages.invalidName);
    })
    test('Name field - wrong length', async () => {
      await signupForm.inputData(signupForm.nameField, 'N');
      await signupForm.validationError(signupForm.nameField, SignUpValidationMessages.invalidNameLength);
      await signupForm.inputData(signupForm.nameField, 'Namenamenamenamenamenamennname');
      await signupForm.validationError(signupForm.nameField, SignUpValidationMessages.invalidNameLength);
    })
    test('Name field - valid input', async () => {
      const validName = faker.person.firstName();
      await signupForm.inputData(signupForm.nameField, `${validName}`);
      await signupForm.isCorrectInput(signupForm.nameField);

    })
    test.describe('Last Name field validation', () => {
      test('Last Name field is empty', async () => {
        await signupForm.fieldIsEmpty(signupForm.lastNameField);
        await signupForm.validationError(signupForm.lastNameField, SignUpValidationMessages.emptyLastName);
      })
      test('Last name field - wrong data input', async () => {
        await signupForm.inputData(signupForm.lastNameField, ' 1Name');
        await signupForm.validationError(signupForm.lastNameField, SignUpValidationMessages.invalidLastName);
      })
      test('Last name field - wrong length', async () => {
        await signupForm.inputData(signupForm.lastNameField, 'N');
        await signupForm.validationError(signupForm.lastNameField, SignUpValidationMessages.invalidLastNameLength);
        await signupForm.inputData(signupForm.lastNameField, 'Namenamenamenamenamenamennname');
        await signupForm.validationError(signupForm.lastNameField, SignUpValidationMessages.invalidLastNameLength);
      })
      test('Last name field - valid input', async () => {
        const validLastName = faker.person.lastName();
        await signupForm.inputData(signupForm.lastNameField, `${validLastName}`);
        await signupForm.isCorrectInput(signupForm.lastNameField);
      })

    })
    test.describe('Email field validation', () => {
      test('Email field is empty', async () => {
        await signupForm.fieldIsEmpty(signupForm.emailField)
        await signupForm.validationError(signupForm.emailField, SignUpValidationMessages.emptyEmail);

      })
      test('Email field - invalid data input', async () => {
        const invalidEmail = faker.internet.email({ firstName: 'aqa', provider: 'net' });
        await signupForm.inputData(signupForm.emailField, `${invalidEmail}`);
        await signupForm.validationError(signupForm.emailField, SignUpValidationMessages.invalidEmail);
      })
      test('Email field - valid input', async () => {
        const validEmail = faker.internet.email();
        await signupForm.inputData(signupForm.emailField, `${validEmail}`);
        await signupForm.isCorrectInput(signupForm.emailField);
      })
    })
    test.describe('Password field validation', () => {

      test('Password field is empty', async () => {
        await signupForm.fieldIsEmpty(signupForm.passwordField);
        await signupForm.validationError(signupForm.passwordField, SignUpValidationMessages.emptyPassword)

      })
      test('Password field - wrong data input : min 8 and max 15 symbols', async () => {
        let wrongPassword = faker.internet.password({ length: 7 });
        await signupForm.inputData(signupForm.passwordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.passwordField, SignUpValidationMessages.invalidPassword)
        wrongPassword = faker.internet.password({ length: 16 });
        await signupForm.inputData(signupForm.passwordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.passwordField, SignUpValidationMessages.invalidPassword)
      })
      test('Password field - wrong data input : min 1 integer', async ({ page }) => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[A-Za-z]/
        });
        await signupForm.inputData(signupForm.passwordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.passwordField, SignUpValidationMessages.invalidPassword)
      })
      test('Password field - wrong data input : min 1 capital letter', async () => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9a-z]/
        });
        await signupForm.inputData(signupForm.passwordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.passwordField, SignUpValidationMessages.invalidPassword)
      })
      test('Password field - wrong data input : min 1 small letter', async () => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Z]/
        });
        await signupForm.inputData(signupForm.passwordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.passwordField, SignUpValidationMessages.invalidPassword)
      })
      test('Password field - correct input', async () => {
        correctPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Za-z]/
        });
        await signupForm.inputData(signupForm.passwordField, `${correctPassword}`);
        await signupForm.isCorrectInput(signupForm.passwordField);
      })
    })
    test.describe('Repeat password field validation', () => {
      test('Repeat password field is empty', async () => {
        await signupForm.fieldIsEmpty(signupForm.repeatPasswordField)
        await signupForm.validationError(signupForm.repeatPasswordField, SignUpValidationMessages.emptyRepeatPassword)
      })
      test('Repeat password - wrong data input : min 8 and max 15 symbols', async () => {
        let wrongPassword = faker.internet.password({ length: 7 });
        await signupForm.inputData(signupForm.repeatPasswordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.repeatPasswordField, SignUpValidationMessages.invalidPassword)
        wrongPassword = faker.internet.password({ length: 16 });
        await signupForm.inputData(signupForm.repeatPasswordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.repeatPasswordField, SignUpValidationMessages.invalidPassword)
      })
      test('Repeat password field - wrong data input : min 1 integer', async () => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[A-Za-z]/
        });
        await signupForm.inputData(signupForm.repeatPasswordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.repeatPasswordField, SignUpValidationMessages.invalidPassword)
      })
      test('Repeat password field - wrong data input : min 1 capital letter', async () => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9a-z]/
        });
        await signupForm.inputData(signupForm.repeatPasswordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.repeatPasswordField, SignUpValidationMessages.invalidPassword)
      })
      test('Repeat password - wrong data input : min 1 small letter', async () => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Z]/
        });
        await signupForm.inputData(signupForm.repeatPasswordField, `${wrongPassword}`);
        await signupForm.validationError(signupForm.repeatPasswordField, SignUpValidationMessages.invalidPassword)
      })
      test('Repeat password - passwords don`t match (correct input) , ', async () => {
        correctPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Za-z]/
        });
        await signupForm.inputData(signupForm.repeatPasswordField, `${correctPassword}`);
        await signupForm.validationError(signupForm.repeatPasswordField, SignUpValidationMessages.differentPasswords)
      })
    })
  })
})

