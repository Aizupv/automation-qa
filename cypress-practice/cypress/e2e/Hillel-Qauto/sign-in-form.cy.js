///<reference types="cypress" />
import SignInForm from '../../pom/forms/SignInForm';
import MainPage from '../../pom/pages/MainPage';

describe('SignIn form  functionality', () => {
	beforeEach(() => {
		cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
		MainPage.visit;
		MainPage.openSignInForm;
	});
	context('SignIn form - is opened', () => {
		it('SignIn form window', () => {
			SignInForm.signInForm.should('be.visible');
		});
	});
	context('SignIn form validation', () => {
		it('SignIn form - Header', () => {
			SignInForm.headerLogin.should('have.text', 'Log in');
		});
		it('Login button isn`t active', () => {
			SignInForm.loginButton.should('be.disabled');
		});
		it('Email field is present', () => {
			SignInForm.emailField.should('be.visible');
		});
		it('Password field is present', () => {
			SignInForm.passwordField.should('be.visible');
		});
		it('Remember me checkbox is present', () => {
			SignInForm.rememberMeCheckbox.should('be.visible');
		});
		it('Remember me checkbox is checked', () => {
			SignInForm.rememberMeCheckbox.check().should('be.checked');
		});
		it('Remember me checkbox is unchecked', () => {
			SignInForm.rememberMeCheckbox.should('not.be.checked');
		});

		it('Forgot password button is present', () => {
			SignInForm.forgotPasswordButton.should('be.visible');
		});
		it('Registration button is present', () => {
			SignInForm.registrationButton.should('be.visible');
		});
	});
	context('SignUp form - fields validation', () => {
		it('Email field validation', () => {
			SignInForm.emailValidation();
		});
		it('Password field validation', () => {
			SignInForm.passwordValidation();
		});
	});
	context('Successful login validation', () => {
		it('Login with credentials', () => {
			SignInForm.succsessfulLogin();
		});
	});
});
