class FuelExpensesForm {
	get formTitle() {
		return cy.get('.modal-title').contains('Add an expense');
	}
	get addExpenseMileageInput() {
		return cy.get('#addExpenseMileage');
	}
	get addExpenseLitersInput() {
		return cy.get('#addExpenseLiters');
	}
	get addExpenseTotalCostInput() {
		return cy.get('#addExpenseTotalCost');
	}
	get addButton() {
		return cy.get('.modal-footer .btn-primary').contains('Add');
	}
	get expensesTable() {
		return cy.get('.expenses_table');
	}
	addingExpenses(mileage, liters, cost) {
		this.addExpenseMileageInput.type(mileage);
		this.addExpenseLitersInput.type(liters);
		this.addExpenseTotalCostInput.type(cost);
		this.addButton.click();
	}
}

export default new FuelExpensesForm();
