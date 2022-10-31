Feature: View a Project
  As a logged in user I want to view a project, so I can access the rest of the platform

  Scenario: View a Project
    Given I am on the Explore  page
    When I enter click on an existing sketch
    Then I should be directed to the Collaboration board page
   


    Examples:
    | sketchName |  
    | TestUser|