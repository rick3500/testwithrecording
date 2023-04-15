Feature: Login Screen

  Scenario: Successful login
    Given I am on the login screen
    When I start screen recording
    And I enter a valid username and password
    And I press the login button
    Then I should see the home screen
    And I stop screen recording