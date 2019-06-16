describe('Login screen', () => {
    it('Should login', () => {
        cy.get('input[name=email]').type('osmarpetry@gmail.com')
        cy.get('input[name=password]').type('osmarpetry@gmail.com')
        cy.get('form').submit()
    })
})
