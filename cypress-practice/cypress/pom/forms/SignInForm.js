import users from '../../fixtures/users.json';

class SignInForm {
	get headerLogin() {
		return cy.get('.modal-title').contains('Log in');
	}
	get headerGarage() {
		return cy.get('h1').contains('Garage');
	}
	get loginButton() {
		return cy.get('.btn-primary').contains('Login');
	}
	get signInForm() {
		return cy.get('app-signin-modal');
	}
	get emailField() {
		return cy.get('#signinEmail');
	}
	get passwordField() {
		return cy.get('#signinPassword');
	}
	get rememberMeCheckbox() {
		return cy.get('input#remember');
	}
	get forgotPasswordButton() {
		return cy.get('.btn-link').contains('Forgot password');
	}
	get registrationButton() {
		return cy.get('.btn-link').contains('Registration');
	}
	get wrongDataMessage() {
		return cy.get('.invalid-feedback');
	}
	emailValidation() {
		this.emailField.focus().blur().should('have.class', 'is-invalid');
		this.emailField.focus().type('dfssssa@kfa.').should('have.class', 'is-invalid');
		this.emailField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
		this.loginButton.should('be.disabled');
	}
	passwordValidation() {
		this.passwordField.focus().blur().should('have.class', 'is-invalid');
		this.passwordField.should('have.class', 'is-invalid');
		this.passwordField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
		this.loginButton.should('be.disabled');
	}
	succsessfulLogin() {
		this.emailField.focus().type(users.userforLogin.email);
		this.passwordField.type(users.userforLogin.password);
		this.loginButton.click();
		this.headerGarage.should('be.visible');
	}
}
export default new SignInForm();
