import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the Explore  page', () => {
  cy.visit('http://localhost:3000/explore');
});

When('I click on the logout button', () => {
  cy.get('.col > .login-button').click();
});

Then('I should be directed back to the Login page', () => {
  cy.contains('Login');
});
