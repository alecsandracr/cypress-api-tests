Cypress.Commands.add('realizarLogin', (email, password) => {
    return cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        headers: {
            "Content-Type": "application/json"
        },
        body: { email, password }

    })
})

Cypress.Commands.add('loginAusenciaSenha', (email, password) => {
    return cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        failOnStatusCode: false,
        headers: {
            "Content-Type": "application/json"
        },
        body: { email, password }

    })
})