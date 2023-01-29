Feature: Login Feature

  Scenario Outline: Error validation with empty email and password
    Given I am on the login page
    And I accept cookies on the login page
    When I click on login button
    And I click on <input> field on login page
    And I click on submit button
    Then I should see the error <message> for <input>

    Examples:
      | input    | message         |
      | email    | Vul het veld in |
      | password | Vul het veld in |

  Scenario Outline: Error validation with wrong email and password
    Given I am on the login page
    And I accept cookies on the login page
    When I click on login button
    And I enter wrong <inputValue> in <field> on login page
    And I click on submit button
    Then I should see the error <message> for <field>

    Examples:
      | field    | inputValue | message                                            |
      | email    | wrongInput | Sorry, dit is geen geldig e-mailadres              |
      | password | pass       | Je wachtwoord moet tussen 5 en 20 tekens lang zijn |

  Scenario: Login with a valid user
    Given I am on the login page
    And I accept cookies on the login page
    When I log in with a valid user:
      | email              | password   |
      | testuser@gmail.com | Test@12345 |
# Then I should see a welcome message about my account
