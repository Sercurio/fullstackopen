describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    localStorage.removeItem('user')
    const user = {
      name: 'Louis',
      username: 'root',
      password: 'root',
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function () {
    cy.get('#usernameInput')
    cy.get('#passwordInput')
    cy.get('#loginButton')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#usernameInput').type('root')
      cy.get('#passwordInput').type('root')
      cy.get('#loginButton').click()

      cy.contains('root logged in')
    })

    it('fails with wrong credentials', function () {
      cy.get('#usernameInput').type('undefined')
      cy.get('#passwordInput').type('undefined')
      cy.get('#loginButton').click()

      cy.get('.error')
        .should('contain', 'ERROR login')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
    })
  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'root', password: 'root' })
    })

    it('A blog can be created', function () {
      cy.contains('create blog').click()
      cy.get('#title').type('Vim is best')
      cy.get('#author').type('vimorg')
      cy.get('#url').type('http://vim.org')
      cy.get('#create').click()

      cy.contains('Vim is best')
    })

    it('like button works', function () {
      cy.contains('create blog').click()
      cy.get('#title').type('Vim is best')
      cy.get('#author').type('vimorg')
      cy.get('#url').type('http://vim.org')
      cy.get('#create').click()

      cy.contains('Vim is best').contains('view').click()
      cy.contains('Vim is best').parent().get('.likeButton').as('likeButton')
      cy.get('@likeButton').click()
      cy.contains('Vim is best').parent().contains('likes 1')
    })

    it('user can delete blog from him', function () {
      cy.contains('create blog').click()
      cy.get('#title').type('Vim is best')
      cy.get('#author').type('vimorg')
      cy.get('#url').type('http://vim.org')
      cy.get('#create').click()

      cy.contains('Vim is best').contains('view').click()
      cy.contains('Vim is best').parent().get('.deleteButton').click()

      cy.contains('Vim is best').should('not.exist')
    })

    it('user cannot delete blog from not him', function () {
      localStorage.removeItem('user')
      const user = {
        name: 'other',
        username: 'other',
        password: 'other',
      }
      cy.request('POST', 'http://localhost:3003/api/users/', user)

      cy.login({ username: 'other', password: 'other' })

      cy.contains('create blog').click()
      cy.get('#title').type('otherBlog')
      cy.get('#author').type('otherBlog')
      cy.get('#url').type('otherBlog')

      cy.get('#create').click()

      localStorage.removeItem('user')
      cy.visit('http://localhost:3000')
      cy.login({ username: 'root', password: 'root' })

      cy.contains('otherBlog').parent().contains('view').click()
      cy.contains('otherBlog').parent().get('.deleteButton').should('not.exist')
    })

    it('sorting according to likes', function () {
      cy.contains('create blog').click()
      cy.get('#title').type('Vim is best')
      cy.get('#author').type('vimorg')
      cy.get('#url').type('http://vim.org')
      cy.get('#create').click()

      cy.contains('create blog').click()
      cy.get('#title').type('otherBlog1')
      cy.get('#author').type('otherBlog2')
      cy.get('#url').type('otherBlog3')
      cy.get('#create').click()

      cy.contains('create blog').click()
      cy.get('#title').type('otherBlog4')
      cy.get('#author').type('otherBlog5')
      cy.get('#url').type('otherBlog6')
      cy.get('#create').click()

      cy.contains('Vim is best').contains('view').click()
      cy.contains('Vim is best').contains('like').as('likeButton')
      cy.get('@likeButton').click()

      cy.get('@likeButton').click()

      cy.get('@likeButton').click()

      cy.contains('otherBlog1').contains('view').click()
      cy.contains('otherBlog1').contains('like').as('likeButton2')
      cy.get('@likeButton2').click()

      cy.get('@likeButton2').click()

      cy.contains('otherBlog4').contains('view').click()
      cy.contains('otherBlog4').contains('like').as('likeButton3')
      cy.get('@likeButton3').click()

      cy.get('.blog').eq(0).contains('Vim is best')
      cy.get('.blog').eq(1).contains('otherBlog1')
      cy.get('.blog').eq(2).contains('otherBlog4')

      cy.contains('otherBlog4').contains('like').as('likeButton3')
      cy.get('@likeButton3').click()

      cy.get('@likeButton3').click()

      cy.get('@likeButton3').click()

      cy.get('@likeButton3').click()

      cy.get('@likeButton3').click()

      cy.get('.blog').eq(0).contains('otherBlog4')
      cy.get('.blog').eq(1).contains('Vim is best')
      cy.get('.blog').eq(2).contains('otherBlog1')
    })
  })
})
