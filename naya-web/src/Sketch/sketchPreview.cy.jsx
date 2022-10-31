import SketchPreview from './sketchPreview'

describe('<SketchPreview>', () => {
  it('Verify sketch preview is available', () => {
    var base64 = "";
        var sketchName = "Hello world"
        cy.mount(<SketchPreview base64={base64} name={sketchName} />)
  })

  it('Verify sketch preview displays sketch name', () => {
    var base64 = "";
    var sketchName = "Hello world"
    cy.mount(<SketchPreview base64={base64} name={sketchName} />)

    cy.contains(sketchName)
  })

  it('Verify edit button takes you to new page', () => {
    var base64 = "";
    var sketchName = "Hello world"
    const callback = cy.spy().as('callback')

    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/edit/")
    })
    cy.mount(<SketchPreview base64={base64} name={sketchName} />)
    cy.get('.login-button').click()
  })


})