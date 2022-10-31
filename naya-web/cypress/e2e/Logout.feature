Feature: Logout User
  As a logged in user, I want to log out of the application

  Scenario: Logout user
    Given I am on the Explore  page
    When I click on the logout button 
    Then I should be directed back to the Login page
   


    Examples:
    | sketchName |  
    | TestUser|