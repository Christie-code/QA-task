

describe('Naya Tests', () => {
  it('Login User', () => {
    cy.visit('http://localhost:3000/')

  
    cy.get('[placeholder=Username]').type('christiana');
    cy.get('[placeholder=Password]').type('password');
    cy.get('[cp-test-id=colorPickerButton]').click();
    cy.get('#rc-editable-input-2').clear('').type('#00000');
    cy.get('[style="position: fixed; inset: 0px;"]').click();
    cy.get('.login-button').click();
    cy.get('.col > .login-button').should('have.text', 'Logout');
  })


  it('Create and verify a project', function() {
    var projectName = "Test5";
    cy.visit('http://localhost:3000/explore');
    cy.get('[cp-test-id=createNewSketch]').click();
    cy.get('[placeholder=Sketch Name]').type(projectName);
    cy.get('[cp-test-id=saveButton]').click();
    cy.contains(projectName)
    // cy.get('.col-sm-6 > div').should('have.text', projectName);
  });


  it('View a project', function() {
    cy.visit('http://localhost:3000/explore');
    cy.get(':nth-child(1) > .card > .row > .col-sm-6 > .login-button').click();
    cy.get('center').should('have.text', 'Collaboration Board');
  });


  it('Use canvas to draw elements', function() {
    cy.visit('http://localhost:3000/sketch');
    cy.get('[placeholder="Sketch Name"]').type(projectName);
    cy.get('[label="Text"]').type('Hello World');
    cy.get('[color="primary"]').click();

    cy.get('select').select('rectangle');
    cy.get('.upper-canvas').click();
    cy.get('select').select('circle');
    cy.get('.upper-canvas').click();
  });

  it('Logout User', function() {
    cy.visit('http://localhost:3000/explore');
    cy.get('.col > .login-button').click();
    cy.contains('Login');
  });


})


// describe('My First Test', () => {
//   // it('Visits the Kitchen Sink', () => {
//   //   cy.visit('https://example.cypress.io')
//   // })
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it and verify
//     // that the value has been updated
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get('#password1').clear('p');
//     cy.get('#password1').type('password');
//     cy.get('#couponCode1').clear('12');
//     cy.get('#couponCode1').type('123456');
//     cy.get('.action-form > .btn').click();
//     cy.get('.well > p').should('have.text', 'Your form has been submitted!');
//     cy.get('.well > .btn-danger').click();
//     cy.get('.popover-content').should('have.text', 'This popover shows up on click');
//     cy.get('#action-canvas').click();
//     cy.get('#action-canvas').click();
//     cy.get('#action-canvas').click();
//     cy.get('#action-canvas').click();
//     cy.get('#action-canvas').click();
//     /* ==== End Cypress Studio ==== */
//   })
// })