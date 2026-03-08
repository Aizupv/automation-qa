class SignUpForm {
	get registrationForm() {
		return cy.get('.modal-content .modal-title');
	}
	get signUpButton() {
		return cy.get('.modal-footer .btn-primary').contains('Register');
	}
	get nameField() {
		return cy.get('#signupName');
	}
	get lastNameField() {
		return cy.get('#signupLastName');
	}
	get emailField() {
		return cy.get('#signupEmail');
	}
	get passwordField() {
		return cy.get('#signupPassword');
	}
	get repeatPasswordField() {
		return cy.get('#signupRepeatPassword');
	}
	get wrongDataMessage() {
		return cy.get('.invalid-feedback');
	}
	get alreadyExistsMessage() {
		return cy.get('.alert-danger');
	}
	signUp(name, surname, email, password) {
		this.nameField.type(name);
		this.lastNameField.type(surname);
		this.emailField.type(email);
		this.passwordField.type(password);
		this.repeatPasswordField.type(password);
	}
	confirmRegistration() {
		this.signUpButton.click();
	}
}

export default new SignUpForm();
