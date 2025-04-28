Cypress.Commands.add('criarUsuario', (name, job) => {
    return  cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        headers: {
            "Content-Type": "application/json"
        },
        body: {name, job }
    })
})
