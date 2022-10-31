Feature: Create a Project
  As a logged in user I want to create a project, so I can text/draw elements on the canvas

  Scenario: Create a Project
    Given I am on the Explore  page
    And I enter click on create a new sketch
    When I enter  the sketch name "<sketchName>"
    And I click on the save button
    Then I should be returned to the explore page
    And the newly created sketch project name "<sketchName>" should be displayed


    Examples:
    | sketchName |  
    | TestUser|