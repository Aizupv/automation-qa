import { th } from "@faker-js/faker";
import { Locator, Page, expect } from "@playwright/test";


class SignupForm {
    private readonly page: Page;
    public readonly nameField: Locator;
    public readonly lastNameField: Locator;
    public readonly emailField: Locator;
    public readonly passwordField: Locator;
    public readonly repeatPasswordField: Locator;
    public readonly registerButton: Locator;
    public readonly invalidFeedback: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = this.page.locator('#signupName');
        this.lastNameField = this.page.locator('#signupLastName');
        this.emailField = this.page.locator('#signupEmail');
        this.passwordField = this.page.locator('#signupPassword');
        this.repeatPasswordField = this.page.locator('#signupRepeatPassword');
        this.registerButton = this.page.getByRole('button', { name: 'Register' });
        this.invalidFeedback = this.page.locator('div.invalid-feedback p');

    }
    async signup(name: string, lastname: string, email: string, password: string) {
        await this.nameField.fill(name);
        await this.lastNameField.fill(lastname);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.repeatPasswordField.fill(password);
        await this.repeatPasswordField.blur();


    }
    async verifySignupFormIsValid() {
        await expect(this.page.locator('#signupName')).toHaveClass(/ng-valid/);
        await expect(this.page.locator('#signupLastName')).toHaveClass(/ng-valid/);
        await expect(this.page.locator('#signupEmail')).toHaveClass(/ng-valid/);
        await expect(this.page.locator('#signupPassword')).toHaveClass(/ng-valid/);
        await expect(this.page.locator('#signupRepeatPassword')).toHaveClass(/ng-valid/);
        await expect(this.registerButton).toBeEnabled()
    }
    async fieldIsEmpty(field: Locator) {
        await field.waitFor({ state: 'visible' });
        await field.focus();
        await field.blur();
    }
    async validationError(field: Locator, text: string) {
        await expect(this.invalidFeedback).toHaveText(text);
        await expect(field).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }
    async inputData(field: Locator, text: string) {
        await field.fill(text);
        await field.blur();
    }
    async isCorrectInput (field : Locator){
         await expect (field).toHaveClass(/ng-valid/);
    }

}

export default SignupForm;