import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('I should see {string} in the url', url => {
    cy.url().should('include', url)
})

Then('I should\'t see {string} in the url', url => {
    cy.url().should('not.include', url)
})

Then('I should see {string}', content => {
    cy.contains(content)
})

Then('I should see the button {string} disabled', button => {
    cy.get(`button[name=${button}]`).should('be.disabled')
})

Then('I should see {string} empty', input => {
    cy.get(`input[name=${input}]`).should('be.empty')
})

