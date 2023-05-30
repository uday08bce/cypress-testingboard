

const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
const Homepage = require("../../pageObjects/HomePage");

Given('I am on the homepage', () => {
  Homepage.visitHomepage();
  });
  
Then('I should see all the expected elements', () => {
  Homepage.verifyExpectedElements();
  });
  
  // Intercept and Stub the server response
// before(() => {

//   cy.intercept('GET', 'https://magento.softwaretestingboard.com/pub/static/version1678540400/frontend/Magento/luma/en_US/Magento_Ui/templates/tooltip/tooltip.html', (req) => {
//     req.reply({
//       statusCode: 200,
//       body: {
//         // Mock data for the homepage
//         elements: [
//           {
//             id: 1,
//             name: 'Element 1',
//           },
//           {
//             id: 2,
//             name: 'Element 2',
//           },
//           {
//             id: 3,
//             name: 'Element 3',
//           },
//           {
//             id: 4,
//             name: 'Element 4',
//           },
//           {
//             id: 5,
//             name: 'Element 5',
//           },
//           // Add more elements as needed
//         ],
//       },
//     });
//   }).as('homepage');
//   cy.wait('@homepage', { timeout: 10000 });
// });