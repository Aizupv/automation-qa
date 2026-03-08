class FuelExpensesPage {
	get fuelExpensesPage() {
		return cy.get('.sidebar-wrapper a[href="/panel/expenses"]').click();
	}
	get pageTitle() {
		return cy.get('h1').contains('Fuel expenses');
	}
	get emptyPageNoCars() {
		return cy.get('.panel-empty').contains('.h3', 'You don’t have any cars in');
	}
	get emptyPageWithCars() {
		return cy.get('.panel-empty').contains('.h3', 'You don’t have any fuel expenses filed in');
	}
	get carSelectDropdown() {
		return cy.get('#carSelectDropdown');
	}
	get garageLink() {
		return cy.get('.sidebar-wrapper a[href="/panel/garage"]');
	}
	get addExpenseButton() {
		return cy.get('.btn-primary').contains('Add an expense');
	}
}

export default new FuelExpensesPage();
