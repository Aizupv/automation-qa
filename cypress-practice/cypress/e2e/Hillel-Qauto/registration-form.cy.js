describe('Registration form functionality', () => {
	let email;
	beforeEach(() => {
		cy.wrap(email).as('userEmail');
		cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
		cy.visit('/');
		cy.get('.btn-primary').contains('Sign up').click();
	});
	context('Registration form is opened', () => {
		it('Registration form - Header', () => {
			cy.get('.modal-content .modal-title').should('have.text', 'Registration');
		});
		it('Register button isn`t active', () => {
			cy.get('.modal-footer .btn-primary').contains('Register').should('be.disabled');
		});
	});
	context('Registration process', () => {
		let email = `testUser${Date.now()}@mail.com`;
		it('Successful registration', () => {
			cy.get('#signupName').type('testUserName');
			cy.get('#signupLastName').type('testUserLastName');
			cy.get('#signupEmail').type(email);
			cy.get('#signupPassword').type('testPassword1');
			cy.get('#signupRepeatPassword').type('testPassword1');
			cy.get('.btn-primary').contains('Register').click();
			cy.get('h1').should('have.text', 'Garage');
		});
		it('Unsuccessful registration - user already exists', () => {
			cy.get('#signupName').type('testUserName');
			cy.get('#signupLastName').type('testUserLastName');
			cy.get('#signupEmail').type(email);
			cy.get('#signupPassword').type('testPassword1');
			cy.get('#signupRepeatPassword').type('testPassword1');
			cy.get('.btn-primary').contains('Register').click();
			cy.get('.alert-danger').should('have.text', 'User already exists');
		});
	});

	context('signupName field validation', () => {
		it('Alert - Name is required', () => {
			cy.get('#signupName').focus().blur();
			cy.get('.invalid-feedback').should('have.text', 'Name is required');
		});
		it('Alert - Name is invalid', () => {
			cy.get('#signupName').focus().type('a1').blur();
			cy.get('.invalid-feedback').should('have.text', 'Name is invalid');
		});
		it('Alert - Name should 2 to 20 characters long', () => {
			cy.get('#signupName').type('a').blur();
			cy.get('.invalid-feedback').should('have.text', 'Name has to be from 2 to 20 characters long');
		});
		it('Alert - Frame colour is Red', () => {
			cy.get('#signupName').focus().blur();
			cy.get('.invalid-feedback').should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupLastName field validation', () => {
		it('Alert - Last name is required', () => {
			cy.get('#signupLastName').focus().blur();
			cy.get('.invalid-feedback').should('have.text', 'Last name is required');
		});
		it('Alert - Last name is invalid', () => {
			cy.get('#signupLastName').focus().type('a1').blur();
			cy.get('.invalid-feedback').should('have.text', 'Last name is invalid');
		});
		it('Alert - Last name has to be from 2 to 20 characters', () => {
			cy.get('#signupLastName').focus().type('a').blur();
			cy.get('.invalid-feedback').should('have.text', 'Last name has to be from 2 to 20 characters long');
		});
		it('Alert - Frame colour is Red', () => {
			cy.get('#signupLastName').focus().blur();
			cy.get('.invalid-feedback').should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupEmail field validation', () => {
		it('Alert - Email required', () => {
			cy.get('#signupEmail').focus().blur();
			cy.get('.invalid-feedback').should('have.text', 'Email required');
		});
		it('Alert - Email is incorrect', () => {
			cy.get('#signupEmail').focus().type('email@mail.c').blur();
			cy.get('.invalid-feedback').should('have.text', 'Email is incorrect');
		});
		it('Alert - Frame colour is Red', () => {
			cy.get('#signupEmail').focus().blur();
			cy.get('.invalid-feedback').should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupPassword field validation', () => {
		it('Alert - Password required', () => {
			cy.get('#signupPassword').focus().blur();
			cy.get('.invalid-feedback').should('have.text', 'Password required');
		});
		it('Alert - Password has to be from 8 to 15 characters', () => {
			cy.get('#signupPassword').focus().type('passw').blur();
			cy.get('.invalid-feedback').should(
				'have.text',
				'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
			);
		});
		it('Alert - Frame colour is Red', () => {
			cy.get('#signupPassword').focus().blur();
			cy.get('.invalid-feedback').should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
	context('signupRepeatPassword field validation', () => {
		it('Alert - Re-enter password required', () => {
			cy.get('#signupRepeatPassword').focus().blur();
			cy.get('.invalid-feedback').should('have.text', 'Re-enter password required');
		});
		it('Alert - Password has to be from 8 to 15 characters', () => {
			cy.get('#signupRepeatPassword').focus().type('passw').blur();
			cy.get('.invalid-feedback').should(
				'have.text',
				'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
			);
		});
		it('Alert - frame colour is Red', () => {
			cy.get('#signupRepeatPassword').focus().blur();
			cy.get('.invalid-feedback').should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
});
