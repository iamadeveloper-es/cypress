describe('My First Test', () => {
  it('clicks the button first and second time', () => {

    cy.visit('http://127.0.0.1:5500/index.html')

    cy.contains('Send').click()

    cy.get('#content').should('be.visible')
    cy.get('#content').contains('Hola, soy un contenido dinámico')

    // cy.get('#content').should('have', 'fake@email.com')
    cy.get('.title').should('be.visible')
    cy.get('.title').contains('Hola')

    cy.contains('Send').click()
    cy.get('#content').should('not.be.visible')
  })
})