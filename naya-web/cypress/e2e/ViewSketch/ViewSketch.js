import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the Explore  page', () => {
  cy.visit('http://localhost:3000/explore');
});

When('I enter click on an existing sketch', () => {
  //Added a wait time because the sketches load slowly
  cy.wait(10000)
  cy.get(':nth-child(1) > .card > .row > .col-sm-6 > .login-button').click();
});

Then('I should be directed to the Collaboration board page', () => {
  cy.get('center').should('have.text', 'Collaboration Board');
});
