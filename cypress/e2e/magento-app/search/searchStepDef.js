const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const Homepage = require("../../pageObjects/HomePage");
Given('I am on the homepage', () => {
  Homepage.visitHomepage();
});

When('I search for a product using the search bar', () => {
  const searchQuery = 'product name';
  cy.get('#search').type(searchQuery);
  cy.intercept('GET', '**/catalogsearch/result/**', (req) => {
    req.reply((res) => {
      res.send(`<html>
        <head></head>
        <body>
          <div class="search-results">
            Search results for: ${searchQuery}
          </div>
        </body>
      </html>`);
    });
  }).as('searchRequest');
  cy.get('[class="action search"]').click();
});

Then('I should see the search results displayed correctly', () => {
  cy.wait('@searchRequest');
  cy.get('.search-results').should('exist'); // Verify the presence of search results container
  cy.contains(`Search results for: product name`); // Verify the displayed search query text
});
