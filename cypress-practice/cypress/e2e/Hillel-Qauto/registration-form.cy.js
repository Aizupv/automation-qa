import SignUpForm from '../../pom/forms/SignUpForm';
import users from '../../fixtures/users.json';
import MainPage from '../../pom/pages/MainPage';
import GaragePage from '../../pom/pages/GaragePage';

describe('Registration form functionality', () => {
	beforeEach(() => {
		cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
		MainPage.visit;
		MainPage.openSignUpForm();
	});
	context('Registration form is opened', () => {
		it('Registration form - Header', () => {
			SignUpForm.registrationForm.should('have.text', 'Registration');
		});
		it('Register button isn`t active', () => {
			SignUpForm.signUpButton.should('be.disabled');
		});
	});

	context('signupName field validation', () => {
		it('Alert - Name is required', () => {
			SignUpForm.nameField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Name required');
		});
		it('Alert - Name is invalid', () => {
			SignUpForm.nameField.focus().type('a1').blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Name is invalid');
		});
		it('Alert - Name should 2 to 20 characters long', () => {
			SignUpForm.nameField.type('a').blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Name has to be from 2 to 20 characters long');
		});
		it('Alert - Frame colour is Red', () => {
			SignUpForm.nameField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupLastName field validation', () => {
		it('Alert - Last name is required', () => {
			SignUpForm.lastNameField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Last name required');
		});
		it('Alert - Last name is invalid', () => {
			SignUpForm.lastNameField.focus().type('a1').blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Last name is invalid');
		});
		it('Alert - Last name has to be from 2 to 20 characters', () => {
			SignUpForm.lastNameField.focus().type('a').blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Last name has to be from 2 to 20 characters long');
		});
		it('Alert - Frame colour is Red', () => {
			SignUpForm.lastNameField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupEmail field validation', () => {
		it('Alert - Email required', () => {
			SignUpForm.emailField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Email required');
		});
		it('Alert - Email is incorrect', () => {
			SignUpForm.emailField.focus().type('email@mail.c').blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Email is incorrect');
		});
		it('Alert - Frame colour is Red', () => {
			SignUpForm.emailField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupPassword field validation', () => {
		it('Alert - Password required', () => {
			SignUpForm.passwordField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Password required');
		});
		it('Alert - Password has to be from 8 to 15 characters', () => {
			SignUpForm.passwordField.focus().type('passw').blur();
			SignUpForm.wrongDataMessage.should(
				'have.text',
				'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
			);
		});
		it('Alert - Frame colour is Red', () => {
			SignUpForm.passwordField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupRepeatPassword field validation', () => {
		it('Alert - Re-enter password required', () => {
			SignUpForm.repeatPasswordField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.text', 'Re-enter password required');
		});
		it('Alert - Password has to be from 8 to 15 characters', () => {
			SignUpForm.repeatPasswordField.focus().type('passw').blur();
			SignUpForm.wrongDataMessage.should(
				'have.text',
				'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
			);
		});
		it('Alert - frame colour is Red', () => {
			SignUpForm.repeatPasswordField.focus().blur();
			SignUpForm.wrongDataMessage.should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('Registration process', () => {
		let email = `testUser${Date.now()}@mail.com`;
		it('Successful registration', () => {
			SignUpForm.signUp(
				users.userForRegistration.name,
				users.userForRegistration.lastName,
				email,
				users.userForRegistration.password,
			);
			SignUpForm.confirmRegistration();
			GaragePage.pageTitle.should('have.text', 'Garage');
		});
		it('Unsuccessful registration - user already exists', () => {
			let emailExists = 'testUser@mail.com';
			SignUpForm.signUp(
				users.userForRegistration.name,
				users.userForRegistration.lastName,
				emailExists,
				users.userForRegistration.password,
			);
			SignUpForm.confirmRegistration();
			SignUpForm.alreadyExistsMessage.should('have.text', 'User already exists');
		});
	});
});
