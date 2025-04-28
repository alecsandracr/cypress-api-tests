Cypress.Commands.add('registrarUsuario', (email, password) => {
    return cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        headers: {
            "Content-Type": "application/json"
        },
        body: { email, password }

    })
})

Cypress.Commands.add('registrarUsuarioFalha', (email, password) => {
    return cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        failOnStatusCode: false,
        headers: {
            "Content-Type": "application/json"
        },
        body: { email, password }

    })
})
