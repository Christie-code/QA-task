Feature: Use canvas to draw or text elements
  As a logged in user, I want to use canvas to draw and text elements

  Scenario: Use canvas to draw or text elements
    Given I am on the Collaboration Board page
    And I enter the sketch name "<sketchName>"
    When I should be able to add text elements to the canvas
    And i should be able to draw elements on the canvas
    Then i should be able to see the drawn elements on the canvas
   


    Examples:
    | sketchName |  
    | Project1|