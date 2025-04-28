import '../../support/commands'

describe('Registrar usuário ', () => {

  it('Registrar novo usuário com dados válidos', () => {
    //Carrega o conteúdo do arquivo válido.json
    cy.fixture('usuarios/valido').then((data) => {

      cy.registrarUsuario(data.email, data.password)
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('id')
          expect(response.body).to.have.property('token')
        })
    })
  })

  it('Registrar novo usuário - ausência de senha', () => {
    cy.fixture('usuarios/invalido').then((data) => {
      cy.registrarUsuarioFalha(data.email, data.password)
        .then((response) => {
          expect(response.status).to.eq(400) // ou outro status esperado
          expect(response.body.error).to.eq("Missing password")
        })
    })
  })

})




