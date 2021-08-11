describe('Anecdotes', function () {
  it('Checking if homepage has right texts', function () {
    cy.visit('http://localhost:3001')
    cy.contains('Anecdotes')
    cy.contains('If it hurts, do it more often')
  })
  it('Checking that if user adds new anecdote, it will get saved to database', function () {
    cy.get('#inputValue').type('Creating now a test anecdote!')
    cy.get('#inputButton').click()
    cy.contains('Creating now a test anecdote!')
  })
})
