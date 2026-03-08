import FuelExpensesForm from '../../pom/forms/FuelExpensesForm';
import SignInForm from '../../pom/forms/SignInForm';
import ExpensesPage from '../../pom/pages/ExpensesPage';
import GaragePage from '../../pom/pages/GaragePage';
import MainPage from '../../pom/pages/MainPage';
describe('Garage page functionality', () => {
	beforeEach(() => {
		cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
		MainPage.visit;
		MainPage.openSignInForm;
		SignInForm.succsessfulLogin();
	});
	context('Expenses page functionnality without cars in Garage', () => {
		beforeEach(() => {
			ExpensesPage.fuelExpensesPage;
		});
		it('Open expenses page', () => {
			ExpensesPage.fuelExpensesPage.should('be.visible');
			ExpensesPage.pageTitle.should('be.visible');
		});
		it('Expenses form without elements in Garage page', () => {
			ExpensesPage.emptyPageNoCars.should('be.visible');
			ExpensesPage.garageLink.should('be.visible');
		});
	});
	context('Expenses page functionality with added cars in Garage', () => {
		it('Add car into Garage and check Expenses page', () => {
			ExpensesPage.garageLink;
			GaragePage.addCar(2, 0, '250');
		});
		it('Check Expenses page with added card to Garage', () => {
			ExpensesPage.fuelExpensesPage;
			ExpensesPage.emptyPageWithCars.should('be.visible');
			ExpensesPage.pageTitle.should('be.visible');
		});
		it('Add first expense for car and validate', () => {
			ExpensesPage.fuelExpensesPage;
			ExpensesPage.addExpenseButton.click();
			FuelExpensesForm.formTitle.should('be.visible');
			FuelExpensesForm.addingExpenses('251', '1299', '99999');
			FuelExpensesForm.expensesTable.should('be.visible');
		});
	});
});
after('Clear all cars and expenses', () => {
	ExpensesPage.garageLink.click();
	GaragePage.removeCar();
});
