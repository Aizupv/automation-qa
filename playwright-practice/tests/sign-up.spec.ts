import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


test.describe('Sign up form', () => {
  let correctPassword;
  test.beforeEach(async ({ page }) => {

    await page.goto('/');
    await page.getByRole('button', { name: 'Sign up' }).click();
  })
  test.describe('Sign Up form  - valid input', () => {
    test('All fields - valid input', async ({ page }) => {
      const validName = faker.person.firstName();
      const validLastName = faker.person.lastName();
      const validEmail = faker.internet.email();
      correctPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Za-z]/
        });
      await page.locator('#signupName').fill(`${validName}`);
      await page.locator('#signupLastName').fill(`${validLastName}`);
      await page.locator('#signupEmail').fill(`${validEmail}`);
      await page.locator('#signupPassword').fill(`${correctPassword}`);
      await page.locator('#signupRepeatPassword').fill(`${correctPassword}`);
      await page.locator('#signupRepeatPassword').blur();
      await expect(page.locator('#signupName.ng-valid')).toBeVisible();
      await expect(page.locator('#signupLastName.ng-valid')).toBeVisible();
      await expect(page.locator('#signupEmail.ng-valid')).toBeVisible();
      await expect(page.locator('#signupPassword.ng-valid')).toBeVisible();
      await expect(page.getByRole('button', { name: 'Register' })).toBeEnabled();
    })
  })
  test.describe('Name field validation', () => {

    test('Name field is empty', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').blur();
      await expect(page.locator('div.invalid-feedback p')).toHaveText('Name is required');
      await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
    test('Name field - wrong data input', async ({ page }) => {
      await page.locator('#signupName').fill(' 1Name');
      await page.locator('#signupName').blur();
      await expect(await page.locator('div.invalid-feedback p')).toHaveText('Name is invalid');
      await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
    test('Name field - wrong length', async ({ page }) => {
      await page.locator('#signupName').fill('N');
      await page.locator('#signupName').blur();
      await expect(await page.locator('div.invalid-feedback p')).toHaveText('Name has to be from 2 to 20 characters long');
      await page.locator('#signupName').fill('Namenamenamenamenamenamennname');
      await page.locator('#signupName').blur();
      await expect(await page.locator('div.invalid-feedback p')).toHaveText('Name has to be from 2 to 20 characters long');
      await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    })
    test('Name field - valid input', async ({ page }) => {
      const validName = faker.person.firstName();
      await page.locator('#signupName').fill(`${validName}`);
      await page.locator('#signupName').blur();
      await expect(page.locator('#signupName.ng-valid')).toBeVisible();
    })
    test.describe('Last Name field validation', () => {
      test('Last Name field is empty', async ({ page }) => {
        await page.locator('#signupLastName').focus();
        await page.locator('#signupLastName').blur();
        await expect(page.locator('div.invalid-feedback p')).toHaveText('Last name is required');
        await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Last name field - wrong data input', async ({ page }) => {
        await page.locator('#signupLastName').fill(' 1Name');
        await page.locator('#signupLastName').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText('Last name is invalid');
        await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Last name field - wrong length', async ({ page }) => {
        await page.locator('#signupLastName').fill('N');
        await page.locator('#signupLastName').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText('Last name has to be from 2 to 20 characters long');
        await page.locator('#signupLastName').fill('Namenamenamenamenamenamennname');
        await page.locator('#signupLastName').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Last name field - valid input', async ({ page }) => {
        const validLastName = faker.person.lastName();
        await page.locator('#signupLastName').fill(`${validLastName}`);
        await page.locator('#signupLastName').blur();
        await expect(page.locator('#signupLastName.ng-valid')).toBeVisible();
      })

    })
    test.describe('Email field validation', () => {
      test('Email field is empty', async ({ page }) => {
        await page.locator('#signupEmail').focus();
        await page.locator('#signupEmail').blur();
        await expect(page.locator('div.invalid-feedback p')).toHaveText('Email required');
        await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Email field - invalid data input', async ({ page }) => {
        const invalidEmail = await page.locator('#signupEmail').fill(faker.internet.email({ firstName: 'aqa' }));
        await page.locator('#signupEmail').fill(`${invalidEmail}`);
        await page.locator('#signupEmail').blur();
        await expect(page.locator('div.invalid-feedback p')).toHaveText('Email is incorrect');
        await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Email field - valid input', async ({ page }) => {
        const validEmail = faker.internet.email();
        await page.locator('#signupEmail').fill(`${validEmail}`);
        await page.locator('#signupEmail').blur();
        await expect(page.locator('#signupEmail.ng-valid')).toBeVisible();
      })
    })
    test.describe('Password field validation', () => {
      const errorMessage = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
      test('Password field is empty', async ({ page }) => {
        await page.locator('#signupPassword').focus();
        await page.locator('#signupPassword').blur();
        await expect(page.locator('div.invalid-feedback p')).toHaveText('Password required');
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Password field - wrong data input : min 8 and max 15 symbols', async ({ page }) => {
        let wrongPassword = faker.internet.password({ length: 7 });
        await page.locator('#signupPassword').fill(`${wrongPassword}`);
        await page.locator('#signupPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        wrongPassword = faker.internet.password({ length: 16 });
        await page.locator('#signupPassword').fill(`${wrongPassword}`);
        await page.locator('#signupPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Password field - wrong data input : min 1 integer', async ({ page }) => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[A-Za-z]/
        });
        await page.locator('#signupPassword').fill(`${wrongPassword}`);
        await page.locator('#signupPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Password field - wrong data input : min 1 capital letter', async ({ page }) => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9a-z]/
        });
        await page.locator('#signupPassword').fill(`${wrongPassword}`);
        await page.locator('#signupPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Password field - wrong data input : min 1 small letter', async ({ page }) => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Z]/
        });
        await page.locator('#signupPassword').fill(`${wrongPassword}`);
        await page.locator('#signupPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Password field - correct innput', async ({ page }) => {
        correctPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Za-z]/
        });
        await page.locator('#signupPassword').fill(`${correctPassword}`);
        await page.locator('#signupPassword').blur();
        await expect(page.locator('#signupPassword.ng-valid')).toBeVisible();
      })
    })
    test.describe('Repeat password field validation', () => {
      const errorMessage = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
      test('Repeat password field is empty', async ({ page }) => {
        await page.locator('#signupRepeatPassword').focus();
        await page.locator('#signupRepeatPassword').blur();
        await expect(page.locator('div.invalid-feedback p')).toHaveText('Re-enter password required');
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Repeat password - wrong data input : min 8 and max 15 symbols', async ({ page }) => {
        let wrongPassword = faker.internet.password({ length: 7 });
        await page.locator('#signupRepeatPassword').fill(`${wrongPassword}`);
        await page.locator('#signupRepeatPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        wrongPassword = faker.internet.password({ length: 16 });
        await page.locator('#signupRepeatPassword').fill(`${wrongPassword}`);
        await page.locator('#signupRepeatPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Repeat password field - wrong data input : min 1 integer', async ({ page }) => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[A-Za-z]/
        });
        await page.locator('#signupRepeatPassword').fill(`${wrongPassword}`);
        await page.locator('#signupRepeatPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Repeat password field - wrong data input : min 1 capital letter', async ({ page }) => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9a-z]/
        });
        await page.locator('#signupRepeatPassword').fill(`${wrongPassword}`);
        await page.locator('#signupRepeatPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Repeat password - wrong data input : min 1 small letter', async ({ page }) => {
        const wrongPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Z]/
        });
        await page.locator('#signupRepeatPassword').fill(`${wrongPassword}`);
        await page.locator('#signupRepeatPassword').blur();
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(await page.locator('div.invalid-feedback p')).toHaveText(`${errorMessage}`);
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
      test('Repeat password - passwords don`t match (correct input) , ', async ({ page }) => {
        correctPassword = faker.internet.password({
          length: 12,
          pattern: /[0-9A-Za-z]/
        });
        await page.locator('#signupRepeatPassword').fill(`${correctPassword}`);
        await page.locator('#signupRepeatPassword').blur();
        await expect(page.locator('div.invalid-feedback p')).toHaveText('Passwords do not match');
        await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
      })
    })
  })
})

