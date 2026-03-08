class MainPage {
	get SignUpButton() {
		return cy.get('.btn-primary').contains('Sign up');
	}
	get SignInButton() {
		return cy.get('.btn-outline-white').contains('Sign In');
	}
	get visit() {
		cy.visit('/');
	}
	openSignUpForm() {
		this.SignUpButton.click();
	}
	get openSignInForm() {
		this.SignInButton.click();
	}
}
export default new MainPage();
