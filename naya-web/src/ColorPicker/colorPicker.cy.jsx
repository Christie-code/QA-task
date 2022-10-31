import ButtonColorPicker from './colorPicker'
import chaiColors from 'chai-colors'
chai.use(chaiColors);

describe('<ButtonColorPicker>', () => {
  it('Verify color picker is available', () => {
    cy.mount(<ButtonColorPicker />)
  })

  const colorSelector = '[cp-test-id=colorPickerButton]'
  const colorPickerDisplayedSelector = '[class=chrome-picker]'
  const colorPickerInputSelector = '[id=rc-editable-input-2]'
  it('Color picker should default to grey', () => {
    // Arrange
    cy.mount(<ButtonColorPicker />)
    // Assert
    cy.get(colorSelector)
        .should('have.css', 'color')
        .and('be.colored', '#808080')
  })

  it('Color picker button display color picker', () => {
    // Arrange
    cy.mount(<ButtonColorPicker />)
    // Act
    cy.get(colorSelector).click()
    // Assert
    expect(colorPickerDisplayedSelector).to.not.be.null
    cy.get('[style="position: fixed; inset: 0px;"]').click();
  })

  it('Color picker button display color picker and picks color', () => {
    //stub the color picker button callback
    const callback = cy.spy().as('callback')

    // Arrange
    cy.mount(<ButtonColorPicker handleColorfromParent={callback}/>)
    // Act
    cy.get(colorSelector).click()
    cy.get(colorPickerInputSelector)
        .clear("")
        .type("#000000")
    cy.get('[style="position: fixed; inset: 0px;"]').click();

    // Assert
    cy.get(colorSelector)
        .should('have.css', 'background', 'rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')

    cy.get('@callback').should('have.been.calledWith', '#000000')
//             .should('have.css', 'background')
//             .and('be.colored', '#000000')

  })


})

