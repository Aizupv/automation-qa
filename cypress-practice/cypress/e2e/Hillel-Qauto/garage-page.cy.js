import SignInForm from '../../pom/forms/SignInForm';
import GaragePage from '../../pom/pages/GaragePage';
import MainPage from '../../pom/pages/MainPage';

describe('Garage page functionality', () => {
	beforeEach(() => {
		cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
		MainPage.visit;
		MainPage.openSignInForm;
		SignInForm.succsessfulLogin();
		//GaragePage.addCarButton.click();
	});
	context('Add car button functionality', () => {
		it('Add car button is present', () => {
			GaragePage.addCarButton.should('be.visible');
		});
		it('Add car button opens Add car form', () => {
			GaragePage.addCarButton.click();
			GaragePage.addCarForm.should('be.visible');
			GaragePage.addCarHeader.should('be.visible');
		});
	});
	context('Add/Remove cars into Garage form', () => {
		it('All form elements are visible', () => {
			GaragePage.addCarButton.click();
			GaragePage.brandField.should('be.visible');
			GaragePage.modelField.should('be.visible');
			GaragePage.mileageField.should('be.visible');
		});
		it('Add car into Garage', () => {
			GaragePage.addCar(0, 1, '1234');
		});
		it('Remove Car from Garage', () => {
			GaragePage.removeCar();
		});
	});
});
