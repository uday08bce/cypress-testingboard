Feature: magento app regression

    Testing of magento app

    Scenario: Login of the application
    Given I am on the login page
    When  I log in using valid credentials
    Then I should be redirected to the account details page