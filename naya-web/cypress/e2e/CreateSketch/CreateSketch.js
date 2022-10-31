import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the Explore  page', () => {
  cy.visit('http://localhost:3000/explore');

});

Given('I enter click on create a new sketch', () => {
  cy.get('[cp-test-id="createNewSketch"]').click();
});

When('I enter  the sketch name {string}', (sketchName) => {
  cy.get('[placeholder="Sketch Name"]').type(sketchName);
});

When('I click on the save button', () => {
  cy.get(':nth-child(3) > :nth-child(2) > .btn').click();
});

Then('I should be returned to the explore page', () => {
  cy.get('.col > .login-button').should('have.text', 'Logout');
});

Then('the newly created sketch project name {string} should be displayed', (sketchName) => {
  cy.contains(sketchName)
});
