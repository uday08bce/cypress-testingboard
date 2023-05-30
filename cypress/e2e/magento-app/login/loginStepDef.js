const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I am on the login page', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
});

When('I log in using valid credentials', () => {
  const username = 'roni_cost@example.com';
  const password = 'roni_cost3@example.com';

  cy.intercept('GET', '**/customer/account/login/', (req) => {
    req.reply((res) => {
      res.send(`<html>
        <head></head>
        <body>
          <div class="login-page">
            <!-- Mocked login page content -->
          </div>
        </body>
      </html>`);
    });
  }).as('loginPageRequest');

  cy.intercept('POST', '**/customer/account/loginPost/', (req) => {
    const authenticationResponse = {
      redirectUrl: 'https://magento.softwaretestingboard.com/customer/account/',
      postData: `username=${username}&password=${password}`,
      additionalData: {
        userId: 123,
        email: username,
        firstName: 'Roni',
        lastName: 'Cost',
        isLoggedIn: true
      }
    };
    req.reply(authenticationResponse);
  }).as('loginRequest');

  cy.get('#email').type(username);
  cy.get('#pass').type(password);
  cy.get('#send2').click();
});

Then('I should be redirected to the account details page', () => {
  cy.wait('@loginRequest').then((interception) => {
    const { redirectUrl, postData } = interception.response.body;
    expect(postData).to.equal(`username=roni_cost@example.com&password=roni_cost3@example.com`);
    cy.visit(redirectUrl);
  });
});
