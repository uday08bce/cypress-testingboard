Feature: magento app regression

    Testing of magento app

    Scenario: search for a product
    Given I am on the homepage
    When I search for a product using the search bar
    Then I should see the search results displayed correctly