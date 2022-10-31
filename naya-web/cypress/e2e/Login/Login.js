import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Login page', () => {
  cy.visit(Cypress.env("login"))
});

When('I enter {string} , {string} and {string}', (username, password, color) => {
  cy.get('[placeholder=Username]').type(username);
  cy.get('[placeholder=Password]').type(password);
  cy.get('[cp-test-id=colorPickerButton]').click();
  cy.get('#rc-editable-input-2').clear('').type(color);
  cy.get('[style="position: fixed; inset: 0px;"]').click();
});

When('I click on the login button', () => {
  cy.get('.login-button').click();
});

Then('I should be on the sketch dashboard page', () => {
  cy.get('.col > .login-button').should('have.text', 'Logout');
});
