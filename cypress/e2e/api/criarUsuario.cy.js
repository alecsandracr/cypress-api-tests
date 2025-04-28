// import '../../support/commands'

// describe('Teste com intercept e mock ', () => {
//     it('Deve mock para criar de usuário', () => {
//         cy.fixture('usuarios/mockUsuario').then((tmock) => {
//             cy.intercept('POST', 'https://reqres.in/api/users',{
//                 statusCode: 201,
//                 body:{tmock}
//                      }).as('mockCriarUser')
//             cy.criarUsuario(tmock.name, tmock.job).then((response) => {
//                 expect(response.status).to.eq(201)
//                 // expect(response.body).to.have.property('id')
//                 // expect(response.body).to.have.property('name')

//             })
            
//       cy.wait('@mockCriarUser');
//         })
        
//     })
// })

describe('Teste com intercept e mock via página HTML', () => {
  it('Deve interceptar criação de usuário com mock', () => {
    cy.fixture('usuarios/mockUsuario').then((tmock) => {
      cy.intercept('POST', 'https://reqres.in/api/users', {
        statusCode: 201,
        body: tmock
      }).as('mockCriarUser')

      // Abre o HTML 
      cy.visit('cypress/fixtures/index.html')

      // Clica no botão que faz o fetch
      cy.get('#criar').click()

      // Aguarda o intercept
      cy.wait('@mockCriarUser').then((intercepted) => {
        expect(intercepted.response.statusCode).to.eq(201)
        expect(intercepted.response.body).to.have.property('name', tmock.name)
      })
    })
  })  
})
