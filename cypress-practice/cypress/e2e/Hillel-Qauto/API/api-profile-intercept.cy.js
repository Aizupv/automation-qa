import users from '../../../fixtures/users.json';

it('should change user name to Polar Bear using intercept', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth/signin',
        body: {
            "email": users.userforLogin.email,
            "password": users.userforLogin.password,
            "remember": false
        }
    });
    cy.intercept('GET', '**/api/users/profile', (req) => {
        req.reply((res) => {
            res.body.data.name = 'Polar';
            res.body.data.lastName = 'Bear';
        });
    }).as('getProfile');
    cy.visit('/panel/profile');
    cy.wait('@getProfile');
});
