import {Locator, Page} from "@playwright/test" ; 

class HomePage {
    private readonly page : Page;
    public readonly signinButton : Locator;
    public readonly signupButton : Locator;


    constructor (page : Page) {
        this.page = page;
        this.signinButton = this.page.locator('.header_signin');
        this.signupButton = this.page.getByRole('button', { name: 'Sign up' });
    }
}

export default HomePage