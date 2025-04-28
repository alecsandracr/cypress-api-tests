// Cypress.Commands.add('getToken', (user, passwd) => {
//     cy.request({
//         method: 'POST',
//         url: 'https://barrigarest.wcaquino.me/signin',
//         body: {
//             email: user,
//             redirecionar: false,
//             senha: passwd
//         }
//     }).then(resp => {
//         return resp.body.token
//     });

// });

// Cypress.Commands.add('registrarUsuario', (email, password) => {
//     return cy.request({
//         method: 'POST',
//         url: 'https://reqres.in/api/register',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: { email, password }

//     })

// });

// Cypress.Commands.add('registrarUsuarioFalha', (email, password) => {
//     return cy.request({
//         method: 'POST',
//         url: 'https://reqres.in/api/register',
//         failOnStatusCode: false,
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: { email, password }

//     })

// })

import './commands/usuarioLogin'
import './commands/login'
import './commands/criarUsuario'
