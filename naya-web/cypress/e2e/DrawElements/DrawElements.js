import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import compareSnapshotCommand from 'cypress-image-diff-js/dist/command';
compareSnapshotCommand();

Given('I am on the Collaboration Board page', () => {
  cy.visit('http://localhost:3000/sketch');
});

Given('I enter the sketch name {string}', (sketchName) => {
  cy.get('[placeholder="Sketch Name"]').type(sketchName);
});

When('I should be able to add text elements to the canvas', () => {
  cy.get('[label="Text"]').type('Hello World');
  cy.get('[color="primary"]').click();
});

When('i should be able to draw elements on the canvas', () => {
  cy.get('select').select('rectangle');
  cy.get('.upper-canvas')
    .trigger('mousedown', 200, 200)
    .trigger('mousemove',20,20)
    .trigger('mouseup');
});

Then('i should be able to see the drawn elements on the canvas', () => {
  cy.get('.upper-canvas').compareSnapshot('Sketches', 0.2);
});




