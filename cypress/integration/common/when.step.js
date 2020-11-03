import { When } from 'cypress-cucumber-preprocessor/steps'

When('I click on href {string}', href => {
    cy.get(`[href="/${href}"]`).click()
})

When('I click on first element a', () => {
    cy.get('a').first().click()
})

When('I type {string} in {string}', (value, input) => {
    cy.get(`input[name=${input}]`).type(value)
})

When('I click in {string}', button => {
    cy.get(`button[name=${button}]`).click()
})

When('I click in link {string}', link => {
    cy.get(`a[name=${link}]`).click()
})

When('I wait {string} seconds', seconds => {
    cy.wait(seconds * 1000)
})
