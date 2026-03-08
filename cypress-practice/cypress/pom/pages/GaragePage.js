class GaragePage {
	get pageTitle() {
		return cy.contains('h1', 'Garage');
	}
	get addCarButton() {
		return cy.get('.btn-primary').contains('Add car');
	}
	get addButton() {
		return cy.get('.modal-footer').contains('Add');
	}
	get addCarForm() {
		return cy.get('app-add-car-modal');
	}
	get addCarHeader() {
		return cy.get('.modal-title').contains('Add a car');
	}
	get brandField() {
		return cy.get('#addCarBrand');
	}
	get modelField() {
		return cy.get('#addCarModel');
	}
	get mileageField() {
		return cy.get('#addCarMileage');
	}
	get editCarButton() {
		return cy.get('.btn-edit');
	}
	get removeCarButton() {
		return cy.get('.btn-outline-danger').contains('Remove car');
	}
	get confirmRemoveCarButton() {
		return cy.get('.btn-danger').contains('Remove');
	}
	addCar(brand, model, year) {
		this.addCarButton.click();
		this.brandField.select(brand);
		this.modelField.select(model);
		this.mileageField.type(year);
		this.addButton.click();
	}
	removeCar() {
		this.editCarButton.click();
		this.removeCarButton.click();
		this.confirmRemoveCarButton.click();
	}
}

export default new GaragePage();
