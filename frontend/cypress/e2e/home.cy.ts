describe('Home Page', () => {
  it('Visit home page', () => {
    cy.visit('/')
    cy.get('[data-test="audit input"]').type('https://google.com')
    cy.get('[data-test="audit submit"]').click()
    // cy.get('.right-pannel > .gap-4').click();
  })
})
