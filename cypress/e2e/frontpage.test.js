/// <reference types="Cypress" />
describe("Frontpage tests", () => {
  it('Visits the Home page', () => {
    cy.visit("/")

    // Ensure register button is not empty.
    cy.get('main .cta a').should('have.attr', 'href')
      .then((href) => {
        cy.wrap(href).should('not.be.empty')
      })

    // Ensure sessions critical data (time & title) are not empty.
    cy.get('main .grid-session')
      .then((div) => {
        cy.wrap(div).get('time').should('not.be.empty')
        cy.wrap(div).get('h2').should('not.be.empty')
      })
  })
})
