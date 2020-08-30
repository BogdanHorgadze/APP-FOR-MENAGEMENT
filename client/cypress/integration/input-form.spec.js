describe('Input form',() => {
  beforeEach(() => {
    cy.visit('/notes')
  })

  it('focuses input on load', () => {

    cy.focused()
      .should('have.class', 'inp')
  })

  it('accepts input', ()=> {
     const typedText = 'something'

     cy.get('.inp')
     .type(typedText)
     .should('have.value', typedText)
     cy.get('#but')
      .click()
  })
})
  