Feature: Login user
  As a visitor I want to sign in, so I can access the rest of the platform

  Scenario: Successful login attempt
    Given I am on the Login page
    When I enter "<username>" , "<password>" and "<color>"
    And I click on the login button
    Then I should be on the sketch dashboard page

    Examples:
    | username | password | color |
    | qaUser| password | #000000 |