# cypress-testingboard

This test suite contains automated tests for the Magento application using Cypress.

## Project Structure

The project has the following structure:
cypress-testingboard/
|-- e2e/
    |-- magento-app/
        |-- homepage/
        |-- homepage.feature
            |-- homepageStepDef.js
        |-- search/
        |-- search.feature
            |-- searchStepDef.js
        |-- login/
        |-- login.feature
            |-- loginStepDef.js
        |-- pageObjects/
            |-- Homepage.js
|-- cypress.config.js
|-- README.md


- `e2e/magento-app/`: The root directory for Cypress tests.
- `e2e/magento-app/homepage/`: Contains the feature file `homepage.feature` and its corresponding step definition file `homepageStepDef.js`.
- `e2e/magento-app/search/`: Contains the feature file `search.feature` and its corresponding step definition file `searchStepDef.js`.
- `e2e/magento-app/login/`: Contains the feature file `login.feature` and its corresponding step definition file `loginStepDef.js`.
- `e2e/magento-app/pageObjects/`: Contains the Page Object file `Homepage.js` representing the homepage elements and actions.
- `cypress.config.js`: The Cypress configuration file.
- `README.md`: This README file.

## Running Tests

To run the tests, open a terminal and navigate to the root directory of the project (`cypress-testingboard/`). Use the following command:

```shell
npx cypress run

This will execute all the feature files headlessly in the default browser (Chrome). The test execution will be logged in the terminal.

To run the tests in the Cypress Test Runner for interactive debugging, use the following command:

```shell
npx cypress open
