Feature: User can add a new address as a Logged in user

Scenario: User can add a new address
    Given I am on the login page
    And I accept cookies on the login page
    When I log in with a valid user:
      | email               | password          |
      | testuser@gmail.com | Test@12345 |
    And I click on profile
    And I click on addresses
    And I click on Add new address
    And I click on gender title
    And I enter the following details
      | firstName | lastName | streetAddress  | city      | state         | zipCode |
      | Naresh    | Khunt    | Vloedanker 197 | Werkendam | Noord-Brabant | 4251 DS |
    And I select the country
    And I select the delivery and billing address
    And I click on new address button
    Then I should see street address  as "Vloedanker 197" of the new address
      
    