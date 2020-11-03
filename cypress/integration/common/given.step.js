import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I go to {string}', url => {
    cy.visit(url)
})

Given('I reload page', () => {
    cy.reload()
})

Given(
    "I'm in {string}-{string}-{string} {string}:{string}",
    (year, month, day, hour, minute) => {
        cy.clock(Date.UTC(year, month, day, hour, minute), ['Date'])
    }
)
